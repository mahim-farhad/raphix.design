import useFetch from '../../hooks/useFetch'

import DynamicLink from '../../components/DynamicLink'
import Icon from '../../components/Icon'

import Section from '../Section'
import Container from '../Container'
import {
  Row,
  Column
} from '../Grid'
import Box from '../Box'

function Collections() {
  const {
    data,
    loading
  } = useFetch('designs?populate=*')

  return (
    <Section>
      <Container
        fluid
      >
        <Row
          utilities={{
            'row-gap': { _: 6 }
          }}
        >
          <Column
            col={{ _: 12, md: 8, xl: 6 }}
            classes={['customgrid']}
          >
            <a
              className='product-link'
              href='https://fabrilife.com/gallery?refinementList%5Btype%5D%5B0%5D=mens%20jacket'
            >
              <div>
                <img
                  src='https://fabrilife.com/image-gallery/638a77dd0caa8-square.jpg'
                  className='w-100'
                />
              </div>
            </a>
          </Column>

          <Column
            col={{ _: 12 }}
          >
            <Row
              classes={[
                'jersey-collections'
              ]}
              utilities={{
                'row-gap': { _: 6 }
              }}
            >
              {
                data && data.map((design) => {
                  return (
                    <>
                      <Column
                        key={design.id}
                        col={{ _: 6, md: 4, xl: 3 }}
                      >
                        <a className="product-link" href="/product/71880-mens-urban-edition-premium-t-shirt-inspired">
                          <div className="home-product">
                            {/* <img src={'http://localhost:1337' + design.attributes.thumbnail.data.attributes.url} /> */}
                            <img src='https://fabrilife.com/products/6382186056854-square.jpg' />

                            {/* <div className="product-info">
                          <div className="product-name">Mens Urban Edition Premium T-shirt - Inspired</div>
                        </div> */}

                            {/* <div className="product-price">
                                <div>
                                <strong>৳ 685.00</strong> <strike>৳ 785.00</strike>
                                </div>
                              </div> */}
                          </div>
                        </a>
                      </Column>

                      <Column
                        key={design.id}
                        col={{ _: 6, md: 4, xl: 3 }}
                      >
                        <a className="product-link" href="/product/71880-mens-urban-edition-premium-t-shirt-inspired">
                          <div className="home-product">
                            {/* <img src={'http://localhost:1337' + design.attributes.thumbnail.data.attributes.url} /> */}
                            <img src='https://fabrilife.com/products/6382186056854-square.jpg' />

                            {/* <div className="product-info">
                          <div className="product-name">Mens Urban Edition Premium T-shirt - Inspired</div>
                        </div> */}

                            {/* <div className="product-price">
                                <div>
                                <strong>৳ 685.00</strong> <strike>৳ 785.00</strike>
                                </div>
                              </div> */}
                          </div>
                        </a>
                      </Column>

                      <Column
                        key={design.id}
                        col={{ _: 6, md: 4, xl: 3 }}
                      >
                        <a className="product-link" href="/product/71880-mens-urban-edition-premium-t-shirt-inspired">
                          <div className="home-product">
                            {/* <img src={'http://localhost:1337' + design.attributes.thumbnail.data.attributes.url} /> */}
                            <img src='https://fabrilife.com/products/6382186056854-square.jpg' />

                            {/* <div className="product-info">
                          <div className="product-name">Mens Urban Edition Premium T-shirt - Inspired</div>
                        </div> */}

                            {/* <div className="product-price">
                                <div>
                                <strong>৳ 685.00</strong> <strike>৳ 785.00</strike>
                                </div>
                              </div> */}
                          </div>
                        </a>
                      </Column>

                      <Column
                        key={design.id}
                        col={{ _: 6, md: 4, xl: 3 }}
                      >
                        <a className="product-link" href="/product/71880-mens-urban-edition-premium-t-shirt-inspired">
                          <div className="home-product">
                            {/* <img src={'http://localhost:1337' + design.attributes.thumbnail.data.attributes.url} /> */}
                            <img src='https://fabrilife.com/products/6382186056854-square.jpg' />

                            {/* <div className="product-info">
                          <div className="product-name">Mens Urban Edition Premium T-shirt - Inspired</div>
                        </div> */}

                            {/* <div className="product-price">
                                <div>
                                <strong>৳ 685.00</strong> <strike>৳ 785.00</strike>
                                </div>
                              </div> */}
                          </div>
                        </a>
                      </Column>
                    </>
                  )
                })
              }

              <Column
                col={{ _: 6, md: 4, xl: 3 }}
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
                      className='w-150px w-md-200px h-150px h-md-200px'
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
                        fontSize='8'
                        fontWeight='bold'
                        fill='currentColor'
                      >
                        <textPath
                          className='circular-link__text'
                          href='#circlePath'
                        >
                          VIEW TO SEE MORE JERSEY DESIGNS
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
    </Section >
  )
}

export default Collections
