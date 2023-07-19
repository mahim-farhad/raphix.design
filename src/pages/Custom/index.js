import React from 'react'

import {
  useParams
} from 'react-router-dom'

import {
  Helmet
} from 'react-helmet-async'

import {
  Swiper,
  SwiperSlide
} from 'swiper/react'

import {
  Scrollbar,
  Navigation
} from 'swiper/modules'

import 'swiper/css'

import useFetch from '../../hooks/useFetch'

import {
  Heading,
  Span
} from '../../components/Typography'
import Image from '../../components/Image'
import Button from '../../components/Button'

import Main from '../../layouts/Main'
import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'

function CustomDesign() {
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
              utilities={{
                py: { _: 8 }
              }}
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
                    <div
                      className='product__gallery pr-lg-8'
                    >
                      <a
                        className='product__gallery-item mb-6'
                      >
                        <Span classes='product__gallery-image'>
                          <Image
                            src={`http://localhost:1337${design.attributes.thumbnail.data.attributes.url}`}
                            alt=''
                          />
                        </Span>

                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          fill='none'
                          className='icon'
                        >
                          <path d='M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8'></path>
                        </svg>
                      </a>

                      <div
                        className='carousel'
                      >
                        <Swiper
                          slidesPerView={2}
                          spaceBetween={24}
                          pagination={false}
                          speed={1000}
                          scrollbar={{
                            hide: true,
                          }}
                          modules={[
                            Navigation,
                            Scrollbar
                          ]}
                        >
                          {
                            design.attributes.gallery.data && design.attributes.gallery.data.map((gallery) => {
                              return (
                                <SwiperSlide
                                  key={gallery.id}
                                >
                                  {
                                    <a
                                      className='product__gallery-item'
                                      href='assets/images/dark/product-2-1920x1080-6.jpg'
                                    >
                                      <span className='product__gallery-image'>
                                        <Image
                                          src={`http://localhost:1337${gallery.attributes.url}`}
                                          alt=''
                                        />
                                      </span>

                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        fill='none'
                                        className='icon'
                                      >
                                        <path d='M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8'></path>
                                      </svg>
                                    </a>
                                  }
                                </SwiperSlide>
                              )
                            })
                          }
                        </Swiper>
                      </div>
                    </div>
                  </Column>

                  <Column
                    col={{ _: 12, lg: 4 }}
                  >
                    <Heading
                      as='h6'
                      utilities={{
                        mb: { _: 2 }
                      }}
                    >
                      {design.attributes.category.data.attributes.type.toUpperCase()}
                    </Heading>

                    <Heading
                      as='h3'
                      utilities={{
                        mb: { _: 6 }
                      }}
                    >
                      {design.attributes.title.toUpperCase()}
                    </Heading>

                    <Heading
                      as='h4'
                    >
                      <span className='woocommerce-Price-currencySymbol'>$</span>60.00
                    </Heading>
                  </Column>
                </Row>
              </Container>
            </Section>
          </Main>

          <div
            className='carousel'
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              speed={1000}
              modules={[
                Navigation
              ]}
            >
              {
                design.attributes.gallery.data && design.attributes.gallery.data.map((gallery) => {
                  return (
                    <SwiperSlide
                      key={gallery.id}
                    >
                      {
                        <Image
                          src={`${gallery.attributes.url}`}
                          alt=''
                        />
                      }
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </React.Fragment>
      )
    })
  )
}

export default CustomDesign
