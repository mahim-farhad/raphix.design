import {
  motion,
  useMotionValue,
  useTransform
} from 'framer-motion'

import useFetch from '../../hooks/useFetch'

import DynamicLink from '../../components/DynamicLink'
import {
  Heading
} from '../../components/Typography'
import Icon from '../../components/Icon'
import Divider from '../../components/Divider'
import Image from '../../components/Image'
import CollectionCard from '../../components/collection/CollectionCard'

import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Box from '../../layouts/Box'

const SeactionHeading = ({
  subHeading,
  heading
}) => {
  return (
    <Box
      classes={[
        'section__heading'
      ]}
    >
      <Heading
        as='h4'
        display
        classes={[
          'section__title'
        ]}
      >
        {subHeading}
      </Heading>

      <Box
        utilities={{
          bg: { _: 'primary' }
        }}
      >
        <Icon
          name='brand-white'
          classes={[
            'icon--4xl p-3'
          ]}
        />
      </Box>

      {/* <Heading
        as='h1'
        display
        classes={[
          'section__title-bg'
        ]}
      >
        {heading}
      </Heading> */}
    </Box>
  )
}

function CollectionsSection() {
  const {
    data,
    loading
  } = useFetch('designs?populate=*')

  const x = useMotionValue(200)
  const y = useMotionValue(200)

  const rotateX = useTransform(y, [0, 400], [5, -5])
  const rotateY = useTransform(x, [0, 400], [-5, 5])

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect()

    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

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
              col={{ _: 12 }}
            >
              <SeactionHeading
                heading='Designs'
                subHeading='Jerseys'
              />
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
                      bg: { _: 'light' }
                    }}
                  >
                    <DynamicLink
                      classes={[
                        'btn',
                        'btn--sm',
                        'btn--fill-primary',
                        'btn--link'
                      ]}
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
              col={{ _: 12 }}
            >
              <SeactionHeading
                heading='Designs'
                subHeading='Logos'
              />
            </Column>
          </Row>

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
                  <motion.div
                    style={{
                      perspective: 500
                    }}
                    onMouseMove={handleMouse}
                  >
                    <motion.img
                      src='https://cdn.dribbble.com/users/1141243/screenshots/12116815/media/ec22dff4ce2870fbdbbeeb8eaf49d7de.png?resize=800x600&vertical=center'
                      alt=''
                      style={{
                        rotateX: rotateX,
                        rotateY: rotateY
                      }}
                    />
                  </motion.div>

                  {/* <div
                    className="card"
                  >
                    <a
                      href="https://www.sierraplese.com/projects/west-palm-beach"
                    >
                      <div>
                        <div>
                          <h1>
                            West Palm Beach
                          </h1>

                          <img src="https://uploads-ssl.webflow.com/60398d2e11f53121e992ac78/605293c155c7422d2c78080b_Line%202.png" loading="lazy" alt="" className="image-17" />

                          <div
                            className="text-block-12"
                          >
                            Website Design
                          </div>

                          <div className="card-highlight" />
                        </div>
                      </div>
                    </a>
                  </div> */}
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
                  <Box
                    utilities={{
                      d: { _: 'flex' },
                      'align-items': { _: 'center' },
                      'justify-content': { _: 'center' },
                      w: { _: '100' },
                      h: { _: '100' },
                      bg: { _: 'light' }
                    }}
                  >
                    <DynamicLink
                      classes={[
                        'btn',
                        'btn--sm',
                        'btn--fill-primary',
                        'btn--link'
                      ]}
                    >
                      View More
                    </DynamicLink>
                  </Box>
                </Column>
              </Row>
            </Column>
          </Row>
        </Container >
      </Section >

      <Divider />

      <Section
        classes={[
          'section--collections'
        ]}
      >
        <Container>
          <Row>
            <Column
              col={{ _: 12 }}
            >
              <SeactionHeading
                heading='Designs'
                subHeading='Banners'
              />
            </Column>
          </Row>

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
                      w: { _: '100' },
                      h: { _: '100' },
                      bg: { _: 'light' }
                    }}
                  >
                    <DynamicLink
                      classes={[
                        'btn',
                        'btn--sm',
                        'btn--fill-primary',
                        'btn--link'
                      ]}
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
