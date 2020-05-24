import { GetStaticPaths } from 'next'

const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export default getStaticPaths
