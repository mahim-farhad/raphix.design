import Icon from '../../components/Icon'
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

function SidebarMenu() {
  return (
    <Nav
      classes={[
        'sidebar__menu'
      ]}
    >
      {
        links.map(({
          id,
          name,
          path
        }) => (
          <>
            <NavLink
              key={id}
              path={path}
              extended
              utilities={{
                'justify-content': { _: 'between' }
              }}
            >
              {name}

              <Icon
                name='chevron-down'
              />
            </NavLink>
          </>
        ))
      }
    </Nav>
  )
}

export default SidebarMenu
