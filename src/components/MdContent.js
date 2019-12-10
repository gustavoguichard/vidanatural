import ReactMarkdown from 'react-markdown'
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
    source={content}
  />
)

export default MdContent
