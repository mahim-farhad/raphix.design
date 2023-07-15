import {
  AnchorTag,
  Paragraph
} from '../../components/Typography'
import Icon from '../../components/Icon'
import Nav from '../../components/nav/Nav'
import NavLink from '../../components/nav/NavLink'

import Container from '../Container'
import {
  Row,
  Column
} from '../Grid'
import Box from '../Box'

const socials = [
  {
    id: 1,
    path: 'https://facebook.com',
    name: 'facebook'
  },
  {
    id: 2,
    path: 'https://twitter.com',
    name: 'twitter'
  },
  {
    id: 3,
    path: 'https://linked-in.com',
    name: 'linked-in'
  }
]

function Bottom() {
  return (
    <Box
      classes={[
        'footer__bottom'
      ]}
    >
      <Container fluid>
        <Row
          utilities={{
            'align-items': { _: 'center' },
            'row-gap': { _: 6 }
          }}
        >
          <Column
            col={{ _: 12, md: 4 }}
          >
            <Paragraph
              classes={[
                'footer__copyright-text'
              ]}
            >
              Copyright © {new Date().getFullYear()}, All Rights Reserved.
            </Paragraph>
          </Column>

          <Column
            col={{ _: 12, md: 4 }}
          >
            <Nav
              utilities={{
                'justify-content': { _: 'center' }
              }}
            >
              {
                socials && socials.map((social, index) => (
                  <NavLink
                    key={index}
                    path={`${social.path}`}
                    classes={[
                      'btn',
                      `btn--text-light`,
                      'btn--icon-only'
                    ]}
                  >
                    <Icon
                      name={social.name}
                      classes={[
                        'btn__icon'
                      ]}
                    />
                  </NavLink>
                ))
              }
            </Nav>
          </Column>

          <Column
            col={{ _: 12, md: 4 }}
          >
            <Paragraph
              classes={[
                'footer__developer-text'
              ]}
            >
              Developed by {' '}

              <AnchorTag
                path='https://www.fiverr.com/mahim_farhad/be-your-front-end-web-developer'
                utilities={{
                  tc: { _: 'primary' }
                }}
              >
                Mahim Farhad
              </AnchorTag>
            </Paragraph>
          </Column>
        </Row>
      </Container>
    </Box>
  )
}

export default Bottom
