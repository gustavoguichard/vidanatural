import { memo } from 'react'
import get from 'lodash/get'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core'
import { Link, Add } from '@material-ui/icons'
import VNLink from 'src/components/Link'
import { RichText } from 'prismic-reactjs'
import theme from 'lib/theme'

const FaqItem = ({ id, data, uid }) => {
  return (
    <ExpansionPanel elevation={0} css={{ backgroundColor: 'transparent' }}>
      <ExpansionPanelSummary
        expandIcon={<Add />}
        aria-controls={`${id}-content`}
      >
        <Typography variant="h4">{get(data, 'question.0.text')}</Typography>
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
