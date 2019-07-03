import ReactMarkdown from 'react-markdown'
import compact from 'lodash/compact'
import { Avatar, Box, Paper, Grid, Typography } from '@material-ui/core'
import { GoQuote } from 'react-icons/go'
import { nl2Br } from 'utils/helpers'
import theme from 'src/ui/theme'

const Testimonial = ({ name, size, role, picture, location, content }) => (
  <Grid sm={6 * size} md={4 * size} item>
    <Paper
      css={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: `${theme.spacing(4)}px ${theme.spacing(4)}px ${theme.spacing(
          2,
        )}px`,
        marginBottom: theme.spacing(5),
        textAlign: 'left',
        textShadow: 'none',
      }}
    >
      <Typography
        css={{
          color: theme.palette.primary.light,
          marginBottom: theme.spacing(2),
        }}
        align="left"
        component="div"
        variant="body2"
      >
        <GoQuote css={{ position: 'absolute', fontSize: '1.25rem' }} />
        <ReactMarkdown
          css={{
            textIndent: '1.5rem',
            '&::first-letter': {
              fontSize: '1.25rem',
            },
          }}
          escapeHtml={false}
          source={nl2Br(content)}
        />
      </Typography>
      <Box display="flex">
        <Box flex={1} mr={2}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="caption">
            {compact([role, location]).join(' • ')}
          </Typography>
        </Box>
        <Avatar
          className="MuiPaper-elevation15"
          css={{
            alignSelf: 'flex-end',
            width: 100,
            right: -10,
            height: 100,
            marginBottom: -50,
          }}
          alt={name}
          src={`/static/images/testimonials/thumbs/${picture}.jpg`}
        />
      </Box>
    </Paper>
  </Grid>
)

export default Testimonial
