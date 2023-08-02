import React, {
  useState
} from 'react'

import {
  useParams
} from 'react-router-dom'

import {
  Helmet
} from 'react-helmet-async'

import useFetch from '../../hooks/useFetch'

import Divider from '../../components/Divider'

import Main from '../../layouts/Main'
import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'

import ProductGallery from './ProductGallery'
import ProductInfo from './ProductInfo'
import GallerySlider from './GallerySlide'

function Design() {
  const [gallerySlider, setGallerySlider] = useState(false)

  const [initialSlideNumber, setInitialSlideNumber] = useState(0)

  const {
    slug
  } = useParams()

  const {
    data,
    loading
  } = useFetch(`designs?populate=*&[filters][slug]=${slug}`)

  return (
    data && data.map((design) => {
      return (
        <React.Fragment
          key={design.id}
        >
          <Helmet>
            <title>{design.attributes.title} | Raphix Design</title>
          </Helmet>

          <Main>
            <Section
              classes={[
                'collection'
              ]}
            >
              <Container
                fluid
              >
                <Row
                  utilities={{
                    'row-gap': { _: 8 }
                  }}
                >
                  <Column
                    col={{ _: 12, lg: 8 }}
                  >
                    <ProductGallery
                      gallery={design.attributes.gallery.data}
                      gallerySlider={gallerySlider}
                      setGallerySlider={setGallerySlider}
                      setInitialSlideNumber={setInitialSlideNumber}
                    />
                  </Column>

                  <Column
                    col={{ _: 12, lg: 4 }}
                  >
                    <ProductInfo
                      title={design.attributes.title}
                      category={design.attributes.category.data.attributes.type}
                    />
                  </Column>
                </Row>
              </Container>
            </Section>
          </Main>

          <Divider />

          {
            gallerySlider &&
            <GallerySlider
              gallerySlider={gallerySlider}
              gallery={design.attributes.gallery.data}
              initialSlideNumber={initialSlideNumber}
            />
          }
        </React.Fragment>
      )
    })
  )
}

export default Design
