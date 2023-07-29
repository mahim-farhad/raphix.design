import {
  Heading
} from '../../components/Typography'

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
      utilities={{
        mb: { _: 9 }
      }}
    >
      <Heading
        as='h1'
        classes={[
          'section__title-bg'
        ]}
      >
        CATEGORIES
      </Heading>

      <Heading
        as='h1'
        classes={[
          'section__title'
        ]}
      >
        Shop by Categories
      </Heading>
    </Box>
  )
}

function Categories() {
  return (
    <Section
      classes={[
        'collection-preview'
      ]}
    >
      <Container>
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
            col={{ _: 12, md: 8 }}
          >
            <Box
              utilities={{
                h: { _: 100 }
              }}
            >
              <img
                src='https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/h3_ct1.jpg'
              />
            </Box>
          </Column>

          <Column
            col={{ _: 12, md: 4 }}
          >
            <Box>
              <img
                src='https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/h3_ct-2.jpg'
              />
            </Box>
          </Column>

          <Column
            col={{ _: 12, md: 6 }}
          >
            <Box>
              <img
                className='w-100'
                src='https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/h3_ct-3.jpg'
              />
            </Box>
          </Column>

          <Column
            col={{ _: 12, md: 6 }}
          >
            <Box>
              <img
                className='w-100'
                src='https://demo2.wpopal.com/ekommart/wp-content/uploads/2020/02/h3_ct-4.jpg'
              />
            </Box>
          </Column>
        </Row>
      </Container>
    </Section>
  )
}

export default Categories
