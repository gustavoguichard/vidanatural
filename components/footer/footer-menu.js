import { Grid, useMediaQuery } from '@material-ui/core'

import theme from 'lib/theme'

import Link from 'components/link'

import menu from 'data/menu'

const FooterMenu = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid container justify="space-between" spacing={isMobile ? 0 : 2}>
      {menu.footerLinks.map((tree, index) => (
        <Grid item key={`tree-${index}`} md={6}>
          <nav>
            <ul
              css={{
                listStyle: 'none',
                padding: 0,
                [theme.breakpoints.up('md')]: {
                  margin: `${theme.spacing()}px 0`,
                },
                [theme.breakpoints.down('sm')]: {
                  margin: 0,
                },
              }}
            >
              {tree.map((item, i) => (
                <li key={`item-${i}`}>
                  <Link href={item.path} as={item.as}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Grid>
      ))}
    </Grid>
  )
}

export default FooterMenu
