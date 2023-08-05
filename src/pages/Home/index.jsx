import React from 'react'

import {
  Helmet
} from 'react-helmet-async'

import Divider from '../../components/Divider'

import Main from '../../layouts/Main'

// import PageHeader from './PageHeader'
import CollectionPreview from './CollectionPreview'
import Reviews from './Reviews'

function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Esports graphics designer | Raphix Design</title>
      </Helmet>

      <Main>
        <CollectionPreview />

        <Divider />

        <Reviews />
      </Main>
    </React.Fragment>
  )
}

export default Home
