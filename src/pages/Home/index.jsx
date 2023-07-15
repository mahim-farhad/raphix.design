import React from 'react'

import PropTypes from 'prop-types'

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

Home.propTypes = {
  setSidebarSlide: PropTypes.func
}

export default Home
