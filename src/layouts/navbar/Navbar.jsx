import PropTypes from 'prop-types'

import classNames from 'classnames'

import Divider from '../../components/Divider'

import Container from '../Container'

import NavbarBrand from './NavbarBrand'
import NavbarMenu from './NavbarMenu'
import NavbarMenuRight from './NavbarMenuRight'
import NavbarToggler from './NavbarToggler'

function Navbar({
  expand,
  sidebarSlide,
  setSidebarSlide
}) {
  return (
    <nav
      className={classNames(
        'navbar',
        { [`navbar--expand-${expand}`]: expand }
      )}
    >
      <Container fluid>
        <NavbarBrand />

        <Divider
          utilities={{
            w: { _: '100px' },
            bg: { _: 'light' }
          }}
        />

        <NavbarMenu />

        <NavbarMenuRight />

        <NavbarToggler
          sidebarSlide={sidebarSlide}
          setSidebarSlide={setSidebarSlide}
        />
      </Container>
    </nav>
  )
}

Navbar.defaultProps = {
  expand: 'xl'
}

Navbar.propTypes = {
  expand: PropTypes.oneOf([
    'sm',
    'md',
    'lg',
    'xl'
  ]),
  sidebarSlide: PropTypes.bool,
  setSidebarSlide: PropTypes.func
}

export default Navbar
