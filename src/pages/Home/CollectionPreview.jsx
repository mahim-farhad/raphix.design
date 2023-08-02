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
              thumbnail='https://mir-s3-cdn-cf.behance.net/project_modules/1400/e4ca49173999109.649a2ee5e7859.png'
            />
          </Column>

          <Column
            col={{ _: 12 }}
          >
            <Row>
              {
                data && data.map((design) => {
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
                          title={design.attributes.title}
                          slug={design.attributes.slug}
                          thumbnail={`http://localhost:1337${design.attributes.thumbnail.data.attributes.url}`}
                        />
                      </Column>
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