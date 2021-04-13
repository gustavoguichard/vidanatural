import { NextApiRequest, NextApiResponse } from 'next'

const TINY_API_BASE = 'https://api.tiny.com.br/api2'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const aMonthAgo = new Date()
  aMonthAgo.setDate(aMonthAgo.getDate() - 30)
  const params = new URLSearchParams({
    token: process.env.TINY_API_TOKEN as string,
    formato: 'json',
    tipoNota: 'S',
    situacao: '7',
    dataInicial: aMonthAgo.toLocaleDateString('pt-br'),
  })
  const qs = params.toString()
  try {
    const response = await fetch(
      `${TINY_API_BASE}/notas.fiscais.pesquisa.php?${qs}`,
    )
    const results = await response.json()
    res.send(results?.retorno?.notas_fiscais)
  } catch (error) {
    console.log(error)

    res.writeHead(500).end('Ocorreu um erro... fala com o Guga =)')
  }
}
