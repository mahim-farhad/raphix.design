import {
  Heading,
  Span
} from '../components/Typography'
import Icon from '../components/Icon'
import DynamicLink from '../components/DynamicLink'
import Image from '../components/Image'

import Section from './Section'
import Container from './Container'
import {
  Row,
  Column
} from './Grid'

import BG from '../assets/images/bg-footer.jpg'

const socials = [
  {
    id: 1,
    path: 'https://discord.com',
    iconName: 'discord',
    name: 'Subscribe to Discord'
  },
  {
    id: 2,
    path: 'https://twitch.com',
    iconName: 'twitch',
    name: 'Watch on Twitch'
  },
  {
    id: 3,
    path: 'https://youtube.com',
    iconName: 'youtube',
    name: 'Watch on Youtube'
  },
  {
    id: 4,
    path: 'https://twitter.com',
    iconName: 'twitter',
    name: 'Follow on Twitter'
  }
]

function Social() {
  return (
    <Section
      classes={['section--mpl-social']}
    >
      <Container>
        <Row
          utilities={{
            'justify-content': { _: 'center' },
            'row-gap': { _: 6 }
          }}
        >
          {
            socials && socials.map((social, index) => (
              <Column
                key={index}
                col={{ _: 6, sm: 3 }}
                utilities={{
                  text: { _: 'center' }
                }}
              >
                <DynamicLink
                  path={`${social.path}`}
                  classes={[
                    'mpl-social'
                  ]}
                >
                  <Span
                    classes={[
                      'mpl-social__icon'
                    ]}
                  >
                    <Icon
                      name={social.iconName}
                    />
                  </Span>

                  <Heading
                    as='h6'
                    classes={[
                      'mpl-social__name'
                    ]}
                    utilities={{
                      tc: { _: 'light' }
                    }}
                  >
                    {social.name}
                  </Heading>
                </DynamicLink>
              </Column>
            ))
          }
        </Row>
      </Container>

      <Image
        src={BG}
        alt='bg'
        classes={[
          'section__bg'
        ]}
      />
    </Section >
  )
}

export default Social
