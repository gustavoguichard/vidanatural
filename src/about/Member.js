import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import MdContent from 'src/components/MdContent'

const SocialLink = ({ Icon, url }) =>
  url ? (
    <a href={url} target="_blank" rel="noopener">
      <IconButton>
        <Icon />
      </IconButton>
    </a>
  ) : null

const Member = ({
  name,
  bio,
  picture,
  role,
  face,
  insta,
  linkedin,
  github,
}) => (
  <Grid
    css={{ marginTop: '1rem', marginBottom: '1rem' }}
    item
    xs={12}
    sm={6}
    md={4}
  >
    <Card elevation={0}>
      <CardMedia
        css={{ height: 240, backgroundPositionY: 'top' }}
        image={`/static/images/team/${picture}`}
        title={name}
      />
      <CardContent css={{ paddingBottom: 0 }}>
        <Typography component="div" variant="body1">
          <strong>{name}</strong>
          <br />
          <Typography variant="subtitle2">{role}</Typography>
          <MdContent content={bio} />
        </Typography>
      </CardContent>
      <CardActions>
        <SocialLink url={github} Icon={FaGithub} />
        <SocialLink url={linkedin} Icon={FaLinkedin} />
        <SocialLink url={insta} Icon={FaInstagram} />
        <SocialLink url={face} Icon={FaFacebook} />
      </CardActions>
    </Card>
  </Grid>
)

export default Member
