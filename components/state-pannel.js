import map from 'lodash/map'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Divider,
  Typography,
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

import Distributor from 'components/distributor'

const StatePannel = ({ region, title }) => (
  <Accordion square>
    <AccordionSummary
      expandIcon={<ExpandMore />}
      aria-controls={`state-${title}`}
    >
      {title}
    </AccordionSummary>
    <AccordionDetails css={{ flexDirection: 'column' }}>
      {map(region, (places, name) => (
        <Box key={`place-${name}`}>
          <Typography variant="h4">{name}</Typography>
          <Divider />
          {map(places, (place) => (
            <Distributor place={place} key={place.name} />
          ))}
        </Box>
      ))}
    </AccordionDetails>
  </Accordion>
)

export default StatePannel
