import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import api from 'lib/api'
import useGlobal from 'lib/use-global'
import { getCategoryTags } from 'lib/domain'
import { VndaProduct, ProductTag } from '../types/vnda'

export const useTagsMenu = () => {
  const [tags, setTags] = useState([] as ProductTag[])

  const fetchTags = async () => {
    const products: VndaProduct[] = await api.vnda.search()
    const parsed = getCategoryTags(products)
    setTags(parsed as ProductTag[])
  }

  useEffect(() => {
    fetchTags()
  }, [])

  return {
    name: 'Loja',
    links: [
      {
        name: 'Todos os produtos',
        path: '/produtos',
      },
      ...tags.map((tag) => ({
        name: tag.title,
        path: `/produtos?filter=${tag.name}`,
      })),
    ],
  }
}

export const useCoupon = () => {
  const [, { notify }] = useGlobal()
  const router = useRouter()
  useEffect(() => {
    if (router.query.ccc && typeof notify === 'function') {
      notify({
        htmlMessage: `<span>Seu cupom <strong>${router.query.ccc}</strong> será aplicado na finalização da compra. Aproveite!</span>`,
        type: 'alert',
        persist: true,
      })
      api.vnda.registerCoupon(router.query.ccc as string)
    }
  }, [router])
}
