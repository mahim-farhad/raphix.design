import React from 'react'

import {
  Helmet
} from 'react-helmet-async'


import Main from '../../layouts/Main'
import Expertise from '../../layouts/sections/Expertise'

function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Raphix Design</title>
      </Helmet>

      <Main>
        <Expertise />
      </Main>
    </React.Fragment>
  )
}

export default Home
