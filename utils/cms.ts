import Prismic from 'prismic-javascript'
import get from 'lodash/get'

export const apiEndpoint = process.env.PRISMIC_API || ''
export const accessToken = process.env.PRISMIC_TOKEN || ''
const client = Prismic.client(apiEndpoint, { accessToken })

export const query = async (predicates: any, options: any) => {
  const response = await client.query(predicates, options)
  return response
}

export const allByTypeAndTags = async (type: string, tags?: string[]) => {
  const response = await query(
    tags
      ? [
          Prismic.Predicates.at('document.type', type),
          Prismic.Predicates.any('document.tags', tags),
        ]
      : Prismic.Predicates.at('document.type', type),
    { pageSize: 1000 },
  )
  return get(response, 'results', [])
}
