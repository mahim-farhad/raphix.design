import {
  Heading,
  Span
} from '../../components/Typography'
import Icon from '../../components/Icon'
import Divider from '../../components/Divider'
import Nav from '../../components/nav/Nav'
import NavLink from '../../components/nav/NavLink'

const links = [
  {
    id: 1,
    name: 'About',
    path: '/'
  },
  {
    id: 2,
    name: 'CV',
    path: '/cv'
  },
  {
    id: 3,
    name: 'Publications',
    path: '/publications'
  },
  {
    id: 4,
    name: 'Repositories',
    path: '/repositories'
  }
]

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

function SidebarMenu() {
  return (
    <Nav
      classes={[
        'sidebar__menu'
      ]}
    >
      <Heading
        as='h6'
      >
        Menu
      </Heading>

      {
        links.map(({
          id,
          name,
          path
        }) => (
          <NavLink
            key={id}
            path={path}
            extended
          >
            <Span>
              {name[0]}
            </Span>

            {name}
          </NavLink>
        ))
      }

      <Divider
        utilities={{
          w: { _: 100 },
          my: { _: 6 }
        }}
      />

      <Heading
        as='h6'
        utilities={{
          mt: { _: 3 }
        }}
      >
        Social Media
      </Heading>

      {
        socialLinks.map(({
          id,
          name,
          icon,
          path
        }) => (
          <NavLink
            key={id}
            path={path}
            extended
          >
            <Icon
              name={icon}
              classes={[
                'nav__icon'
              ]}
            />

            {name}
          </NavLink>
        ))
      }
    </Nav>
  )
}

export default SidebarMenu
