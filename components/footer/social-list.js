import { FiFacebook, FiInstagram } from 'react-icons/fi'

const icons = {
  facebook: (cx) => <FiFacebook className={cx} />,
  instagram: (cx) => <FiInstagram className={cx} />,
}

const Icon = ({ site, children, href }) => (
  <a
    className="inline-block"
    href={href}
    title={children}
    target="_blank"
    rel="noreferrer noopener"
  >
    {icons[site]('w-5 h-5 m-2 hover:text-teal-300 transition duration-300')}
  </a>
)

const SocialList = () => (
  <div className="social-list lg:items-end lg:flex lg:flex-col">
    <Icon site="instagram" href="https://instagram.com/vidanatural.eco">
      Ir para nosso Instagram
    </Icon>
    <Icon site="facebook" href="http://facebook.com/vidanatural.eco">
      Ir para nosso Facebook
    </Icon>
  </div>
)

export default SocialList
