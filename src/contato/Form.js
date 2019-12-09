import { Button, CircularProgress, SnackbarContent } from '@material-ui/core'
import { useFormState } from 'react-use-form-state'
import { TextField } from '@material-ui/core'
import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import Input from 'src/contato/Input'
import theme from 'src/ui/theme'

const Form = ({ router }) => {
  const [formState, { raw, text, email, textarea }] = useFormState({
    key: 'vidanatural-problemas-tecnicos',
    reply_to: '',
  })
  const handleSubmit = async event => {
    event.preventDefault()

    await fetch('/webform', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        ...formState.values,
        reply_to: formState.values.email,
      }),
    })
    // router.push({ pathname: '/gratos' })
  }
  return (
    <form
      name="Formulário de Contato"
      onSubmit={handleSubmit}
      action="/webform"
      data-webform="vidanatural-problemas-tecnicos"
    >
      <TextField {...raw('key')} type="hidden" />
      <TextField {...raw('reply_to')} type="hidden" />
      <input
        {...text('a_password')}
        css={{ display: 'none !important' }}
        tabIndex={-1}
        autoComplete="false"
      />
      <Input {...text('name')} required label="Seu nome" />
      <Input {...email('email')} required label="Seu e-mail" />
      <Input {...text('phone')} label="Seu telefone / whatsapp" />
      <Input
        {...textarea('message')}
        multiline
        required
        rows="4"
        label="Mensagem"
      />
      {false && (
        <SnackbarContent
          css={{
            backgroundColor: theme.palette.error.main,
            color: theme.palette.text.secondary,
          }}
          message="Ocorreu algum erro, por favor, tente denovo mais tarde"
        />
      )}
      <Button type="submit" variant="contained" color="secondary">
        {false ? <CircularProgress /> : 'Enviar mensagem'}
      </Button>
    </form>
  )
}

export default withRouter(Form)
