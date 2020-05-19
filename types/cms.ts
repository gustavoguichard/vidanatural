export interface Post {
  uid: string
  first_publication_date: Date
  data: {
    title: string
    date?: Date
    body: PostBody[]
    header_image?: object
    author: {
      id: string
    }
  }
}

export interface Member {
  id: string
  uid: string
  data: {
    name: any
  }
}

export interface PostBody {
  type: string
  text: string
  spans: object[]
}
