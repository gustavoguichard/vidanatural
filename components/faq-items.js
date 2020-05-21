import { memo } from 'react'
import { useRouter } from 'next/router'
import get from 'lodash/get'
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core'

import { getExcerpt } from 'lib/domain'
import theme from 'lib/theme'

import DocumentDetails from 'components/document-details'

const FaqItem = ({ last_publication_date, uid, data }) => {
  const router = useRouter()
  const onClick = () => router.push('/faq/[slug]', `/faq/${uid}`)
  return (
    <ListItem
      button
      onClick={onClick}
      css={{
        borderTop: `1px solid rgba(0,0,0,.03)`,
        padding: theme.spacing(2),
        '&:first-of-type': {
          borderTopColor: 'transparent',
        },
      }}
    >
      <ListItemText
        disableTypography
        primary={<Typography>{data.title}</Typography>}
        secondary={
          <>
            <DocumentDetails
              css={{ color: theme.palette.text.hint }}
              prepend="Atualizado"
              date={last_publication_date}
              post={data.answer}
            />
            <div
              css={{
                marginTop: theme.spacing(),
                color: theme.palette.text.hint,
                fontSize: '.85rem',
              }}
            >
              {getExcerpt(data.answer, 100)}
            </div>
          </>
        }
      />
    </ListItem>
  )
}

const FaqItems = ({ items }) => (
  <Paper>
    <List>
      {items.map((item) => (
        <FaqItem key={`item-${item.id}`} {...item} />
      ))}
    </List>
  </Paper>
)

export default memo(FaqItems)
