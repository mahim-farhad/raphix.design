import useFetch from '../../hooks/useFetch'

import DynamicLink from '../../components/DynamicLink'
import Divider from '../../components/Divider'
import CollectionCard from '../../components/collection/CollectionCard'

import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Box from '../../layouts/Box'
import Image from '../../components/Image'

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
    <>
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

      <Divider />

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
              <Image
                src='https://cdn.dribbble.com/users/1141243/screenshots/15926325/media/e5463dfe66e5578a7110afd8957713b4.png?resize=1000x750&vertical=center'
              />
            </Column>

            <Column
              col={{ _: 12 }}
            >
              <Row>
                <Column
                  col={{ _: 6, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Image
                    src='https://cdn.dribbble.com/users/1141243/screenshots/12116815/media/ec22dff4ce2870fbdbbeeb8eaf49d7de.png?resize=800x600&vertical=center'
                  />
                </Column>

                <Column
                  col={{ _: 6, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Image
                    src='https://cdn.dribbble.com/users/1141243/screenshots/15363150/media/fdb93ec410ffb2e3b0e17c85cb0bae7f.png?resize=1000x750&vertical=center'
                  />
                </Column>

                <Column
                  col={{ _: 6, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Image
                    src='https://cdn.dribbble.com/users/1141243/screenshots/14925105/media/6ed0e4cbea8cca94ca22d3bb304cb811.png?resize=1000x750&vertical=center'
                  />
                </Column>

                <Column
                  col={{ _: 6, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Image
                    src='https://cdn.dribbble.com/users/1141243/screenshots/14990748/media/9396d88eeab0a3827540a0916a0dfaec.png?resize=800x600&vertical=center'
                  />
                </Column>

                <Column
                  col={{ _: 6, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Image
                    src='https://cdn.dribbble.com/users/1543265/screenshots/10762755/media/0b987ac5a3521a97f9435b400174209d.png?resize=1000x750&vertical=center'
                  />
                </Column>

                <Column
                  col={{ _: 6, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Image
                    src='https://cdn.dribbble.com/users/1141243/screenshots/11244257/media/baf8ddbf042dcc70ecad2df31e59993c.png?resize=800x600&vertical=center'
                  />
                </Column>

                <Column
                  col={{ _: 6, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Image
                    src='https://cdn.dribbble.com/users/1141243/screenshots/15377900/media/8ae08ff9ace4f12ed20aeb1dc561305e.png?resize=1000x750&vertical=center'
                  />
                </Column>


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
                      w: { _: 100 },
                      h: { _: 100 },
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

      <Divider />

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
              <Image
                src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c36f3b173665843.Y3JvcCwyNjg0LDIxMDAsODYsMA.png'
                classes={['w-100']}
              />
            </Column>

            <Column
              col={{ _: 12 }}
            >
              <Row>
                <Column
                  col={{ _: 6, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Image
                    src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/617036173991933.Y3JvcCwxMDg4LDg1MSwwLDQ1.png'
                  />
                </Column>

                <Column
                  col={{ _: 6, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Image
                    src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c36f3b173665843.Y3JvcCwyNjg0LDIxMDAsODYsMA.png'
                  />
                </Column>

                <Column
                  col={{ _: 6, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Image
                    src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9eacee162958623.Y3JvcCwyNTAwLDE5NTUsMCwyNA.png'
                  />
                </Column>

                <Column
                  col={{ _: 6, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Image
                    src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/cab080168941157.Y3JvcCw4MDgsNjMyLDAsMA.jpg'
                  />
                </Column>

                <Column
                  col={{ _: 6, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Image
                    src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9eacee162958623.Y3JvcCwyNTAwLDE5NTUsMCwyNA.png'
                  />
                </Column>

                <Column
                  col={{ _: 6, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Image
                    src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/cab080168941157.Y3JvcCw4MDgsNjMyLDAsMA.jpg'
                  />
                </Column>

                <Column
                  col={{ _: 6, md: 4, xl: 3 }}
                  classes={[
                    'collection-preview__col'
                  ]}
                >
                  <Image
                    src='https://mir-s3-cdn-cf.behance.net/projects/404_webp/5e6f5a175054241.Y3JvcCwyODE4LDIyMDQsOTAsMA.png'
                  />
                </Column>

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
                      w: { _: 100 },
                      h: { _: 100 },
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
    </>
  )
}

export default CollectionsSection
