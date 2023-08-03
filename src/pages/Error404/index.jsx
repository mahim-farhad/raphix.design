import React from 'react'

import {
  Helmet
} from 'react-helmet-async'

import DynamicLink from '../../components/DynamicLink'
import {
  Heading,
  Paragraph
} from '../../components/Typography'

import Container from '../../layouts/Container'
import Main from '../../layouts/Main'
import Section from '../../layouts/Section'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Box from '../../layouts/Box'
import Button from '../../components/Button'

function Error404() {
  return (
    <React.Fragment>
      <Helmet>
        <title>404 Not Found | Raphix Design</title>
      </Helmet>

      <Main>
        <Section>
          <Container>
            <Row>
              <Column
                col={{ _: 12 }}
              >
                <Box>
                  <Heading
                    as='h1'
                    display
                  >
                    404
                  </Heading>

                  <Heading
                    as='h4'
                    display
                    utilities={{
                      mb: { _: 4 }
                    }}
                  >
                    Page Not found!
                  </Heading>

                  <Paragraph
                    utilities={{
                      w: { sm: 50 },
                      mb: { _: 7 }
                    }}
                  >
                    Either something went wrong or
                    this page does not exist anymore.
                  </Paragraph>

                  <DynamicLink
                    path='/home'
                    classes={[
                      'btn btn--fill-primary'
                    ]}
                    utilities={{
                      mb: { _: 5 }
                    }}
                  >
                    Go Back
                  </DynamicLink>
                </Box>
              </Column>
            </Row>
          </Container>
        </Section>
      </Main>
    </React.Fragment>
  )
}

export default Error404
