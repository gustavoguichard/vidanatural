import { Grid, Typography } from '@material-ui/core'
import Link from 'src/components/Link'
import theme from 'src/ui/theme'
import menu from 'data/menu'

const FooterMenu = () => (
  <Grid container spacing={2}>
    {menu.footerLinks.map((tree, index) => (
      <Grid item key={`tree-${index}`} xs={6}>
        <Typography
          variant="h5"
          color="inherit"
          css={{ marginBottom: theme.spacing() }}
        >
          {tree.name}
        </Typography>
        <nav>
          <ul
            css={{
              listStyle: 'none',
              padding: 0,
              margin: `${theme.spacing()}px 0`,
            }}
          >
            {tree.links.map((item, i) => (
              <li
                key={`item-${i}`}
                css={{
                  [theme.breakpoints.down('xs')]: { padding: 10 },
                }}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Grid>
    ))}
  </Grid>
)

export default FooterMenu