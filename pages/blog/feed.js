import * as cms from 'utils/cms'
import { parsePost } from 'utils/contentParsers'
import RSS from 'rss'
import moment from 'moment'

const config = {
  title: 'Blog da Vida Natural',
  description:
    'Leia aqui artigos sobre cosmética natural, produtos orgânicos, veganos, artesanais e DIY (faça você mesmo).',
  feed_url: 'https://vidanatural.eco.br/blog/rss.xml',
  site_url: 'https://vidanatural.eco.br/blog/',
  image_url: 'https://vidanatural.eco.br/static/icon.png',
  managingEditor: 'falecom@vidanatural.eco.br',
  webMaster: 'guga@vidanatural.eco.br',
  copyright: '2020 Vida Natural',
  language: 'pt-br',
  ttl: '300',
}

const Feed = ({ xml }) => xml

export async function getServerSideProps({ res }) {
  try {
    const authors = await cms.allByTypeAndTags('team_member')
    const response = await cms.allByTypeAndTags('blog_post', null, {
      orderings: '[my.blog_post.date desc]',
    })
    const posts = response.map((post) => parsePost(post, authors))
    const [lastPost] = posts
    const feed = new RSS({
      ...config,
      pubDate: moment(lastPost.date).format('ddd, DD MMM YYYY HH:mm:ss [BRT]'),
    })
    posts.forEach((post) => {
      feed.item({
        title: post.titleText,
        description: post.excerpt,
        url: `${process.env.API_IP}/blog/${post.uid}`,
        guid: post.id,
        categories: post.tags,
        author: post.author.fullName,
        date: moment(post.date).format('ddd, DD MMM YYYY HH:mm:ss [BRT]'),
        image: {
          title: post.titleText,
          url: post.featuredUrl,
          link: `${process.env.API_IP}/blog/${post.uid}`,
        },
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
