import React from 'react'

import {
  Helmet
} from 'react-helmet-async'

import Divider from '../../components/Divider'

import Main from '../../layouts/Main'
import CollectionPreview from './CollectionPreview'

function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Raphix Design</title>
      </Helmet>

      <Divider />

      <Main>
        <CollectionPreview />
      </Main>

      <Divider />
    </React.Fragment>
  )
}

export default Home
