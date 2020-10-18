import ReactMarkdown from 'react-markdown'

import { classes } from 'lib/utils'

const Markdown = ({ children, escapeHtml = false, className }) => {
  const cx = classes('rich-text', className)
  return (
    <div className={cx}>
      <ReactMarkdown
        escapeHtml={escapeHtml}
        className="rich-text"
        source={children}
      />
    </div>
  )
}

export default Markdown
