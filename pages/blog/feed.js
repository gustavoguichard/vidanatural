import api from 'lib/api'
import parsePost from 'lib/parsers/post'
import RSS from 'rss'
import { BLOG_DESCRIPTION } from 'lib/constants'

const config = {
  title: 'Blog da Vida Natural',
  description: BLOG_DESCRIPTION,
  feed_url: 'https://vidanatural.eco.br/blog/feed',
  site_url: 'https://vidanatural.eco.br/blog/',
  image_url: 'https://vidanatural.eco.br/static/logo_bg.jpg',
  managingEditor: 'falecom@vidanatural.eco.br (Lila Ozorio)',
  webMaster: 'guga@vidanatural.eco.br (Gustavo Guichard)',
  copyright: '2020 Vida Natural',
  language: 'pt-br',
  ttl: '300',
}

const Feed = ({ xml }) => xml

export async function getServerSideProps({ res }) {
  try {
    const authors = await api.cms.allByTypeAndTags('team_member')
    const response = await api.cms.allByTypeAndTags('blog_post', null, {
      orderings: '[my.blog_post.date desc]',
    })
    const posts = response.map((post) => parsePost(post, authors))
    const [lastPost] = posts
    const feed = new RSS({
      ...config,
      pubDate: lastPost.date,
    })
    posts.forEach((post) => {
      feed.item({
        title: post.titleText,
        description: post.excerpt,
        url: `${process.env.API_IP}/blog/${post.uid}`,
        guid: post.id,
        categories: post.tags,
        author: post.author.fullName,
        date: post.date,
        enclosure: post.thumbUrl
          ? {
              url: post.thumbUrl,
              type: 'image/jpeg',
            }
          : null,
        image: post.thumbUrl
          ? {
              title: post.titleText,
              url: post.thumbUrl,
              link: `${process.env.API_IP}/blog/${post.uid}`,
            }
          : null,
      })
    })
    const xml = feed.xml()
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })
    res.end(xml)
    return { props: { xml } }
  } catch (e) {
    // eslint-disable-next-line
    console.log(e)
    res.end(JSON.stringify(e))
    return { props: { xml: null } }
  }
}

export default Feed
