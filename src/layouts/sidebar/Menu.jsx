import useFetch from '../../hooks/useFetch'

import {
  Heading
} from '../../components/Typography'
import Icon from '../../components/Icon'
import Divider from '../../components/Divider'
import Nav from '../../components/nav/Nav'
import NavLink from '../../components/nav/NavLink'
import SkeletonBar from '../../components/SkeletonBar'

const links = [
  {
    id: 1,
    name: 'Collections',
    path: '/collections'
  },
  {
    id: 2,
    name: 'Esports Team',
    path: '/esports-team'
  },
  {
    id: 3,
    name: 'Contact Information',
    path: '/esports'
  },
  {
    id: 4,
    name: 'Wishlist',
    iconName: 'heart',
    path: '/wishlist'
  },
  {
    id: 5,
    name: 'Login/Register',
    iconName: 'user',
    path: '/login'
  }
]

function Menu() {
  const {
    data,
    loading
  } = useFetch('categories?populate=*')

  return (
    <>
      <Nav
        classes={[
          'sidebar__menu'
        ]}
      >
        <Heading
          as='h4'
          utilities={{
            mb: { _: 2 }
          }}
        >
          Categories
        </Heading>
        {
          loading
            ?
            <>
              <NavLink >
                <SkeletonBar />
              </NavLink>

              <NavLink >
                <SkeletonBar />
              </NavLink>

              <NavLink >
                <SkeletonBar />
              </NavLink>
            </>
            :
            data && data.map((category) => (
              <>
                <NavLink
                  key={category.id}
                  path={category.attributes.type}
                  extended
                >
                  {category.attributes.type}
                </NavLink>
              </>
            ))
        }
      </Nav>

      <Divider />

      <Nav
        classes={[
          'sidebar__menu'
        ]}
      >
        <Heading
          as='h4'
          utilities={{
            mb: { _: 2 }
          }}
        >
          Menu
        </Heading>
        {
          links.map(({
            id,
            name,
            iconName,
            path
          }) => (
            <>
              <NavLink
                key={id}
                path={path}
                extended
              >
                {
                  iconName &&
                  <Icon
                    name={iconName}
                  />
                }
                {name}
              </NavLink>
            </>
          ))
        }
      </Nav>
    </>
  )
}

export default Menu
