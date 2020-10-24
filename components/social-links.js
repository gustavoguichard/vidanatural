import { memo } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialLink = ({ Icon, title, url, target }) =>
  url ? (
    <a
      title={title}
      href={url}
      target={target}
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-teal-600 rounded-full inline-flex p-1 hover:bg-gray-200 transition duration-300"
    >
      <Icon className="h-5 w-5" />
    </a>
  ) : null

const SocialLinks = ({ facebook, instagram, linkedin, github }) => {
  return (
    <div className="flex items-center space-x-1 -mt-2">
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
