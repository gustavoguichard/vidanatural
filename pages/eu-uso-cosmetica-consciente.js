import React from 'react'
import { Paper, Container, Typography, Box } from '@material-ui/core'
import Layout from 'src/ui/Layout'
import Hero from 'src/ui/Hero'
import PaperContent from 'src/ui/PaperContent'

export default function Index() {
  return (
    <Layout>
      <Hero background="/static/images/gota.png">
        <Typography variant="h3">Eu uso cosmética consciente</Typography>
      </Hero>
      <PaperContent />
    </Layout>
  )
}