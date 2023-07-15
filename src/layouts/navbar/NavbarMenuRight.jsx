import Icon from '../../components/Icon'
import Nav from '../../components/nav/Nav'
import NavLink from '../../components/nav/NavLink'
// import Button from '../../components/Button'

const links = [
  {
    id: 1,
    path: '/',
    iconName: 'search'
  },
  {
    id: 1,
    path: '/',
    iconName: 'cart'
  },
  {
    id: 2,
    path: '/',
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

      {/* <Button
        // onClick={() => {}}
        size='sm'
        variant='text'
        color='light'
        iconOnly
        utilities={{
          ml: { _: 3 },
          text: { _: 'end' }
        }}
      >
        <Icon
          name='sun'
        />
      </Button> */}
    </Nav>
  )
}

export default NavbarMenuRight
