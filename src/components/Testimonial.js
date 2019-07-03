import ReactMarkdown from 'react-markdown'
import compact from 'lodash/compact'
import { Avatar, Paper, Grid, Typography } from '@material-ui/core'
import { FormatQuote } from '@material-ui/icons'
import { nl2Br } from 'utils/helpers'
import theme from 'src/ui/theme'

const Testimonial = ({ name, size, role, picture, location, content }) => (
  <Grid sm={6 * size} md={4 * size} item>
    <Paper
      css={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
        marginBottom: theme.spacing(5),
        textShadow: 'none',
      }}
    >
      <FormatQuote css={{ fontSize: 60 }} color="primary" />
      <Typography
        css={{
          color: theme.palette.primary.light,
          fontStyle: 'italic',
          marginBottom: theme.spacing(3),
        }}
        component="div"
        variant="body2"
      >
        <ReactMarkdown escapeHtml={false} source={nl2Br(content)} />
      </Typography>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="caption">
        {compact([role, location]).join(' • ')}
      </Typography>
      <Avatar
        className="MuiPaper-elevation15"
        css={{
          width: 100,
          height: 100,
          bottom: -theme.spacing(),
          marginBottom: -50,
        }}
        alt={name}
        src={`/static/images/testimonials/thumbs/${picture}.jpg`}
      />
    </Paper>
  </Grid>
)

export default Testimonial
