import { memo } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialLinks = ({ facebook, instagram, linkedin, github }) => (
  <ul role="list" className="flex space-x-5 text-salmon-500">
    {linkedin?.url && (
      <li>
        <a
          href={linkedin.url}
          title="Ir para perfil do LinkedIn"
          className="text-current hover:text-gray-300"
        >
          <span className="sr-only">LinkedIn</span>
          <FaLinkedin
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
          />
        </a>
      </li>
    )}
    {instagram?.url && (
      <li>
        <a
          href={instagram.url}
          title="Seguir nosso Instagram"
          className="text-current hover:text-gray-300"
        >
          <span className="sr-only">Instagram</span>
          <FaInstagram
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
          />
        </a>
      </li>
    )}
    {facebook?.url && (
      <li>
        <a
          href={facebook.url}
          title="Ver no Facebook"
          className="text-current hover:text-gray-300"
        >
          <span className="sr-only">Facebook</span>
          <FaFacebook
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
          />
        </a>
      </li>
    )}
    {github?.url && (
      <li>
        <a
          href={github.url}
          title="Abrir GitHub"
          className="text-current hover:text-gray-300"
        >
          <span className="sr-only">GitHub</span>
          <FaGithub
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
          />
        </a>
      </li>
    )}
  </ul>
)

export default memo(SocialLinks)
