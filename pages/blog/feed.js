import api from 'lib/api'
import parsePost from 'lib/parsers/blog-post'
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
    const response = await api.cms.getByTypeAndTags('blog_post', {
      orderings: '[my.blog_post.date desc]',
      fetch: [
        'blog_post.title',
        'blog_post.body',
        'blog_post.author',
        'blog_post.header_image',
      ],
      fetchLinks: ['team_member.name', 'team_member.picture'],
    })
    const posts = response.map(parsePost)
    const [lastPost] = posts
    const feed = new RSS({
      ...config,
      pubDate: lastPost.date,
    })
    posts.forEach((post) => {
      const url = `https://${process.env.API_HOST}/blog/${post.uid}`
      feed.item({
        url,
        title: post.data.title,
        description: post.excerpt,
        guid: post.id,
        categories: post.tags,
        author: post.author.data.name,
        date: post.date,
        enclosure: post.thumbUrl
          ? {
              url: post.thumbUrl,
              type: 'image/jpeg',
            }
          : null,
        image: post.thumbUrl
          ? {
              title: post.data.title,
              url: post.thumbUrl,
              link: url,
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
