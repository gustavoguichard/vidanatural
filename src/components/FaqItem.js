import { memo } from 'react'
import get from 'lodash/get'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { RichText } from 'prismic-reactjs'
import theme from 'src/ui/theme'

const FaqItem = ({ id, data }) => {
  return (
    <ExpansionPanel
      elevation={0}
      css={{
        backgroundColor: 'transparent',
        a: {
          color: theme.palette.secondary.main,
        },
      }}
    >
      <ExpansionPanelSummary
        expandIcon={<Add />}
        aria-controls={`${id}-content`}
      >
        <Typography variant="h4">{get(data, 'question.0.text')}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        css={{ backgroundColor: theme.palette.common.white }}
      >
        <Typography component="div" variant="body1" css={{ textAlign: 'left' }}>
          <RichText render={data.answer} />
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default memo(FaqItem)
