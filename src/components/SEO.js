import get from 'lodash/get'
import { NextSeo } from 'next-seo'
import defaultConfig, { titleTemplate } from 'utils/next-seo.config'

const SEO = ({ title, description, ...props }) => (
  <NextSeo
    title={title || defaultConfig.title}
    description={description || defaultConfig.description}
    titleTemplate={title ? titleTemplate : undefined}
    openGraph={{
      ...defaultConfig.openGraph,
      ...get(props, 'openGraph', {}),
      description:
        description ||
        get(props, 'openGraph.description', defaultConfig.description),
    }}
    twitter={{
      ...defaultConfig.twitter,
      ...get(props, 'twitter', {}),
    }}
    {...props}
  />
)

export default SEO
