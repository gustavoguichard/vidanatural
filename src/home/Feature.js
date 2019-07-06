import { Box, Typography } from '@material-ui/core'
import theme from 'src/ui/theme'

export const featureWrapper = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'stretch',
  margin: 'auto',
}

const Feature = ({ Icon, iconSize = 32, title, children }) => (
  <Box
    maxWidth={350}
    alignItems="flex-start"
    className="feature-item"
    display="flex"
    alignSelf="stretch"
    textAlign="left"
  >
    <Icon
      css={{
        color: theme.palette.secondary.main,
        width: iconSize,
        height: iconSize,
        marginRight: theme.spacing(1.5),
      }}
    />
    <Box flex={1}>
      <Typography variant="h6">{title}</Typography>
      <Typography
        variant="body1"
        css={{
          color: theme.palette.text.hint,
          marginTop: theme.spacing(2),
          marginBottom: 0,
          '.feature-item:not(:last-child) &': {
            marginBottom: theme.spacing(6),
          },
        }}
      >
        {children}
      </Typography>
    </Box>
  </Box>
)

export default Feature
