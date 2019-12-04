import ReactMarkdown from 'react-markdown'
import { nl2Br } from 'utils/helpers'
import theme from 'src/ui/theme'

const MdContent = ({ content, ...props }) => (
  <ReactMarkdown
    css={{
      a: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
      },
      'a:hover, a:active': {
        textDecoration: 'underline',
      },
    }}
    {...props}
    escapeHtml={false}
    source={nl2Br(content)}
  />
)

export default MdContent
