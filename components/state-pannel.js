import map from 'lodash/map'
import {
  Box,
  Divider,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

import Distributor from 'components/distributor'

const StatePannel = ({ region, title }) => (
  <ExpansionPanel square>
    <ExpansionPanelSummary
      expandIcon={<ExpandMore />}
      aria-controls={`state-${title}`}
    >
      {title}
    </ExpansionPanelSummary>
    <ExpansionPanelDetails css={{ flexDirection: 'column' }}>
      {map(region, (places, name) => (
        <Box key={`place-${name}`}>
          <Typography variant="h4">{name}</Typography>
          <Divider />
          {map(places, (place) => (
            <Distributor place={place} key={place.name} />
          ))}
        </Box>
      ))}
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

export default StatePannel
