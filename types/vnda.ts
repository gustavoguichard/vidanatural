export interface FormKeys {
  a_password?: string
  key: string
  [key: string]: string | undefined
}

export interface Cart {
  agent: null | unknown
  billing_address_id: null | unknown
  channel: string
  code: string
  coupon_code: null | string
  discount: null | unknown
  discount_price: number
  id: number
  client_id: number | null
  items: Array<{
    available_quantity: number
    delivery_days: number
    id: number
    image_url: string
    price: number
    product_id: number
    product_name: string
    product_reference: string
    product_type: string
    product_url: string
    quantity: number
    subtotal: number
    total: number
    variant_name: string
    variant_price: number
    variant_sku: string
  }>
  items_count: number
  rebate_discount: number
  rebate_token: null | unknown
  shipping_address_id: null | unknown
  shipping_method: null | unknown
  token: string
  shipping_price: number
  subtotal: number
  subtotal_discount: number
  total: number
  total_discount: number
  total_for_deposit: number
  total_for_pix: number
  total_for_slip: number
  user_id: null
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
