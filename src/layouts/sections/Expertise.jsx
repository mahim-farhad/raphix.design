import {
  Swiper,
  SwiperSlide
} from 'swiper/react'

import {
  Autoplay,
  Navigation,
  Pagination
} from 'swiper/modules'

import 'swiper/css'

import useFetch from '../../hooks/useFetch'

import {
  Heading,
  Paragraph
} from '../../components/Typography'
import DynamicLink from '../../components/DynamicLink'
import Icon from '../../components/Icon'
import SkeletonLoading from '../../components/card/SkeletonLoading'
import ArticleCard from '../../components/card/article/ArticleCard'

import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Box from '../../layouts/Box'

function Expertise() {
  const {
    data,
    loading
  } = useFetch('designs?populate=*')

  return (
    <Section
      classes={[
        'section--designs'
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
            col={{ _: 12, md: 6, lg: 4, xl: 3 }}
          >
            <Box
              classes={[
                'section__title-wrapper'
              ]}
            >
              <Box>
                <Heading
                  as='h4'
                  classes={[
                    'section__title'
                  ]}
                >
                  ESPORTS JERSEY Designs
                </Heading>

                <Paragraph
                  utilities={{
                    mb: { _: 7 }
                  }}
                >
                  2021-2023 design
                </Paragraph>

                <DynamicLink
                  classes={[
                    'circular-link'
                  ]}
                  utilities={{
                    position: { _: 'relative' }
                  }}
                >
                  <svg
                    width='150px'
                    height='150px'
                    viewBox='0 0 100 100'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      id='circlePath'
                      fill='none'
                      d='
                    M 10, 50
                    a 40,40 0 1,1 80,0
                    a 40,40 0 1,1 -80,0
                    '
                    />

                    <text
                      fontSize='12'
                      fontWeight='bold'
                      fill='currentColor'
                    >
                      <textPath
                        className='circular-link__text'
                        href='#circlePath'
                      >
                        View to see more jersey designs
                      </textPath>
                    </text>
                  </svg>

                  <Icon
                    name='arrow-long-right'
                    classes={['icon--2xl']}
                  />
                </DynamicLink>
              </Box>
            </Box>
          </Column>

          <Column
            col={{ _: 12, md: 6, lg: 8, xl: 9 }}
          >
            <Swiper
              autoHeight={false}
              slidesPerView={1}
              spaceBetween={24}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true
              }}
              navigation={true}
              pagination={false}
              breakpoints={{
                600: {
                  slidesPerView: 2
                },
                750: {
                  slidesPerView: 1,
                  spaceBetween: 0
                },
                1000: {
                  slidesPerView: 2
                },
                1200: {
                  slidesPerView: 3
                }
              }}
              speed={1000}
              modules={[
                Autoplay,
                Navigation,
                Pagination
              ]}
            >
              {
                data && data.map((design, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                    >
                      {
                        loading
                          ? <SkeletonLoading />
                          :
                          <ArticleCard
                            title={design.attributes.title}
                            slug={design.attributes.slug}
                            excerpt={'USD 50.00 $'}
                            thumbnail={design.attributes.thumbnail.data.attributes.url}
                            uploadedAt={design.attributes.uploadedAt}
                          />
                      }
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </Column>
        </Row>
      </Container>
    </Section>
  )
}

export default Expertise
