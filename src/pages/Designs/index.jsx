import React from 'react'

import {
  Helmet
} from 'react-helmet-async'

import useFetch from '../../hooks/useFetch'

import Button from '../../components/Button'
import DesignCard from '../../components/card/design/DesignCard'

import Main from '../../layouts/Main'
import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'

import Filters from './Filters'

function Designs() {
  const {
    data,
    loading
  } = useFetch('designs?populate=*')

  return (
    <React.Fragment>
      <Helmet>
        <title>Designs | Raphix Design</title>
      </Helmet>

      <Main>
        <Section>
          <Container
            fluid
          >
            <Row
              utilities={{
                'row-gap': { _: 8 }
              }}
            >
              <Column
                col={{ _: 12 }}
              >
                <Filters />
              </Column>

              {
                data && data.map((design) => (
                  <Column
                    key={design.id}
                    col={{ _: 6, md: 6, lg: 4, xl: 3 }}
                  >
                    <DesignCard
                      title={design.attributes.title}
                      slug={design.attributes.slug}
                      excerpt={'USD 50.00 $'}
                      thumbnail={design.attributes.thumbnail.data.attributes.url}
                      uploadedAt={'01/05/2022'}
                    />
                  </Column>
                ))
              }

              <Column
                col={{ _: 12 }}
                utilities={{
                  text: { _: 'center' }
                }}
              >
                <Button
                  size='lg'
                >
                  Load More
                </Button>
              </Column>
            </Row>
          </Container>
        </Section>
      </Main>
    </React.Fragment>
  )
}

export default Designs
