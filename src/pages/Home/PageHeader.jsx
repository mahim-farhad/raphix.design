import 'swiper/css'

import {
  Heading,
  Paragraph
} from '../../components/Typography'
import Icon from '../../components/Icon'
import Button from '../../components/Button'

import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Box from '../../layouts/Box'

import Jersey from '../../assets/images/jersey.png'

function PageHeader() {
  return (
    <Section>
      <Container>
        <Row
          utilities={{
            'align-items': { _: 'center' }
          }}
        >
          <Column
            col={{ _: 12, md: 6, lg: 8 }}
            utilities={{
              mb: { _: 9, md: 0 }
            }}
          >
            <Heading
              as='h2'
              display
              utilities={{
                mb: { _: 6 }
              }}
            >
              Hi, I&#39;m Rafid Chowdhury
            </Heading>

            <Heading
              as='h2'
              utilities={{
                mb: { _: 6 }
              }}
            >
              I&#39;m a esports graphics designer<br />
              with award-winning branding,<br />
              digital and print experience.
            </Heading>

            <Heading
              as='h4'
              utilities={{
                mb: { _: 8 }
              }}
            >
              I&#39;m a esports graphics designer
              with award-winning <br />
              branding, digital and print experience.
            </Heading>

            <Button>
              Let&#39;s get to work

              {/* <Icon
                name='arrow-long-right'
              /> */}
            </Button>
          </Column>

          <Column
            col={{ _: 12, md: 6, lg: 4 }}
          >
            <div
              className="position-relative"
            >
              <div
                className="square position-absolute"
              >
                <Box
                  utilities={{
                    bg: { _: 'primary' }
                  }}
                >
                  <Icon
                    name='brand-white'
                    classes={[
                      'icon--4xl p-2'
                    ]}
                  />
                </Box>
              </div>

              <div
                className="circle d-flex align-items-center justify-content-center"
              >
                <img
                  src={Jersey}
                  alt=''
                />
                <img
                  src="https://uploads-ssl.webflow.com/60398d2e11f53121e992ac78/6039b6bf1be19f66f17a9876_Circle.png"
                  loading="lazy"
                  alt=""
                  className='position-absolute'
                  style={{
                    zIndex: -1,
                    width: '300px',
                    height: '300px'
                  }}
                />
              </div>

              <div
                className="triangle position-absolute bottom-0 right-0"
              >
                <Box
                  utilities={{
                    bg: { _: 'primary' }
                  }}
                >
                  <Icon
                    name='brand-white'
                    classes={[
                      'icon--4xl p-2'
                    ]}
                  />
                </Box>
              </div>
            </div>
          </Column>
        </Row>
      </Container>
    </Section>
  )
}

export default PageHeader
