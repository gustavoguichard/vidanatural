export type DocumentType = 'blog_post' | 'team_member' | 'faq_item'

export interface QueryOptions {
  after?: string | string[]
  fetch?: string | string[]
  fetchLinks?: string | string[]
  ref?: string
  orderings?: string
  lang?: string
  pageSize?: number
  page?: number
}

export interface FaqItem {
  uid: string
  first_publication_date?: string
  data: {
    title?: string
    answer?: PostBody[]
  }
}

export interface BlogPost {
  uid: string
  first_publication_date?: string
  data: {
    title?: string
    date?: Date
    body?: PostBody[]
    header_image?: object
    author: TeamMember
  }
}

export interface TeamMember {
  id: string
  uid: string
  data: {
    name: string
    role: string
    bio?: PostBody[]
    picture?: object
    instagram: string
    facebook: string
    linkeding: string
    github: string
  }
}

export interface PostBody {
  type: string
  text: string
  spans: object[]
}
