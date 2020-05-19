import { memo } from 'react'
import get from 'lodash/get'
import {
  Box,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core'
import { Link, Add } from '@material-ui/icons'
import { RichText } from 'prismic-reactjs'

import theme from 'lib/theme'

import DocumentDetails from 'components/document-details'
import VNLink from 'components/link'

const FaqItem = ({ id, last_publication_date, uid, data }) => {
  return (
    <ExpansionPanel
      elevation={0}
      css={{
        backgroundColor: 'transparent',
        '&:before': { backgroundColor: 'rgba(0, 0, 0, 0.05)' },
      }}
    >
      <ExpansionPanelSummary
        expandIcon={<Add />}
        aria-controls={`${id}-content`}
      >
        <Box>
          <Typography variant="h4" css={{ margin: theme.spacing(1, 0) }}>
            {get(data, 'question.0.text')}
          </Typography>
          <DocumentDetails date={last_publication_date} post={data.answer} />
        </Box>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        css={{
          backgroundColor: theme.palette.common.white,
          borderBottom: `1px solid rgba(0,0,0,.2)`,
          position: 'relative',
          padding: theme.spacing(5, 2),
        }}
      >
        <Typography component="div" variant="body1" css={{ textAlign: 'left' }}>
          <RichText render={data.answer} />
          <VNLink
            css={{ position: 'absolute', top: 10, right: 10 }}
            href="/faq/[slug]"
            as={`/faq/${uid}`}
          >
            <Link />
          </VNLink>
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default memo(FaqItem)
