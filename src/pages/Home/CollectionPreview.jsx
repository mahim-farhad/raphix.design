import useFetch from '../../hooks/useFetch'

import DynamicLink from '../../components/DynamicLink'
import Divider from '../../components/Divider'
import Icon from '../../components/Icon'
import Image from '../../components/Image'
import CollectionCard from '../../components/card/collection/CollectionCard'

import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Box from '../../layouts/Box'

const CollectionPreviewCard = ({
  image
}) => {
  return (
    <DynamicLink
      path='https://fabrilife.com/gallery?refinementList%5Btype%5D%5B0%5D=mens%20jacket'
    >
      <Image
        src={image}
        utilities={{
          w: { _: 100 }
        }}
      />
    </DynamicLink>
  )
}

function CollectionPreview() {
  const {
    data,
    loading
  } = useFetch('designs?populate=*')

  return (
    <>
      <Section
        classes={[
          'collection-preview'
        ]}
      >
        <Container
          fluid
        >
          <Row
            utilities={{
              mb: { _: 6 }
            }}
          >
            <Column
              col={{ _: 12 }}
            >
              <Box
                utilities={{
                  position: { _: 'relative' },
                  mb: { _: 9 }
                }}
              >
                <h1
                  className='section__title-bg'
                >
                  COLLECTION
                </h1>

                <h2
                  className='section__title'
                >
                  Shop by Jerseys
                </h2>
              </Box>
            </Column>
          </Row>

          <Row>
            <Column
              col={{ _: 12, md: 8, xl: 6 }}
              classes={[
                'collection-preview__thumbnail'
              ]}
            >
              <CollectionPreviewCard
                image='https://fabrilife.com/image-gallery/638a77dd0caa8-square.jpg'
              />
            </Column>

            <Column
              col={{ _: 12 }}
            >
              <Row>
                {
                  data && data.map((design, index) => {
                    return (
                      <>
                        <Column
                          key={design.id}
                          col={{ _: 6, md: 4, xl: 3 }}
                          classes={[
                            'collection-preview__col'
                          ]}
                        >
                          <CollectionPreviewCard
                            image='https://fabrilife.com/image-gallery/638a77dd0caa8-square.jpg'
                          />
                        </Column>

                        {
                          index >= 1 &&
                          <Column
                            key={design.id}
                            classes={[
                              'collection-preview__col'
                            ]}
                            col={{ _: 6, md: 4, xl: 3 }}
                          >
                            <CollectionPreviewCard
                              image='https://fabrilife.com/image-gallery/638a77dd0caa8-square.jpg'
                            />
                          </Column>
                        }
                      </>
                    )
                  })
                }

                <Column
                  col={{ _: 6, sm: 'auto', md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Box
                    classes={[
                      'section__title-wrapper'
                    ]}
                  >
                    <DynamicLink
                      classes={[
                        'circular-link'
                      ]}
                      utilities={{
                        position: { _: 'relative' }
                      }}
                    >
                      <svg
                        viewBox='0 0 100 100'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-100px w-md-150px w-lg-200px h-100px h-md-150px h-lg-200px'
                      >
                        <path
                          id='circlePath'
                          fill='none'
                          d='M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0'
                        />

                        <text
                          fontSize='8'
                          fontWeight='bold'
                          fill='currentColor'
                        >
                          <textPath
                            className='circular-link__text'
                            href='#circlePath'
                          >
                            VIEW MORE JERSEY COLLECTION DESIGNS
                          </textPath>
                        </text>
                      </svg>

                      <Icon
                        name='arrow-long-right'
                        classes={[
                          'icon--xl'
                        ]}
                      />
                    </DynamicLink>
                  </Box>
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </Section>

      <Divider />

      <Section
        classes={[
          'collection-preview'
        ]}
      >
        <Container
          fluid
        >
          <Row
            utilities={{
              mb: { _: 6 }
            }}
          >
            <Column
              col={{ _: 12 }}
            >
              <div className='position-relative mb-9'>
                <h1
                  className='section__title-bg'
                >
                  COLLECTION
                </h1>

                <h2
                  className='section__title'
                >
                  Shop by Banners
                </h2>
              </div>
            </Column>
          </Row>

          <Row>
            <Column
              col={{ _: 12, md: 8, xl: 6 }}
              classes={[
                'collection-preview__thumbnail'
              ]}
            >
              <CollectionCard
                image='https://i.pinimg.com/564x/17/fb/f4/17fbf496823f2480a0bd4a10b93ac94e.jpg'
              />
            </Column>

            <Column
              col={{ _: 12 }}
            >
              <Row>
                {
                  data && data.map((design, index) => {
                    return (
                      <>
                        <Column
                          key={design.id}
                          col={{ _: 12, md: 4, xl: 3 }}
                          classes={[
                            'collection-preview__col'
                          ]}
                        >
                          <CollectionCard
                            image='https://i.pinimg.com/564x/f9/82/b0/f982b0aeede29c04cedb9990152bb3bf.jpg'
                          />
                        </Column>

                        <Column
                          key={design.id}
                          col={{ _: 12, md: 4, xl: 3 }}
                          classes={[
                            'collection-preview__col'
                          ]}
                        >
                          <CollectionCard
                            image='https://i.pinimg.com/564x/f9/82/b0/f982b0aeede29c04cedb9990152bb3bf.jpg'
                          />
                        </Column>

                        <Column
                          key={design.id}
                          col={{ _: 12, md: 4, xl: 3 }}
                          classes={[
                            'collection-preview__col'
                          ]}
                        >
                          <CollectionCard
                            image='https://i.pinimg.com/564x/f9/82/b0/f982b0aeede29c04cedb9990152bb3bf.jpg'
                          />
                        </Column>


                        {
                          index >= 1 &&
                          <Column
                            key={design.id}
                            classes={[
                              'collection-preview__col'
                            ]}
                            col={{ _: 12, md: 4, xl: 3 }}
                          >
                            <CollectionCard
                              image='https://i.pinimg.com/564x/f9/82/b0/f982b0aeede29c04cedb9990152bb3bf.jpg'
                            />
                          </Column>
                        }
                      </>
                    )
                  })
                }

                <Column
                  col={{ _: 12, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Box
                    classes={[
                      'section__title-wrapper'
                    ]}
                  >
                    <DynamicLink
                      classes={[
                        'circular-link'
                      ]}
                      utilities={{
                        position: { _: 'relative' }
                      }}
                    >
                      VIEW MORE COLLECTIONS
                    </DynamicLink>
                  </Box>
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </Section>
    </>
  )
}

export default CollectionPreview
