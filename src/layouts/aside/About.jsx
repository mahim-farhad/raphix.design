import useFetch from '../../hooks/useFetch'

import {
  Heading
} from '../../components/Typography'
import Icon from '../../components/Icon'
import DynamicLink from '../../components/DynamicLink'
import Nav from '../../components/nav/Nav'
import NavLink from '../../components/nav/NavLink'
import SkeletonBar from '../../components/SkeletonBar'

import Section from '../Section'
import Box from '../Box'

const socialLinks = [
  {
    name: 'facebook',
    icon: 'facebook',
    path: 'https://www.facebook.com/mohammadistiaquddin0'
  },
  {
    name: 'linked in',
    icon: 'linked-in',
    path: 'https://www.linkedin.com/mohammadistiaquddin'
  },
  {
    name: 'orcid',
    icon: 'orcid',
    path: 'https://orcid.org/mohammadistiaquddin'
  },
  {
    name: 'research gate',
    icon: 'research-gate',
    path: 'https://www.researchgate.net/mohammadistiaquddin'
  },
  {
    name: 'github',
    icon: 'github',
    path: 'https://www.github.com/mohammadistiaquddin'
  }
]

function About() {
  const {
    data,
    loading
  } = useFetch('about')

  return (
    <Section
      utilities={{
        pb: { _: 6 }
      }}
    >
      <Heading
        as='h6'
        classes={[
          'section__title'
        ]}
        utilities={{
          mb: { _: 8 }
        }}
      >
        Contact
      </Heading>

      <Box>
        <DynamicLink
          utilities={{
            d: { _: 'block' },
            mb: { _: 0 }
          }}
        >
          {
            loading
              ? (
                <>
                  <SkeletonBar />

                  <Box
                    classes={[
                      'skeleton'
                    ]}
                    utilities={{
                      w: { _: 50 },
                      mt: { _: 2 }
                    }}
                  />
                </>
              )
              : data && data.attributes.address
          }
        </DynamicLink>

        <Box
          utilities={{
            d: { _: 'flex' },
            'align-items': { _: 'center' },
            gap: { _: 5 },
            flex: { _: 'nowrap' },
            py: { _: 6 }
          }}
        >
          <Icon
            name='at'
          />

          {
            loading
              ? <SkeletonBar />
              : (
                <Box>
                  <DynamicLink
                    path={data && `mailto:${data.attributes.email}`}
                    utilities={{
                      d: { _: 'block' },
                      mb: { _: 0 }
                    }}
                  >
                    {data && data.attributes.email}
                  </DynamicLink>
                </Box>
              )
          }
        </Box>

        <Box
          utilities={{
            d: { _: 'flex' },
            'align-items': { _: 'center' },
            gap: { _: 5 },
            flex: { _: 'nowrap' },
            pb: { _: 2 }
          }}
        >
          <Icon
            name='phone-call'
          />

          {
            loading
              ? <SkeletonBar />
              : (
                <Box>
                  <DynamicLink
                    path={`tel:${data && data.attributes.phone}`}
                    utilities={{
                      d: { _: 'block' },
                      mb: { _: 0 }
                    }}
                  >
                    {data && data.attributes.phone}
                  </DynamicLink>
                </Box>
              )
          }
        </Box>

        <Nav>
          {socialLinks.map(({
            id,
            name,
            icon,
            path
          }) => (
            <NavLink
              key={id}
              path={path}
              extended
              utilities={{
                w: { _: 100 },
                pl: { _: 0 }
              }}
            >
              <Icon
                name={icon}
                classes={[
                  'nav__icon'
                ]}
              />

              {name}
            </NavLink>
          ))}
        </Nav>
      </Box>
    </Section>
  )
}

export default About
