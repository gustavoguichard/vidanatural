import { Grid, Typography } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import Img from 'src/components/Img'
import PaperContent from 'src/ui/PaperContent'
import theme from 'src/ui/theme'

export default function Index() {
  return (
    <Layout title="Termos e Condições">
      <Hero size="small" background="/static/images/capa-pb.jpg">
        <Typography variant="h2">Termos e Condições</Typography>
        <Typography variant="body1" css={{ margin: theme.spacing(3) }}>
          Comprar na Vida Natural é seguro e fácil. Aqui você encontra toda a
          linha de produtos, basta clicar nas imagens para conhecer os detalhes
          de cada produto.
        </Typography>
      </Hero>
      <PaperContent>
        <Grid container justify="center">
          <Grid item xs={12} md={7}>
            <Img
              css={{
                maxWidth: '100%',
                width: 320,
                minHeight: 300,
                margin: '10px auto',
                display: 'block',
              }}
              src="/static/svgs/delivery.svg"
              alt="Entregas"
            />
            <Typography
              variant="h4"
              css={{
                marginBottom: theme.spacing(1),
                marginTop: theme.spacing(4),
              }}
            >
              Serviço de Entregas
            </Typography>
            <Typography component="div" variant="body1">
              <p>
                A loja online da Vida Natural utiliza os serviços de entregas
                dos Correios. O valor do frete é calculado no site de forma
                automática. Este cálculo leva em conta o local de entrega (CEP),
                valor do pedido, peso e cubagem dos produtos.
              </p>
              <p>
                São oferecidas duas forma de envio dos pedidos: PAC (Encomenda
                Normal), com prazo de entrega entre 10 e 15 dias úteis, após
                data da postagem; e SEDEX (encomenda expressa), com prazo de
                entrega médio de 48 horas para capitais e 72 horas para
                Interior, após postagem mediante confirmação do pedido. Os
                Correios oferecem cobertura de entrega em todo o território
                nacional por PAC e nas principais cidades por SEDEX.
              </p>
            </Typography>
            <Img
              css={{
                maxWidth: '100%',
                width: 340,
                minHeight: 300,
                margin: '80px auto 10px',
                display: 'block',
              }}
              src="/static/svgs/security.svg"
              alt="Segurança"
            />
            <Typography
              variant="h4"
              css={{
                marginBottom: theme.spacing(1),
                marginTop: theme.spacing(4),
              }}
            >
              Segurança e Privacidade
            </Typography>
            <Typography component="div" variant="body1">
              <p>
                A Vida Natural garante a segurança e privacidade de identidade
                dos internautas que fazem compras na sua loja online. Os dados
                cadastrados no site como nome, endereço, e-mail e telefone são
                protegidos e mantidos em sigilo em nossos servidores. Os dados
                utilizados para o pagamento, especialmente Cartão de Crédito,
                são utilizados apenas no ato da compra{' '}
                <strong>não sendo registrado em nossos servidores.</strong>
              </p>
              <p>
                A loja online da Vida Natural adota os níveis legalmente
                requeridos quanto à segurança na proteção de dados, tendo
                instalado todos os meios e medidas técnicas ao seu alcance para
                evitar a perda, mau uso, alteração, acesso não autorizado ou
                subtração indevida dos dados pessoais recolhidos. Não obstante,
                o usuário deve estar ciente que as medidas de segurança
                relativas à Internet não são integralmente infalíveis.
              </p>
              <p>
                A Vida Natural se reserva ao direito de modificar a presente
                política para adaptá-la a alterações legislativas ou
                jurisprudências, ou aquelas relativas às práticas comerciais. Em
                qualquer caso, a Vida Natural anunciará no site por meio desta
                página as mudanças introduzidas com uma antecedência razoável à
                sua colocação em prática. A Vida Natural se preocupa com a
                privacidade das informações de seus clientes.
                <br />
                Assim sendo, se compromete a:
              </p>
              <ul>
                <li>
                  Corrigir prontamente quaisquer alterações relativas às
                  informações pessoais dos usuários sempre que informada;
                </li>
                <li>
                  Em hipótese alguma divulgar as informações pessoais dos
                  usuários cadastrados no site ou comercializá-los; e
                </li>
                <li>
                  Retirar prontamente, mediante solicitação, os contatos de
                  qualquer cliente de alguma lista de envio de informativos
                  promocionais.
                </li>
              </ul>
            </Typography>
            <Img
              css={{
                maxWidth: '100%',
                width: 320,
                minHeight: 300,
                margin: '80px auto 10px',
                display: 'block',
              }}
              src="/static/svgs/terms.svg"
              alt="Termos de uso"
            />
            <Typography
              variant="h4"
              css={{
                marginBottom: theme.spacing(1),
                marginTop: theme.spacing(4),
              }}
            >
              Termos de uso
            </Typography>
            <Typography component="div" variant="body1">
              <p>
                Ao se cadastrar, os clientes determinam voluntariamente que
                desejam fornecer os seus dados pessoais requeridos na
                contratação, atualização ou cancelamento de determinados
                serviços oferecidos no site ou através dele, tais como:
                promoções, compras na loja virtual, contatos com os serviços de
                atendimento e outros.
              </p>
              <p>
                As informações recolhidas pela navegação dos internautas na loja
                online da Vida Natural são utilizadas com o propósito básico de
                identificar: o público, usuário, seu perfil e hábitos de compra,
                para gestão, administração, atendimento, ampliação e melhorias
                nos produtos e serviços oferecidos; e também para a adequação
                dos serviços às preferências e gostos dos usuários; para a
                criação de novos produtos e serviços; para o envio de
                informações operacionais e comerciais relativas aos produtos e
                serviços, por meios tradicionais e/ou eletrônico.
              </p>
            </Typography>
            <Img
              css={{
                maxWidth: '100%',
                width: 320,
                minHeight: 300,
                margin: '80px auto 10px',
                display: 'block',
              }}
              src="/static/svgs/returns.svg"
              alt="Trocas e devoluções"
            />
            <Typography
              variant="h4"
              css={{
                marginBottom: theme.spacing(1),
                marginTop: theme.spacing(4),
              }}
            >
              Trocas e devoluções
            </Typography>
            <Typography component="div" variant="body1">
              <p>
                Os procedimentos abaixo foram baseados no Código de Defesa do
                Consumidor e demonstram que a relação entre nossos clientes e a
                Vida Natural deve se pautar na confiança.
              </p>
              <p>
                Os produtos comercializados na loja online da Vida Natural
                possuem 90 dias de garantia em caso de falhas naturais de
                fabricação. Estamos à disposição para orientações na utilização
                de sua garantia, através do Serviço de Atendimento ao
                Consumidor.
              </p>
              <p>
                <strong>
                  As ocorrências que envolvam troca ou devolução devem ser
                  comunicadas a nossa Central de Atendimento através do email:
                  falecom@vidanatural.eco.br{' '}
                </strong>
                .
              </p>
            </Typography>
            <Typography variant="h5">
              Recuse a mercadoria se ocorrer alguma das hipóteses abaixo:
            </Typography>
            <Typography component="div" variant="body1">
              <ul>
                <li>Embalagem aberta ou avariada;</li>
                <li>Produto avariado;</li>
                <li>Produto em desacordo com o pedido; e/ou</li>
                <li>Falta de acessórios.</li>
              </ul>
            </Typography>
            <Typography variant="h5">
              Para Devolução por Arrependimento ou Desistência, as seguintes
              condições devem ser respeitadas:
            </Typography>
            <Typography component="div" variant="body1">
              <ul>
                <li>
                  O prazo para desistência da compra do produto é de até 07
                  (sete) dias corridos, a contar da data do recebimento.
                </li>
                <li>
                  O produto deve ser devolvido na embalagem original, sem
                  indícios de uso, acompanhado da Nota Fiscal e todos os
                  acessórios.
                </li>
                <li>
                  A Vida Natural providenciará a retirada da mercadoria no local
                  em que foi entregue.
                </li>
                <li>
                  Se todas as condições forem respeitadas, a Vida Natural fará o
                  reembolso do valor total do seu pedido.
                </li>
              </ul>
            </Typography>
            <Typography variant="h5">
              Para devolução por insatisfação
            </Typography>
            <Typography component="div" variant="body1">
              <ul>
                <li>
                  Para devolução ou troca por motivos de insatisfação, a Vida
                  Natural se reserva o direito de cobrança das despesas de frete
                  bem como outras despesas associadas à sua devolução.
                </li>
              </ul>
            </Typography>
            <Typography variant="h5">
              Para Devolução de Produtos com Defeito, as seguintes condições
              devem ser respeitadas:
            </Typography>
            <Typography component="div" variant="body1">
              <ul>
                <li>
                  Nos casos que forem constatados defeitos de fabricação, o
                  cliente poderá solicitar a troca do produto dentro do prazo de
                  garantia de 90 (noventa) dias oferecidos pela Vida Natural.
                </li>
                <li>
                  Os produtos devem, preferencialmente, ser devolvidos na
                  embalagem original, junto com a nota fiscal, e acessórios
                  (caso o produto tenha algum).
                </li>
                <li>
                  Os produtos serão analisados pela Vida Natural e se for
                  constatado que não há defeito no produto, o mesmo será
                  reenviado para o cliente. Os custos de reenvio serão de
                  obrigação do cliente.
                </li>
              </ul>
            </Typography>
            <Typography variant="h5">
              A Restituição de Valores, caso o produto atenda às exigências
              acima, a restituição do valor pago será conforme as opções de
              pagamento abaixo:
            </Typography>
            <Typography component="div" variant="body1">
              <ul>
                <li>
                  Cartões de crédito: será solicitado o cancelamento do débito à
                  administradora do seu cartão e o estorno ocorrerá em até 02
                  (duas) faturas subseqüentes.
                </li>
              </ul>
            </Typography>
            <Typography variant="h5">Considerações finais:</Typography>
            <Typography component="div" variant="body1">
              <p>
                A Vida Natural não tem obrigação de consertar, trocar ou
                restituir produtos que apresentem sinais claros de mau uso.
                Confira sempre o produto ao recebê-lo. Qualquer problema, entre
                em contato imediatamente com nosso Serviço de Atendimento ao
                Consumidor. O produto será obrigatoriamente retirado no mesmo
                endereço onde a entrega foi realizada.
              </p>
            </Typography>
            <Img
              css={{
                maxWidth: '100%',
                width: 200,
                minHeight: 300,
                margin: '80px auto 10px',
                display: 'block',
              }}
              src="/static/svgs/terms-end.svg"
              alt="Fim dos termos"
            />
          </Grid>
        </Grid>
      </PaperContent>
    </Layout>
  )
}
