import Icon from '../../components/Icon'
import Nav from '../../components/nav/Nav'
import NavLink from '../../components/nav/NavLink'

const links = [
  {
    id: 1,
    path: '/',
    iconName: 'search'
  },
  {
    id: 2,
    path: '/cart',
    iconName: 'cart'
  },
  {
    id: 3,
    path: '/user',
    iconName: 'user'
  }
]

function NavbarMenuRight() {
  return (
    <Nav
      classes={[
        'navbar__menu',
        'navbar__menu--right',
      ]}
    >
      {
        links.map(({
          id,
          path,
          iconName
        }) => (
          <NavLink
            key={id}
            path={path}
            utilities={{
              pr: { _: 0 }
            }}
          >
            <Icon
              name={iconName}
            />
          </NavLink>
        ))
      }
    </Nav>
  )
}

export default NavbarMenuRight
