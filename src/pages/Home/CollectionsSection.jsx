import useFetch from '../../hooks/useFetch'

import DynamicLink from '../../components/DynamicLink'
import CollectionCard from '../../components/collection/CollectionCard'

import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Box from '../../layouts/Box'

// const SeactionHeading = () => {
//   return (
//     <Box
//       classes={[
//         'section__heading'
//       ]}
//     >
//       <Heading
//         as='h1'
//         classes={[
//           'section__title'
//         ]}
//       >
//         Shop by Jerseys
//       </Heading>

//       <Heading
//         as='h1'
//         classes={[
//           'section__title-bg'
//         ]}
//       >
//         COLLECTION
//       </Heading>
//     </Box>
//   )
// }

function CollectionsSection() {
  const {
    data,
    loading
  } = useFetch('designs?populate=*')

  return (
    <Section
      classes={[
        'section--collections'
      ]}
    >
      <Container>
        <Row>
          <Column
            col={{ _: 12, md: 8, xl: 6 }}
            classes={[
              'collection-preview__col--thumbnail'
            ]}
          >
            {/* <Box
              utilities={{
                bg: { _: 'dark' },
                color: { _: 'light' }
              }}
            >
              <Heading
                display
                as='h1'
                utilities={{
                  color: { _: 'light' }
                }}
              >
                Recent Work Done
              </Heading>

              <Heading
                display
                as='h4'
                utilities={{
                  color: { _: 'light' }
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Heading>

              <Paragraph
                utilities={{
                  color: { _: 'light' }
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic ab harum doloremque quisquam tempore voluptas neque iusto provident magnam, optio rem, sit, perspiciatis ex sunt quam nesciunt reiciendis deleniti.
              </Paragraph>
            </Box> */}

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

              {
                data && data.map((design, index) => {
                  return (
                    index < 1 &&
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
                  utilities={{
                    d: { _: 'flex' },
                    'align-items': { _: 'center' },
                    'justify-content': { _: 'center' },
                    w: { _: '100' },
                    h: { _: '100' },
                    bg: { _: 'dark' }
                  }}
                >
                  <DynamicLink
                    classes={[
                      'btn btn--tonal-primary btn--link'
                    ]}
                    utilities={{
                      position: { _: 'relative' },
                      pt: { _: 3 },
                      pb: { _: 2 }
                    }}
                  >
                    View More
                  </DynamicLink>
                </Box>
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </Section>
  )
}

export default CollectionsSection
