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

import {
  Heading,
  Paragraph
} from '../../components/Typography'
import DynamicLink from '../../components/DynamicLink'
import Icon from '../../components/Icon'
import ArticleCard from '../../components/card/article/ArticleCard'

import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Box from '../../layouts/Box'

const collectionsData = [
  {
    title: 'Esports Jersey Designs',
    slug: '',
    price: 'USD 50.00 $',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e4ca49173999109.649a2ee5e7859.png',
    uploadedAt: 5
  },
  {
    title: 'Esports Jersey Designs',
    slug: '',
    price: 'USD 50.00 $',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/343c56173999109.649a30d6f29f5.png',
    uploadedAt: 5
  },
  {
    title: 'Esports Jersey Designs',
    slug: '',
    price: 'USD 50.00 $',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/53e27a173999109.649a30d70054f.png',
    uploadedAt: 5
  },
  {
    title: 'Esports Jersey Designs',
    slug: '',
    price: 'USD 50.00 $',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9d9c79174817139.64a8bc2107ff7.png',
    uploadedAt: 5
  },
  {
    title: 'Esports Jersey Designs',
    slug: '',
    price: 'USD 50.00 $',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/c1b718174141023.649c7fd0935b0.jpg',
    uploadedAt: 5
  },
  {
    title: 'Esports Jersey Designs',
    slug: '',
    price: 'USD 50.00 $',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/8921d4174499077.64a3c98379454.png',
    uploadedAt: 5
  }
]

function Expertise() {
  return (
    <Section
      classes={[
        'section--collections'
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
                  2021-2023 Collection
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
                      fill='#fff'
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
              speed={1500}
              modules={[
                Autoplay,
                Navigation,
                Pagination
              ]}
            >
              {
                collectionsData && collectionsData.map((collection, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                    >
                      <ArticleCard
                        title={'Esports Jersey Design'}
                        slug={'article.attributes.slug'}
                        excerpt={'USD 50.00 $'}
                        thumbnail={collection.thumbnail}
                        uploadedAt={'01/05/2022'}
                      />
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
