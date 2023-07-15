import Nav from '../../components/nav/Nav'
import NavLink from '../../components/nav/NavLink'

const links = [
  {
    name: 'Designs',
    path: '/designs'
  },
  {
    name: 'Collections',
    path: '/collections'
  },
  {
    name: 'eSports',
    path: '/esports'
  }
]

function NavbarMenu() {
  return (
    <Nav
      classes={[
        'navbar__menu'
      ]}
    >
      {
        links.map(({
          name,
          path
        }) => (
          <NavLink
            key={name}
            path={path}
          >
            {name}
          </NavLink>
        ))
      }
    </Nav>
  )
}

export default NavbarMenu
