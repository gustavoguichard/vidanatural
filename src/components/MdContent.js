import ReactMarkdown from 'react-markdown'
import { nl2Br } from 'utils/helpers'

const MdContent = ({ content, ...props }) => (
  <ReactMarkdown {...props} escapeHtml={false} source={nl2Br(content)} />
)

export default MdContent
