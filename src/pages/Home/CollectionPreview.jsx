import useFetch from '../../hooks/useFetch'

import DynamicLink from '../../components/DynamicLink'
import {
  Heading
} from '../../components/Typography'
import CollectionCard from '../../components/card/collection/CollectionCard'

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
        Shop by Jerseys
      </Heading>

      <Heading
        as='h1'
        classes={[
          'section__title-bg'
        ]}
      >
        COLLECTION
      </Heading>
    </Box>
  )
}

function CollectionPreview() {
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
            <SeactionHeading />
          </Column>
        </Row>

        <Row>
          <Column
            col={{ _: 12, md: 8, xl: 6 }}
            classes={[
              'collection-preview__col--thumbnail'
            ]}
          >
            <CollectionCard
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
                        <CollectionCard
                          image='https://fabrilife.com/image-gallery/638a77dd0caa8-square.jpg'
                        />
                      </Column>

                      <Column
                        key={design.id}
                        col={{ _: 6, md: 4, xl: 3 }}
                        classes={[
                          'collection-preview__col'
                        ]}
                      >
                        <CollectionCard
                          image='https://fabrilife.com/image-gallery/638a77dd0caa8-square.jpg'
                        />
                      </Column>

                      <Column
                        key={design.id}
                        col={{ _: 6, md: 4, xl: 3 }}
                        classes={[
                          'collection-preview__col'
                        ]}
                      >
                        <CollectionCard
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
                          <CollectionCard
                            image='https://fabrilife.com/image-gallery/638a77dd0caa8-square.jpg'
                          />
                        </Column>
                      }
                    </>
                  )
                })
              }

              <Column
                col={{ _: 6, md: 4, xl: 3 }}
                classes={[
                  'collection-preview__col'
                ]}
              >
                <Box
                  classes={[
                    'd-flex w-100 h-100 align-items-center justify-content-center bg-dark'
                  ]}
                >
                  <DynamicLink
                    classes={[
                      'btn btn--text-primary btn--link btn--extended'
                    ]}
                    utilities={{
                      position: { _: 'relative' },
                      pt: { _: 3 },
                      pb: { _: 2 }
                    }}
                  >
                    View More
                  </DynamicLink>

                  <CollectionCard
                    image='https://fabrilife.com/image-gallery/638a77dd0caa8-square.jpg'
                  />
                </Box>
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </Section>
  )
}

export default CollectionPreview

{/* <svg
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
    fontSize='12'
    fontWeight='bold'
    fill='currentColor'
  >
    <textPath
      className='circular-link__text'
      href='#circlePath'
    >
      VIEW MORE COLLECTION
    </textPath>
  </text>
</svg> */}