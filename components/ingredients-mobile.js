import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

import InciLink from 'components/inci-link'

const IngredientsMobile = ({ data }) =>
  data.map((item, i) => (
    <ExpansionPanel square key={`item-${i}`}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMore />}
        aria-controls={`ingredient${i}-content`}
      >
        <Typography variant="body2">
          <strong>{item.name || item.inci}</strong>
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="body1" css={{ textAlign: 'left' }}>
          <strong>Inci:</strong> <InciLink {...item} />
          <br />
          <br />
          <strong>O que significa?</strong>
          <br />
          {item.description || '--'}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ))

export default IngredientsMobile
