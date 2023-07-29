import {
  Swiper,
  SwiperSlide
} from 'swiper/react'

import {
  FreeMode,
  Navigation,
  Pagination
} from 'swiper/modules'

import 'swiper/css'

import {
  Heading,
  Paragraph,
  Span
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
            'align-items': { _: 'center' },
            'justify-content': { _: 'center' }
          }}
        >
          <Column
            col={{ _: 12, md: 5, lg: 4 }}
            utilities={{
              order: { md: 2 },
              mb: { _: 9, md: 0 }
            }}
          >
            <Box>
              <span />

              <img
                src={Jersey}
                alt=''
              />
            </Box>
          </Column>

          <Column
            col={{ _: 12, md: 5, lg: 4 }}
          >
            <Heading
              as='h1'
            >
              Jersey Shirts
            </Heading>

            <Heading
              as='h1'
              display
            >
              NAVI BRAND
            </Heading>

            <Paragraph
              utilities={{
                my: { _: 8 }
              }}
            >
              Navi Nation #BornToWin <br />
              Longsleeve yellow -------
            </Paragraph>

            <Button>
              More Detials
            </Button>
          </Column>
        </Row>
      </Container>
    </Section>
  )
}

export default PageHeader
