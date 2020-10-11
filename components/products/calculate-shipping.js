import { useState } from 'react'
import { useFormState } from 'react-use-form-state'
import {
  IconButton,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core'
import get from 'lodash/get'
import { LocalShipping } from '@material-ui/icons'

import api from 'lib/api'
import { toCurrency } from 'lib/utils'
import theme from 'lib/theme'

import FormError from 'components/form-error'

const OutOfStockForm = ({ sku, quantity }) => {
  const [showForm, setShowForm] = useState(false)
  const [sending, setSending] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [results, setResults] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const [formState, { text }] = useFormState()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setHasError(false)
    setSending(true)
    setNotFound(false)
    setResults(null)

    const zip = get(formState, 'values.zip', '').replaceAll(/\D/g, '')
    if (zip.length >= 8) {
      const result = await api.vnda.calculateShipping({ sku, quantity, zip })
      if (!result) {
        setHasError(true)
        return null
      }

      const { address_details, methods } = result
      if (address_details && methods) {
        const shippingMethods = JSON.parse(methods)
        setResults({ ...address_details, shippingMethods })
      } else {
        setNotFound(true)
      }
    }
    setSending(false)
  }

  return showForm ? (
    <form
      css={{ marginTop: theme.spacing(2) }}
      onSubmit={handleSubmit}
      action="/frete_produto"
    >
      <TextField
        id="zip"
        {...text('zip')}
        css={{ display: 'flex', paddingRight: 5 }}
        required
        autoFocus
        label="Qual o seu CEP?"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {sending ? (
                <CircularProgress color="secondary" />
              ) : (
                <IconButton
                  onClick={handleSubmit}
                  aria-label="Enviar"
                  type="submit"
                  color="secondary"
                >
                  <LocalShipping />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
      <Typography
        component="div"
        variany="body2"
        css={{ marginTop: theme.spacing(2) }}
      >
        {notFound && <p>Endereço não encontrado</p>}
        {results && (
          <div>
            <p>
              <strong>Preços para:</strong> {results.neighborhood},{' '}
              {results.city}
            </p>
            <ul>
              {results.shippingMethods.map((method) => (
                <li key={method.shipping_method_id}>
                  <strong>{method.name}: </strong>
                  {toCurrency(method.price)} (até {method.delivery_days} dias
                  para entrega)
                  <br />
                  {method.value_needed_to_discount && (
                    <strong css={{ fontSize: '.9rem' }}>
                      Frete grátis por mais{' '}
                      {toCurrency(method.value_needed_to_discount)} em compras.
                    </strong>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Typography>
      <FormError
        message={
          hasError && 'Ocorreu um erro. Por favor, tente denovo mais tarde.'
        }
      />
    </form>
  ) : (
    <a
      href="#"
      css={{ marginTop: theme.spacing(2), display: 'block' }}
      onClick={(ev) => {
        ev.preventDefault()
        setShowForm(true)
      }}
    >
      Calcular frete
    </a>
  )
}

export default OutOfStockForm
