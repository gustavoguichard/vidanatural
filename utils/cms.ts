import Prismic from 'prismic-javascript'
import get from 'lodash/get'

export const apiEndpoint = process.env.PRISMIC_API || ''
export const accessToken = process.env.PRISMIC_TOKEN || ''
const client = Prismic.client(apiEndpoint, { accessToken })

export const query = async (predicates: any, options: any) => {
  const response = await client.query(predicates, options)
  return response
}

export const getBySlug = async (type: string, uid: string) => {
  const response = await client.getByUID(type, uid, {})
  return response
}

export const allByTypeAndTags = async (
  type: string,
  tags?: string[],
  options?: any,
) => {
  const response = await query(
    tags
      ? [
          Prismic.Predicates.at('document.type', type),
          Prismic.Predicates.any('document.tags', tags),
        ]
      : Prismic.Predicates.at('document.type', type),
    { pageSize: 1000, ...options },
  )
  return get(response, 'results', [])
}
