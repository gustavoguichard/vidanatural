import {
  Link,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import { EWG_URL } from 'data/ingredients'

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
          <strong>Inci:</strong>{' '}
          {item.url ? (
            <Link
              href={EWG_URL + item.url}
              target="_blank"
              color="secondary"
              title="Obter mais informações"
            >
              {item.inci}
            </Link>
          ) : (
            item.inci
          )}
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
