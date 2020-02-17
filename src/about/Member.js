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

const SocialLink = ({ Icon, title, url }) =>
  url ? (
    <a title={title} href={url} target="_blank" rel="noopener">
      <IconButton title={title} tabIndex="-1">
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
        <SocialLink title="Abrir github" url={github} Icon={FaGithub} />
        <SocialLink
          title="Ir para perfil do LinkedIn"
          url={linkedin}
          Icon={FaLinkedin}
        />
        <SocialLink
          title="Seguir no Instagram"
          url={insta}
          Icon={FaInstagram}
        />
        <SocialLink title="Ver no Facebook" url={face} Icon={FaFacebook} />
      </CardActions>
    </Card>
  </Grid>
)

export default Member
