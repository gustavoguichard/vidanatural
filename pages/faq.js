import { Box, Typography } from '@material-ui/core'
import SinglePageLayout from 'src/ui/SinglePageLayout'
import Img from 'src/components/Img'
import FaqItem from 'src/components/FaqItem'
import theme from 'src/ui/theme'
import * as cms from 'utils/cms'

const FaqPage = ({ items }) => {
  return (
    <SinglePageLayout
      title="Perguntas Frequentes"
      containerProps={{ css: { textAlign: 'center' } }}
    >
      <Typography variant="h2">Perguntas Frequentes</Typography>
      <Box py={4} textAlign="left">
        {items.map((item) => (
          <FaqItem key={`item-${item.id}`} {...item} />
        ))}
      </Box>
      <Img
        css={{
          maxWidth: '100%',
          width: 250,
          margin: theme.spacing(4, 0),
        }}
        src="/static/svgs/faq.svg"
        alt="Perguntas frequentes"
      />
    </SinglePageLayout>
  )
}

export async function getStaticProps() {
  const items = await cms.allByTypeAndTags('faq_item', ['institucional'], {
    orderings: '[my.faq_item.question]',
  })
  return { props: { items } }
}

export default FaqPage
