import type { GetStaticPaths } from 'next'

const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
})

export default getStaticPaths
