import React from 'react'

import {
  Helmet
} from 'react-helmet-async'

import Divider from '../../components/Divider'

import Main from '../../layouts/Main'

import PageHeader from './PageHeader'
import CollectionPreview from './CollectionPreview'
import Reviews from './Reviews'

function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Raphix Design</title>
      </Helmet>

      <Divider />

      <Main>
        <PageHeader />

        <Divider />

        <CollectionPreview />

        <Divider />

        <Reviews />
      </Main>

      <Divider />
    </React.Fragment>
  )
}

export default Home
