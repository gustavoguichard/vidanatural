import { Button, CircularProgress, SnackbarContent } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import NetlifyForm from 'react-netlify-form'
import { withRouter } from 'next/router'
import Input from 'src/contato/Input'
import theme from 'src/ui/theme'

const Form = ({ router }) => (
  <NetlifyForm
    name="Formulário de Contato"
    onSuccess={() => router.push({ pathname: '/gratos' })}
    action="/gratos"
    honeypotName="mel"
  >
    {({ loading, error }) => (
      <>
        <TextField name="mel" type="hidden" />
        <Input id="name" required label="Seu nome" />
        <Input required type="email" id="email" label="Seu e-mail" />
        <Input id="phone" label="Seu telefone / whatsapp" />
        <Input id="message" multiline required rows="4" label="Mensagem" />
        {error && (
          <SnackbarContent
            css={{
              backgroundColor: theme.palette.error.main,
              color: theme.palette.text.secondary,
            }}
            message="Ocorreu algum erro, por favor, tente denovo mais tarde"
          />
        )}
        <Button type="submit" variant="contained" color="secondary">
          {loading ? <CircularProgress /> : 'Enviar mensagem'}
        </Button>
      </>
    )}
  </NetlifyForm>
)

export default withRouter(Form)
