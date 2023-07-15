import {
  Heading,
  Paragraph
} from '../../components/Typography'
import Icon from '../../components/Icon'
import Button from '../../components/Button'
import Nav from '../../components/nav/Nav'
import NavLink from '../../components/nav/NavLink'

import Container from '../Container'
import {
  Row,
  Column
} from '../Grid'
import Box from '../Box'

const navigations = [
  {
    id: 1,
    path: 'home',
    name: 'Home'
  },
  {
    id: 2,
    path: 'contact',
    name: 'Contact'
  },
  {
    id: 3,
    path: 'testimonials',
    name: 'Testimonials'
  },
  {
    id: 4,
    path: 'about',
    name: 'About'
  }
]

const services = [
  'Shipping & returns',
  'Terms & Conditions',
  'Size charts',
  'Support'
]

const paymentMethodImages = [
  {
    id: 1,
    src: 'https://raven.gg/content/themes/zoa-child/image/Mastercard.svg',
    name: 'Mastercard'
  },
  {
    id: 2,
    src: 'https://raven.gg/content/themes/zoa-child/image/Visa.svg',
    name: 'Visa'
  },
  {
    id: 3,
    src: 'https://raven.gg/content/themes/zoa-child/image/Maestro.svg',
    name: 'Maestro'
  },
  {
    id: 4,
    src: 'https://raven.gg/content/themes/zoa-child/image/paypal.svg',
    name: 'Paypal'
  }
]

const Brand = () => {
  return (
    <Box
      utilities={{
        d: { _: 'flex' },
        gap: { _: 4 },
        'align-items': { _: 'center' },
        mb: { _: 6 }
      }}
    >
      <img
        src="https://raven.gg/content/themes/zoa-child/image/logo-white.svg"
        alt="Raven"
        className='w-50px'
      />

      <Heading
        as="h5"
        utilities={{
          mb: { _: 0 },
          tc: { _: 'light' }
        }}
      >
        Raphix Design
      </Heading>
    </Box>
  )
}

const Navigations = () => {
  return (
    <Box>
      <Heading
        as="h6"
        utilities={{
          mt: { _: 0 },
          mb: { _: 4 },
          tc: { _: 'light' }
        }}
      >
        Navigations
      </Heading>

      <Nav
        vertical
      >
        {
          navigations && navigations.map((navigation, index) => (
            <NavLink
              key={index}
              path={`/${navigation.path}`}
              utilities={{
                py: { _: 2 },
                px: { _: 0 },
                tc: { _: 'light' }
              }}
            >
              {navigation.name}
            </NavLink>
          ))
        }
      </Nav>
    </Box>
  )
}

const Services = () => {
  return (
    <Box>
      <Heading
        as="h6"
        utilities={{
          mt: { _: 0 },
          mb: { _: 4 },
          tc: { _: 'light' }
        }}
      >
        Services
      </Heading>

      <Nav
        vertical
      >
        {
          services && services.map((service, index) => (
            <NavLink
              key={index}
              path='/services'
              utilities={{
                py: { _: 2 },
                px: { _: 0 },
                tc: { _: 'light' }
              }}
            >
              {service}
            </NavLink>
          ))
        }
      </Nav>
    </Box>
  )
}

const Payments = () => {
  return (
    <Box>
      <Heading
        as="h6"
        utilities={{
          mt: { _: 0 },
          mb: { _: 4 },
          tc: { _: 'light' }
        }}
      >
        Payment Methods
      </Heading>

      <ul
        className='footer__payments'
      >
        {
          paymentMethodImages.map(({
            id,
            src,
            name
          }) => (
            <li
              key={id}
            >
              <img
                src={src}
                alt={name}
              />
            </li>
          ))
        }
      </ul>
    </Box>
  )
}

const Newsletter = () => {
  return (
    <Box>
      <Heading
        as="h6"
        utilities={{
          mt: { _: 0 },
          mb: { _: 6 },
          tc: { _: 'light' }
        }}
      >
        Newsletter
      </Heading>

      <Paragraph
        utilities={{
          mt: { _: 0 },
          mb: { _: 6 },
          tc: { _: 'light' }
        }}
      >
        Subscribe to the weekly newsletter <br />
        for all the latest updates
      </Paragraph>

      <fieldset>
        <Box
          classes={[
            'input-group',
            'input-group--sm',
            'input-group--newsletter'
          ]}
        >
          <input
            type='email'
            name='email'
            className='input-group__control'
            placeholder='Subscribe'
            required
          />

          <Button
            size='sm'
            utilities={{
              d: { _: 'none', sm: 'inline-block' },
              rounded: { _: 0 }
            }}
          >
            Subscribe
          </Button>

          <Button
            size='sm'
            iconOnly
            utilities={{
              d: { sm: 'none' },
              rounded: { _: 0 }
            }}
          >
            <Icon
              name='arrow-long-right'
            />
          </Button>
        </Box>
      </fieldset>
    </Box>
  )
}

function Top() {
  return (
    <Box
      classes={[
        'footer__top'
      ]}
    >
      <Container fluid>
        <Row
          utilities={{
            'row-gap': { _: 8 },
            mb: { _: 8 }
          }}
        >
          <Column
            col={{ _: 12, lg: 6 }}
          >
            <Brand />
          </Column>

          <Column
            col={{ _: 12, lg: 6 }}
          >
            <Heading
              as='h4'
              utilities={{
                w: { md: 75, lg: 100 },
                fs: { _: 'lg', lg: 'xxl' },
                tc: { _: 'light' }
              }}
            >
              ORDER YOUR TEAMS CUSTOM ESPORTS JERSEYS WITH
              RAVEN, DESIGN YOUR OWN ESPORTS APPAREL
              AND LAUNCH YOUR STORE TODAY.
            </Heading>
          </Column>
        </Row>

        <Row
          utilities={{
            'row-gap': { _: 8 }
          }}
        >
          <Column
            col={{ _: 12, md: 5, lg: 4, xl: 3 }}
            utilities={{
              mr: { _: 'auto' }
            }}
          >
            <Newsletter />
          </Column>

          <Column
            col={{ _: 12, sm: 4, md: 3, lg: 2 }}
          >
            <Navigations />
          </Column>

          <Column
            col={{ _: 12, sm: 4, md: 3, lg: 2 }}
          >
            <Services />
          </Column>

          <Column
            col={{ _: 12, sm: 4, md: 6, lg: 2 }}
          >
            <Payments />
          </Column>
        </Row>
      </Container>
    </Box>
  )
}

export default Top
