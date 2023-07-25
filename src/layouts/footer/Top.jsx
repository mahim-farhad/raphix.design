import {
  Heading,
  Small
} from '../../components/Typography'
import Icon from '../../components/Icon'
import Button from '../../components/Button'
import Nav from '../../components/nav/Nav'
import NavLink from '../../components/nav/NavLink'
import Textfield from '../../components/Textfield'

import Container from '../Container'
import {
  Row,
  Column
} from '../Grid'
import Box from '../Box';

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
    path: 'https://discord.com',
    name: 'discord'
  },
  {
    id: 4,
    path: 'https://twitch.com',
    name: 'twitch'
  },
  {
    id: 5,
    path: 'https://linked-in.com',
    name: 'linked-in'
  }
]

const navigations = [
  {
    id: 1,
    path: 'shipping-&-returns',
    name: 'Shipping & Returns'
  },
  {
    id: 2,
    path: 'size-charts',
    name: 'Size charts'
  },
  {
    id: 3,
    path: 'support',
    name: 'Support'
  }
]

const services = [
  {
    id: 1,
    path: 'terms-&-conditions',
    name: 'Terms & Conditions'
  },
  {
    id: 2,
    path: 'blog',
    name: 'Blog'
  },
  {
    id: 3,
    path: 'bBespoke-merchandise',
    name: 'Bespoke Merchandise'
  }
]

const paymentMethodImages = [
  {
    id: 1,
    src: 'https://raven.gg/content/themes/zoa-child/image/paypal.svg',
    name: 'Paypal'
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
    src: 'https://raven.gg/content/themes/zoa-child/image/Mastercard.svg',
    name: 'Mastercard'
  }
]

const Brand = () => {
  return (
    <Box
      utilities={{
        d: { _: 'flex' },
        gap: { _: 4 },
        'align-items': { _: 'center' }
      }}
    >
      <Icon
        name='brand'
        classes={[
          'icon--4xl'
        ]}
      />

      <Heading
        as="h5"
        utilities={{
          mb: { _: 0 }
        }}
      >
        Raphix Design <br />

        <Small>
          eSports Graphics Designer
        </Small>
      </Heading>
    </Box>
  )
}

const Socials = () => {
  return (
    <Box>
      <Heading
        as='h5'
        utilities={{
          mb: { _: 2 }
        }}
      >
        Follow Me
      </Heading>

      <Nav
        classes={[
          'footer__nav-social'
        ]}
      >
        {
          socials && socials.map((social) => (
            <NavLink
              key={social.id}
              path={`${social.path}`}
              iconOnly
              classes={[
                'btn btn--icon-only btn--fill-primary'
              ]}
            >
              <Icon
                name={social.name}
                classes={[
                  'nav__icon'
                ]}
              />
            </NavLink>
          ))
        }
      </Nav>
    </Box>
  )
}

const Navigations = () => {
  return (
    <Box>
      <Nav
        vertical
        classes={[
          'footer__nav'
        ]}
      >
        {
          navigations && navigations.map((navigation, index) => (
            <NavLink
              key={index}
              path={`/${navigation.path}`}
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
      <Nav
        vertical
        classes={[
          'footer__nav'
        ]}
      >
        {
          services && services.map((service) => (
            <NavLink
              key={service.id}
              path={`/${service.path}`}
            >
              {service.name}
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
        as='h5'
        utilities={{
          mb: { _: 2 }
        }}
      >
        All secure payment methods
      </Heading>

      <ul
        className='footer__nav-payments'
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
    <Box
      utilities={{
        mt: { _: 2 }
      }}
    >
      <Box
        classes={[
          'form-group',
          'form-group--inline',
        ]}
        utilities={{
          w: { _: 100, sm: 75, xl: 50 },
          mb: { _: 2 }
        }}
      >
        <Textfield
          type='email'
          placeholder='example@mail.com'
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

      <Box
        classes={[
          'form-group',
          'form-group--check'
        ]}
      >
        <input
          type="checkbox"
          className='form-group__check-input form-group__check-input--checkbox'
        />

        <label
          className='form-group__check-label'
        >
          I have read the privacy policy and accept it.
        </label>
      </Box>
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
      <Container
        fluid
      >
        <Row
          utilities={{
            'row-gap': { _: 8 }
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
                w: { md: 75, lg: 100 }

              }}
            >
              ORDER YOUR TEAMS CUSTOM ESPORTS JERSEYS WITH
              RAVEN, DESIGN YOUR OWN ESPORTS APPAREL
              AND LAUNCH YOUR STORE TODAY.
            </Heading>
          </Column>

          <Column
            col={{ _: 12, md: 6 }}
            utilities={{
              pr: { xl: 8 }
            }}
          >
            <Newsletter />
          </Column>

          <Column
            col={{ _: 6, sm: 4, md: 3, lg: 2 }}
          >
            <Navigations />
          </Column>

          <Column
            col={{ _: 6, sm: 4, md: 3, lg: 2 }}
          >
            <Services />
          </Column>

          <Column
            col={{ _: 12, md: 6 }}
          >
            <Payments />
          </Column>

          <Column
            col={{ _: 12, md: 6 }}
          >
            <Socials />
          </Column>
        </Row>
      </Container>
    </Box>
  )
}

export default Top
