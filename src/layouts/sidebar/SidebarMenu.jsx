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
    name: 'Designs',
    path: '/designs'
  },
  {
    id: 2,
    name: 'Collections',
    path: '/collections'
  },
  {
    id: 3,
    name: 'Esports',
    path: '/esports'
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
    name: 'twitter',
    icon: 'twitter',
    path: 'https://orcid.org/mohammadistiaquddin'
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
        as='h3'
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
        as='h3'
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
