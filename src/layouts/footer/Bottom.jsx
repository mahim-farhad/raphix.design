import {
  Paragraph
} from '../../components/Typography'

import Container from '../Container'
import {
  Row,
  Column
} from '../Grid'
import Box from '../Box'

function Bottom() {
  return (
    <Box
      classes={[
        'footer__bottom'
      ]}
    >
      <Container
        fluid
      >
        <Row>
          <Column
            col={{ _: 12 }}
          >
            <Paragraph
              classes={[
                'footer__copyright-text'
              ]}
            >
              Copyright © {new Date().getFullYear()}, All Rights Reserved.
            </Paragraph>
          </Column>
        </Row>
      </Container>
    </Box>
  )
}

export default Bottom
