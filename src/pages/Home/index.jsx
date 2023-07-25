import React from 'react'

import {
  Helmet
} from 'react-helmet-async'

import Textfield from '../../components/Textfield'

import Main from '../../layouts/Main'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'

import Expertise from '../../layouts/sections/Expertise'

function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Raphix Design</title>
      </Helmet>

      <Main>
        <Expertise />

        <Container>
          <Row
            utilities={{
              gap: { _: '4' }
            }}
          >
            <Column
              col={{ _: 12 }}
            >
              <Textfield
                size='sm'
                type='email'
                prependIcon='at'
                placeholder='Email'
                helper='dfgdfgfdg'
              />
            </Column>

            <Column
              col={{ _: 12 }}
            >
              <Textfield
                size='lg'
                type='password'
                prependIcon='lock'
                placeholder='Password'
              />
            </Column>

            <Column
              col={{ _: 12 }}
            >
              <Textfield
                type='file'
                prependIcon='file-upload'
                placeholder='Password'
              />
            </Column>

            <Column
              col={{ _: 12 }}
            >
              <button className='btn btn--fill-dark w-100'>
                Submit
              </button>
            </Column>
          </Row>
        </Container>
      </Main>
    </React.Fragment>
  )
}

export default Home
