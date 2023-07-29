import {
  Swiper,
  SwiperSlide
} from 'swiper/react'

import {
  FreeMode,
  Navigation,
  Pagination
} from 'swiper/modules'

import 'swiper/css'

import useFetch from '../../hooks/useFetch'

import {
  Heading,
  Span
} from '../../components/Typography'
import Icon from '../../components/Icon'

import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Box from '../../layouts/Box'

const SeactionHeading = () => {
  return (
    <Box
      classes={[
        'section__heading'
      ]}
    >
      <Heading
        as='h1'
        classes={[
          'section__title'
        ]}
      >
        PROOF OF WORK
      </Heading>

      <Heading
        as='h1'
        classes={[
          'section__title-bg'
        ]}
      >
        REVIEWS
      </Heading>
    </Box>
  )
}

const ClientReviews = ({
  data
}) => {
  return (
    <Box>
      <h2 className='trustpilot_title mb-9'>
        Authentic & Verified
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        freeMode={true}
        navigation={true}
        pagination={true}
        speed={1000}
        modules={[
          FreeMode,
          Navigation,
          Pagination
        ]}
        className='swiper--reviews'
      >
        {
          data && data.map((design) => {
            return (
              <SwiperSlide
                key={design.id}
              >
                <div>
                  <h4 className='trustpilot_title mb-4'>
                    Great service
                  </h4>

                  <p className='trustpilot_text mb-6 text-truncate'>
                    I won a Dynasty Gaming Jersey from raven. Didn&apos;t know what to expect but the
                    quality is amazing will definitely buy something from them next time. They also help you very fast and
                    good when you have questions.
                  </p>

                  <div className='trustpilot_wrapper d-flex align-items-center gap-4'>
                    <div className='trustpilot_avatar'>
                      <img src='https://raven.gg/content/themes/zoa-child/image/avatar-placeholder.svg' width='56' height='56' alt='avatar' />
                    </div>

                    <div className='trustpilot_inner-wrapper mb-1'>
                      <p className='trustpilot_name'>Justin Gimpel</p>

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
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </Box>
  )
}

function Reviews() {
  const {
    data,
    loading
  } = useFetch('designs?populate=*')

  return (
    <Section
      classes={[
        'collection-preview'
      ]}
    >
      <Container>
        <Row
          utilities={{
            mb: { _: 6 }
          }}
        >
          <Column
            col={{ _: 12 }}
          >
            <SeactionHeading />
          </Column>
        </Row>

        <Row
          utilities={{
            'row-gap': { _: 9 },
          }}
        >
          <Column
            col={{ _: 12, md: 5, xl: 4 }}
            utilities={{
              mr: { xl: 'auto' },
              order: { _: 1, md: 0 }
            }}
          >
            <ClientReviews
              data={data}
            />
          </Column>

          <Column
            col={{ _: 12, md: 7, xl: 7 }}>
            <Box
              utilities={{
                d: { _: 'flex' },
                gap: { _: 6 },
                'flex-direction': { _: 'column' },
                'align-items': { md: 'end' },
                'justify-content': { _: 'start' },
                h: { _: 100 },
                py: { _: 0 },
                px: { _: 0 }
              }}
            >
              <Heading
                as='h2'
                utilities={{
                  mb: { _: 9 }
                }}
              >
                Customer Reviews
              </Heading>

              <Box
                utilities={{
                  d: { _: 'flex' },
                  'align-items': { _: 'center' },
                  gap: { _: 4 },
                  bg: { _: 'dark' },
                  rounded: { _: 'xxl' },
                  p: { _: 4 }
                }}
              >
                <Span
                  utilities={{
                    d: { _: 'flex' },
                    gap: { _: 2 }
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
                  />
                </Span>

                <Span
                  utilities={{
                    pt: { _: 1 }
                  }}
                >
                  4.7 out of 5
                </Span>
              </Box>

              <Heading
                as='h4'
              >
                50+ Customer Ratings
              </Heading>

              <Box
                utilities={{
                  w: { _: 100, md: 75, lg: 50 },
                  mt: { _: 'auto' }
                }}
              >
                <Box
                  utilities={{
                    d: { _: 'flex' },
                    gap: { _: 4 },
                    'align-items': { _: 'center' },
                    'justify-content': { _: 'end' }
                  }}
                >
                  <Span>
                    5 Star
                  </Span>

                  <div className='progress w-md-50 flex-fill'>
                    <div
                      className='progress-bar'
                      style={{
                        width: '85%'
                      }}
                    >
                    </div>
                  </div>

                  <Span>
                    85%
                  </Span>
                </Box>

                <Box
                  utilities={{
                    d: { _: 'flex' },
                    gap: { _: 4 },
                    'align-items': { _: 'center' },
                    'justify-content': { _: 'end' },
                    my: { _: 4 }
                  }}
                >
                  <Span>
                    4 Star
                  </Span>

                  <div className='progress w-md-50 flex-fill'>
                    <div
                      className='progress-bar'
                      style={{
                        width: '5%'
                      }}
                    >
                    </div>
                  </div>

                  <Span>
                    05%
                  </Span>
                </Box>

                <Box
                  utilities={{
                    d: { _: 'flex' },
                    gap: { _: 4 },
                    'align-items': { _: 'center' },
                    'justify-content': { _: 'end' }
                  }}
                >
                  <Span>
                    3 Star
                  </Span>

                  <div className='progress w-md-50 flex-fill'>
                    <div
                      className='progress-bar'
                      style={{
                        width: '2%'
                      }}
                    >
                    </div>
                  </div>

                  <Span>
                    02%
                  </Span>
                </Box>

                <Box
                  utilities={{
                    d: { _: 'flex' },
                    gap: { _: 4 },
                    'align-items': { _: 'center' },
                    'justify-content': { _: 'end' },
                    my: { _: 4 }
                  }}
                >
                  <Span>
                    2 Star
                  </Span>

                  <div className='progress w-md-50 flex-fill'>
                    <div
                      className='progress-bar'
                      style={{
                        width: '01%'
                      }}
                    >
                    </div>
                  </div>

                  <Span>
                    01%
                  </Span>
                </Box>

                <Box
                  utilities={{
                    d: { _: 'flex' },
                    gap: { _: 4 },
                    'align-items': { _: 'center' },
                    'justify-content': { _: 'end' }
                  }}
                >
                  <Span>
                    1 Star
                  </Span>

                  <div className='progress w-md-50 flex-fill'>
                    <div
                      className='progress-bar'
                      style={{
                        width: '0%'
                      }}
                    >
                    </div>
                  </div>

                  <Span>
                    00%
                  </Span>
                </Box>
              </Box>
            </Box>
          </Column>
        </Row>
      </Container>
    </Section>
  )
}

export default Reviews
