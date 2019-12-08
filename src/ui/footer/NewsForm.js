import { useState } from 'react'
import {
  Box,
  IconButton,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { useFormState } from 'react-use-form-state'
import theme from 'src/ui/theme'
import { sleep } from 'utils/helpers'

const NewsForm = () => {
  const [loading, setLoading] = useState(false)
  const [formState, { email }] = useFormState()
  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    await sleep(4000)
    formState.clear()
    setLoading(false)
  }
  return (
    <form name="Newsletter" onSubmit={handleSubmit} action="/news">
      <Typography
        variant="h5"
        color="inherit"
        css={{ marginBottom: theme.spacing() }}
      >
        Quer descontos exclusivos?
      </Typography>
      <Typography variant="body2" color="inherit">
        Assine nossa newsletter e receba ofertas no seu e-mail
      </Typography>
      <Box mt={2}>
        <TextField
          variant="outlined"
          {...email('email')}
          css={{
            display: 'flex',
            paddingRight: 5,
            '& fieldset': {
              borderColor: theme.palette.primary.light,
            },
            '.MuiOutlinedInput-root:hover fieldset, .MuiOutlinedInput-root.Mui-focused fieldset': {
              borderColor: theme.palette.common.white,
            },
            'label.Mui-focused': {
              color: theme.palette.common.white,
            },
            input: {
              color: theme.palette.common.white,
            },
          }}
          required
          label="Sem e-mail"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {loading ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <IconButton
                    onClick={handleSubmit}
                    aria-label="Enviar"
                    type="submit"
                    color="secondary"
                  >
                    <Send />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </form>
  )
}

export default NewsForm
