import Nav from '../../components/nav/Nav'
import NavLink from '../../components/nav/NavLink'

const links = [
  {
    name: 'Collections',
    path: '/collections'
  },
  {
    name: 'Resources',
    path: '/resources'
  },
  {
    name: 'eSports Teams',
    path: '/eSports-teams'
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
