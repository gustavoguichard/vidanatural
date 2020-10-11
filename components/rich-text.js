import { RichText as PrismicRichText } from 'prismic-reactjs'

import { classes } from 'lib/utils'

const RichText = ({ children, className }) => {
  const cx = classes('rich-text', className)
  return (
    <div className={cx}>
      <PrismicRichText render={children} />
    </div>
  )
}

export default RichText
