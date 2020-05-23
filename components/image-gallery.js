import { useState, useRef } from 'react'
import get from 'lodash/get'
import { Box, Typography } from '@material-ui/core'

import api from 'lib/api'
import theme from 'lib/theme'

import DiscountTag from 'components/products/discount-tag'
import Carousel from 'components/carousel'

const ImageGallery = ({ product, isDesktop }) => {
  const [index, setIndex] = useState(0)
  const imagesLenght = get(product, 'images.length', 2)

  const gallery = useRef()

  return (
    <Box display="flex" flexDirection={isDesktop ? 'row' : 'column'}>
      <Box
        position="relative"
        display="flex"
        alignItems="start"
        justifyContent="center"
        css={{ width: '100%', minHeight: 300 }}
      >
        <Carousel
          ref={gallery}
          NextButton={false}
          PrevButton={false}
          onChange={({ current }) => setIndex(current - 1)}
        >
          {product.images.map((img, i) => (
            <Box
              key={`img-${i}`}
              display="flex"
              justifyContent="center"
              position="relative"
            >
              <DiscountTag product={product} />
              <img
                className="responsive"
                alt={product.name}
                css={{
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 2,
                }}
                src={api.vnda.getResizedImg(img.url, 600)}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
      {isDesktop ? null : (
        <Typography
          variant="h2"
          css={{
            textAlign: 'center',
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(2),
          }}
        >
          {product.name}
        </Typography>
      )}
      {imagesLenght > 1 ? (
        <Box
          css={{ order: isDesktop ? -1 : 0 }}
          px={isDesktop ? 0 : 1}
          display="flex"
          flexWrap="wrap"
          flexDirection={isDesktop ? 'column' : 'row'}
          justifyContent="center"
        >
          {product.images.map((img, i) => (
            <img
              key={i}
              onClick={() => gallery.current.goTo(i)}
              alt={product.name}
              css={{
                margin: theme.spacing(),
                width: 100,
                maxWidth: isDesktop ? 100 : `${100 / imagesLenght}%`,
                cursor: 'pointer',
                transition: 'all .6s',
                boxShadow:
                  i === index
                    ? `0 0 0 2px ${theme.palette.common.black}`
                    : `0 0 0 0 black`,
              }}
              src={api.vnda.getResizedImg(img.url, 100)}
            />
          ))}
        </Box>
      ) : null}
    </Box>
  )
}

export default ImageGallery
