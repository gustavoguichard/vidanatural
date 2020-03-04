import { useState } from 'react'
import { Box, CircularProgress, Typography } from '@material-ui/core'
import { getResizedImg } from 'utils/api'
import SwipeableViews from 'react-swipeable-views'
import theme from 'src/ui/theme'

const ImageGallery = ({ product, isDesktop }) => {
  const [index, setIndex] = useState(0)

  return (
    <Box display="flex" flexDirection={isDesktop ? 'row' : 'column'}>
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
      {isDesktop ? null : (
        <Typography
          variant="h2"
          css={{
            textAlign: 'center',
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(2),
          }}
        >
          {product.title}
        </Typography>
      )}
      {product.images.length > 1 && (
        <Box
          css={{ order: isDesktop ? -1 : 0 }}
          px={isDesktop ? 0 : 1}
          display="flex"
          flexDirection={isDesktop ? 'column' : 'row'}
          justifyContent="center"
        >
          {product.images.map((img, i) => (
            <img
              key={i}
              onClick={() => setIndex(i)}
              alt={product.title}
              css={{
                boxShadow:
                  i === index
                    ? `0 0 0 2px ${theme.palette.common.black}`
                    : `0 0 0 0 black`,
                margin: theme.spacing(),
                width: 100,
                maxWidth: isDesktop ? 100 : `${100 / product.images.length}%`,
                cursor: 'pointer',
                transition: 'all .6s',
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
