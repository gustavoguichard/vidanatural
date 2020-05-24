import { useState } from 'react'
import { Grid, Typography, useTheme } from '@material-ui/core'

import { resolveLink } from 'lib/domain'

import ButtonLink from 'components/button-link'
import Carousel from 'components/carousel'
import Hero from 'components/hero'

const MATCH_Y = { top: 'flex-start', bottom: 'flex-end', center: 'center' }
const MATCH_X = { left: 'flex-start', right: 'flex-end', center: 'center' }

const HomeHero = ({ banners, setVariant }) => {
  const theme = useTheme()
  const [isDark, setIsDark] = useState()

  const handleChange = ({ current: page }) => {
    const banner = banners[page - 1]
    const variant = banner.data.is_dark ? 'secondary' : 'primary'
    setVariant(variant)
    setIsDark(banner.data.is_dark)
  }

  return (
    <Carousel
      onChange={handleChange}
      css={{
        '.carousel-bt .MuiSvgIcon-root': {
          color: isDark ? theme.palette.common.black : 'white',
        },
      }}
    >
      {banners.map(({ data, id }) => {
        const variant = data.is_dark ? 'secondary' : 'primary'
        return (
          <Hero
            size="full"
            background={data.image.url}
            mobileBg={data.image.mobile.url}
            key={id}
            position="relative"
            style={{
              justifyContent: MATCH_Y[data.vertical],
              alignItems: MATCH_X[data.horizontal],
            }}
          >
            <Grid
              item
              xs={12}
              sm={7}
              md={6}
              css={{
                color: theme.palette[variant].contrastText,
                textAlign: data.horizontal === 'center' ? 'center' : 'left',
                backgroundColor: `rgba(${
                  data.is_dark ? '255,255,255' : '0,0,0'
                },.4)`,
                padding: theme.spacing(2),
              }}
            >
              <Typography variant="h3" color="inherit">
                {data.title}
              </Typography>
              {data.subtitle ? (
                <Typography
                  variant="body1"
                  color="inherit"
                  css={{ margin: theme.spacing(2, 0), fontWeight: 'bold' }}
                >
                  {data.subtitle}
                </Typography>
              ) : null}
              <ButtonLink
                color="primary"
                center={data.horizontal === 'center'}
                variant="outlined"
                size="large"
                href={resolveLink(data.link.url)}
                css={{
                  color: 'inherit',
                  borderRadius: 0,
                  borderColor: 'inherit',
                  borderWidth: 3,
                  '&:hover, &:focus': {
                    borderWidth: 3,
                    borderColor: theme.palette.secondary.main,
                  },
                }}
              >
                {data.button_text || 'Comprar'}
              </ButtonLink>
            </Grid>
          </Hero>
        )
      })}
    </Carousel>
  )
}

export default HomeHero
