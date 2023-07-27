import React from 'react'

import {
  Helmet
} from 'react-helmet-async'

import Image from '../../components/Image'

import Main from '../../layouts/Main'
import Expertise from '../../layouts/sections/Expertise'

import BGHeader from '../../assets/images/bg-header.png'

function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Raphix Design</title>
      </Helmet>

      <Image
        src={BGHeader}
        classes={['w-100']}
      />

      <Main>
        <Expertise />
      </Main>
    </React.Fragment>
  )
}

export default Home
