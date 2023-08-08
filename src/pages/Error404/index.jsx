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
                <Box
                  utilities={{
                    text: { _: 'center', md: 'left' }
                  }}
                >
                  <Heading
                    as='h1'
                    display
                    utilities={{
                      bg: { _: 'dark' },
                      color: { _: 'light' }
                    }}
                  >
                    404
                  </Heading>

                  <Heading
                    as='h4'
                    display
                    utilities={{
                      my: { _: 4 },
                      bg: { _: 'dark' },
                      color: { _: 'light' }
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
                    path='/'
                    classes={[
                      'btn btn--fill-primary'
                    ]}
                    utilities={{
                      px: { _: 8 },
                      mb: { _: 3 }
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
