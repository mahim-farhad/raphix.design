import {
  Swiper,
  SwiperSlide
} from 'swiper/react'

import {
  Navigation,
  Pagination
} from 'swiper/modules'

import 'swiper/css'

import {
  Heading,
  Paragraph,
  Span
} from '../../components/Typography'
import Icon from '../../components/Icon'
import Image from '../../components/Image'

import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Box from '../../layouts/Box'

const Info = () => {
  return (
    <Box>
      <Heading
        as='h1'
        display
        utilities={{
          mb: { _: 4 }
        }}
      >
        From my <br />
        community
      </Heading>

      <Paragraph
        utilities={{
          mb: { _: 4 },
          fs: { _: 'xl' }
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Eligendi nam consequatur reiciendis.
      </Paragraph>

      <Box
        utilities={{
          d: { _: 'flex' },
          gap: { _: 4 },
          'align-items': { _: 'center' },
          py: { _: 2 }
        }}
      >
        <Span
          utilities={{
            d: { _: 'flex' },
            gap: { _: 2 },
            'align-items': { _: 'center' }
          }}
        >
          <Icon
            name='star'
            classes={[
              'icon--lg'
            ]}
            utilities={{
              color: { _: 'primary' }
            }}
          />

          <Icon
            name='star'
            classes={[
              'icon--lg'
            ]}
            utilities={{
              color: { _: 'primary' }
            }}
          />

          <Icon
            name='star'
            classes={[
              'icon--lg'
            ]}
            utilities={{
              color: { _: 'primary' }
            }}
          />

          <Icon
            name='star'
            classes={[
              'icon--lg'
            ]}
            utilities={{
              color: { _: 'primary' }
            }}
          />

          <Icon
            name='star'
            classes={[
              'icon--lg'
            ]}
            utilities={{
              color: { _: 'primary' }
            }}
          />
        </Span>

        <Span
          utilities={{
            pt: { _: 1 },
            fw: { _: 'bold' }
          }}
        >
          5.0 out of 5
        </Span>
      </Box>

      <Heading
        as='h5'
        utilities={{
          mb: { _: 2 }
        }}
      >
        250+ Client Ratings
      </Heading>
    </Box>
  )
}

const Reviews = () => {
  return (
    <Box>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[
          Navigation,
          Pagination
        ]}
        className='swiper--reviews'
      >
        <SwiperSlide>
          <Box
            classes={[
              'card',
              'card--reviews'
            ]}
          >
            <Icon
              name='quote-right'
              classes={[
                'icon--4xl'
              ]}
              utilities={{
                mb: { _: 6 },
                color: { _: 'primary' }
              }}
            />

            <Paragraph
              classes={[
                'card__description'
              ]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rem error ratione accusantium sint minus ad nam.
              Harum corporis quaerat repellat quas aspernatur
              exercitationem unde nisi, ut, error nemo odit quasi.
            </Paragraph>

            <Box
              utilities={{
                d: { _: 'flex' },
                gap: { _: 4 },
                'align-items': { _: 'center' },
                mt: { _: 4 }
              }}
            >
              <Box
                classes={[
                  'avatar'
                ]}
              >
                <Image
                  src='https://raven.gg/content/themes/zoa-child/image/avatar-placeholder.svg'
                  alt='avatar'
                  classes={[
                    'avatar__img'
                  ]}
                />
              </Box>

              <Box>
                <Heading
                  as='h6'
                  utilities={{
                    mb: { _: 0 }
                  }}
                >
                  Justin Gimpel
                </Heading>

                <Span
                  utilities={{
                    d: { _: 'flex' },
                    'align-items': { _: 'center' },
                    pb: { _: 2 }
                  }}
                >
                  <Icon
                    name='star'
                    utilities={{
                      color: { _: 'primary' }
                    }}
                  />

                  <Icon
                    name='star'
                    utilities={{
                      color: { _: 'primary' }
                    }}
                  />

                  <Icon
                    name='star'
                    utilities={{
                      color: { _: 'primary' }
                    }}
                  />

                  <Icon
                    name='star'
                    utilities={{
                      color: { _: 'primary' }
                    }}
                  />

                  <Icon
                    name='star'
                    utilities={{
                      color: { _: 'primary' }
                    }}
                  />
                </Span>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

function ReviewsSection() {
  return (
    <Section>
      <Container>
        <Row
          utilities={{
            'row-gap': { _: 8 },
            'align-items': { md: 'center' }
          }}
        >
          <Column
            col={{ _: 12, md: 6, xl: 5 }}
            utilities={{
              mr: { md: 'auto' }
            }}
          >
            <Info />
          </Column>

          <Column
            col={{ _: 12, md: 6, xl: 5 }}
            utilities={{
              ml: { md: 'auto' }
            }}
          >
            <Reviews />
          </Column>
        </Row>
      </Container>
    </Section>
  )
}

export default ReviewsSection
