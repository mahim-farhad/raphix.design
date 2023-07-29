import React from 'react'

import {
  Helmet
} from 'react-helmet-async'

import Divider from '../../components/Divider'

import Main from '../../layouts/Main'

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
        <CollectionPreview />

        <Divider />

        <Reviews />
      </Main>

      <Divider />
    </React.Fragment>
  )
}

export default Home
