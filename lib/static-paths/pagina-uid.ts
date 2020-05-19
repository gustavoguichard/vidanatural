import { GetStaticPaths } from 'next'

const getStaticPaths: GetStaticPaths = async () => ({
  paths: ['termos-e-condicoes'].map((pageId) => ({
    params: { pageId },
  })),
  fallback: true,
})

export default getStaticPaths
