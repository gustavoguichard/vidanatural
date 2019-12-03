import { useState } from 'react'
import { Box, CircularProgress } from '@material-ui/core'
import theme from 'src/ui/theme'
import { getResizedImg } from 'utils/api'

const ImageGallery = ({ product, isLarge }) => {
  const [index, setIndex] = useState(0)

  return (
    <Box display="flex" flexDirection={isLarge ? 'row' : 'column'}>
      <Box
        position="relative"
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        css={{ width: '100%', minHeight: 300 }}
      >
        <CircularProgress
          css={{
            alignSelf: 'center',
            position: 'absolute',
          }}
        />
        {product.images.map((img, i) =>
          index === i ? (
            <div key={`img-${i}`}>
              <img
                className="responsive"
                css={{
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 2,
                }}
                src={getResizedImg(img.url, 600)}
              />
              <img
                className="responsive"
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
            </div>
          ) : null,
        )}
      </Box>
      <Box
        css={{ order: isLarge ? -1 : 0 }}
        display="flex"
        flexDirection={isLarge ? 'column' : 'row'}
        justifyContent="center"
        flexWrap="wrap"
      >
        {product.images.map((img, i) => (
          <img
            key={i}
            onClick={() => setIndex(i)}
            css={{
              margin: theme.spacing(),
              cursor: 'pointer',
            }}
            src={getResizedImg(img.url, 100)}
          />
        ))}
      </Box>
    </Box>
  )
}

export default ImageGallery
