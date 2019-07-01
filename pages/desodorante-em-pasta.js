import React from 'react'
import { Paper, Container, Typography, Box } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/components/Hero'
import PaperContent from 'src/ui/PaperContent'

export default function Index() {
  return (
    <Layout>
      <Hero background="/static/images/peto.jpg">
        <Typography variant="h3">Desodorante em Pasta</Typography>
      </Hero>
      <PaperContent />
    </Layout>
  )
}
