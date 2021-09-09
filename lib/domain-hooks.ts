import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import api from 'lib/api'
import useGlobal from 'lib/use-global'
import { getCategoryTags } from 'lib/domain'
import { useTimeout } from 'lib/hooks'

import type { ProductTag } from 'types/vnda'

export const useTagsMenu = () => {
  const [tags, setTags] = useState([] as ProductTag[])

  const fetchTags = async () => {
    const products = await api.vnda.clientFetch('products/list')
    const parsed = getCategoryTags(products)
    setTags(parsed as ProductTag[])
  }

  useEffect(() => {
    fetchTags()
  }, [])

  return {
    name: 'Loja',
    path: '/produto',
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

export const useInitialBanner = () => {
  const [, { notify }] = useGlobal()
  useTimeout(() => {
    if (typeof notify === 'function') {
      notify({
        title: 'Frete grátis para todo o Brasil',
        message: `A partir de R$ 160,00.`,
        type: 'info',
      })
    }
  }, 5000)
}

export const useCoupon = () => {
  const [, { notify, addCoupon }] = useGlobal()
  const router = useRouter()
  useEffect(() => {
    if (router.query.ccc && typeof notify === 'function') {
      notify({
        id: 10,
        title: 'Cupom aceito!',
        htmlMessage: `<p>Seu cupom <strong>${router.query.ccc}</strong> será aplicado na finalização da compra. Aproveite!</p>`,
        type: 'success',
        persist: true,
      })
      typeof addCoupon === 'function' && addCoupon(router.query.ccc as string)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])
}
