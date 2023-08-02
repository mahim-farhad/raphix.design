import React from 'react'

import {
  Helmet
} from 'react-helmet-async'

import Divider from '../../components/Divider'

import Main from '../../layouts/Main'
import Box from '../../layouts/Box'

// import PageHeader from './PageHeader'
import CollectionPreview from './CollectionPreview'
import Reviews from './Reviews'

import bgHeader from '../../assets/images/bg-header.png'

function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Raphix Design</title>
      </Helmet>

      <Box>
        <img
          src={bgHeader}
          alt=""
          className='w-100'
        />
      </Box>

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
