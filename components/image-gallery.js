import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import get from 'lodash/get'
import { Box, CircularProgress, Typography } from '@material-ui/core'

import api from 'lib/api'
import theme from 'lib/theme'

import DiscountTag from 'components/products/discount-tag'

const ImageGallery = ({ product, isDesktop }) => {
  const [index, setIndex] = useState(0)
  const imagesLenght = get(product, 'images.length', 2)

  return (
    <Box display="flex" flexDirection={isDesktop ? 'row' : 'column'}>
      <Box
        position="relative"
        display="flex"
        alignItems="start"
        justifyContent="center"
        css={{
          width: '100%',
          minHeight: 300,
          '& .react-swipeable-view-container': {
            height: '100%',
          },
        }}
      >
        <CircularProgress
          css={{
            alignSelf: 'center',
            position: 'absolute',
          }}
        />
        <SwipeableViews
          enableMouseEvents
          index={index}
          onChangeIndex={setIndex}
        >
          {product.images.map((img, i) => (
            <Box
              display="flex"
              justifyContent="center"
              css={{ height: '100%' }}
              key={`img-${i}`}
            >
              <Box position="relative">
                <DiscountTag product={product} />
                <img
                  className="responsive"
                  alt={product.title}
                  css={{
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 2,
                  }}
                  src={api.vnda.getResizedImg(img.url, 600)}
                />
              </Box>
              <img
                className="responsive"
                alt={product.title}
                css={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                }}
                src={api.vnda.getResizedImg(img.url, 100)}
              />
            </Box>
          ))}
        </SwipeableViews>
      </Box>
      {isDesktop || (
        <Typography
          variant="h2"
          css={{
            textAlign: 'center',
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(2),
          }}
        >
          {product.title || product.name}
        </Typography>
      )}
      {imagesLenght > 1 && (
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
              onClick={() => setIndex(i)}
              alt={product.title}
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
      )}
    </Box>
  )
}

export default ImageGallery
