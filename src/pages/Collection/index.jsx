import React from 'react'

import {
  useParams
} from 'react-router-dom'

import {
  Helmet
} from 'react-helmet-async'

import Main from '../../layouts/Main'

function Collection() {
  useParams

  return (
    <React.Fragment>
      <Helmet>
        <title>Collection | Raphix Design</title>
      </Helmet>

      <Main>
      </Main>
    </React.Fragment>
  )
}

export default Collection
