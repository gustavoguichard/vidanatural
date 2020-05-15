import get from 'lodash/get'
import range from 'lodash/range'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Box, CircularProgress, Typography } from '@material-ui/core'
import { getResizedImg } from 'utils/api'
import SwipeableViews from 'react-swipeable-views'
import Skeleton from 'src/ui/Skeleton'
import theme from 'src/ui/theme'

const ImageGallery = ({ product, isDesktop }) => {
  const { isFallback } = useRouter()

  const [index, setIndex] = useState(0)

  const imagesLenght = get(product, 'images.length', 2)
  const thumbStyle = {
    margin: theme.spacing(),
    width: 100,
    maxWidth: isDesktop ? 100 : `${100 / imagesLenght}%`,
    cursor: 'pointer',
    transition: 'all .6s',
  }

  return (
    <Box display="flex" flexDirection={isDesktop ? 'row' : 'column'}>
      {isFallback ? (
        <Skeleton css={{ flex: 1, minHeight: 300 }} />
      ) : (
        <Box
          position="relative"
          display="flex"
          alignItems="stretch"
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
                <img
                  className="responsive"
                  alt={product.title}
                  css={{
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 2,
                  }}
                  src={getResizedImg(img.url, 600)}
                />
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
                  src={getResizedImg(img.url, 100)}
                />
              </Box>
            ))}
          </SwipeableViews>
        </Box>
      )}
      {isDesktop ? null : isFallback ? (
        <Skeleton
          variant="text"
          css={{ margin: theme.spacing(2, 0), height: 40 }}
        />
      ) : (
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
          flexDirection={isDesktop ? 'column' : 'row'}
          justifyContent="center"
        >
          {isFallback
            ? range(2).map((i) => (
                <Skeleton
                  css={{ ...thumbStyle, minHeight: 100 }}
                  key={`thumb-${i}`}
                />
              ))
            : product.images.map((img, i) => (
                <img
                  key={i}
                  onClick={() => setIndex(i)}
                  alt={product.title}
                  css={{
                    ...thumbStyle,
                    boxShadow:
                      i === index
                        ? `0 0 0 2px ${theme.palette.common.black}`
                        : `0 0 0 0 black`,
                  }}
                  src={getResizedImg(img.url, 100)}
                />
              ))}
        </Box>
      )}
    </Box>
  )
}

export default ImageGallery
