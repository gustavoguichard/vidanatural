export type DocumentType =
  | 'blog_post'
  | 'team_member'
  | 'faq_item'
  | 'testimonial'
  | 'home_banner'

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
  id: string
  uid: string
  tags: string[]
  first_publication_date?: string
  data: {
    title: string
    answer: PostBody[]
  }
}

export interface HomeBanner {
  id: string
  uid: string
  tags: string[]
  first_publication_date?: string
  data: {
    title: string
    subtitle?: string
    img: object
    order?: number
    link: object
    button_text?: string
    vertical?: 'center' | 'top' | 'bottom'
    horizontal?: 'left' | 'center' | 'right'
    is_dark: boolean
  }
}

export interface BlogPost {
  id: string
  uid: string
  tags: string[]
  first_publication_date?: string
  data: {
    title: string
    date?: Date
    body: PostBody[]
    header_image?: object
    author: TeamMember
  }
}

export interface TeamMember {
  id: string
  uid: string
  tags: string[]
  data: {
    name: string
    role: string
    bio: PostBody[]
    picture?: object
    instagram?: string
    facebook?: string
    linkeding?: string
    github?: string
  }
}

export interface Testimonial {
  id: string
  uid: string
  tags: string[]
  data: {
    name: string
    role?: string
    location?: string
    content: PostBody[]
    short_content?: PostBody[]
    picture: object
  }
}

export interface PostBody {
  type: string
  text: string
  spans: object[]
}
