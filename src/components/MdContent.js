import ReactMarkdown from 'react-markdown'

const MdContent = ({ content, ...props }) => (
  <ReactMarkdown {...props} escapeHtml={false} source={content} />
)

export default MdContent
