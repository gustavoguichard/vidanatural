export interface FormKeys {
  a_password?: string
  key: string
  [key: string]: string | undefined
}
export interface VndaProduct {
  id: number
  active: boolean
  available: boolean
  slug: string
  reference: string
  name: string
  description: any
  html_description: string
  image_url: string
  url: string
  tags: ProductTag[]
  tag_names: string[]
  price: number
  on_sale: boolean
  sale_price: number
  discount_rule?: {
    amount: number
    type: string
  }
  images: ProductImg[]
  variants: ProductVariant[]
}

export interface ParsedProduct extends VndaProduct {
  isKit: boolean
  stock: number
  inStock: boolean
  category_tags?: ProductTag[]
}

export interface ProductTag {
  name: string
  title: string
  type: string
  tag_type?: string
}

export interface ProductImg {
  sku?: string
  url: string
}

export interface ProductVariant {
  id: number
  sku: string
  name: string
  price: number
  available: boolean
  available_quantity: number
  stock: number
}

export interface API2Response {
  data?: any
  error?: string
  status: number
}
