import { memo } from 'react'
import { IconButton } from '@material-ui/core'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialLink = ({ Icon, title, url, target }) =>
  url ? (
    <a title={title} href={url} target={target} rel="noopener noreferrer">
      <IconButton title={title} tabIndex="-1">
        <Icon />
      </IconButton>
    </a>
  ) : null

const SocialLinks = ({ facebook, instagram, linkedin, github }) => {
  return (
    <div>
      <SocialLink title="Abrir github" {...github} Icon={FaGithub} />
      <SocialLink
        title="Ir para perfil do LinkedIn"
        {...linkedin}
        Icon={FaLinkedin}
      />
      <SocialLink
        title="Seguir no Instagram"
        {...instagram}
        Icon={FaInstagram}
      />
      <SocialLink title="Ver no Facebook" {...facebook} Icon={FaFacebook} />
    </div>
  )
}

export default memo(SocialLinks)
