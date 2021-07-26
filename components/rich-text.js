import { RichText as PrismicRichText } from 'prismic-reactjs'

import { cx } from 'lib/utils'

const RichText = ({ children, className }) => (
  <div className={cx('rich-text', className)}>
    <PrismicRichText render={children} />
  </div>
)

export default RichText
