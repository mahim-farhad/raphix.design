import PropTypes from 'prop-types'

import classNames from 'classnames'

import Container from '../Container'

import NavbarToggler from './NavbarToggler'
import NavbarBrand from './NavbarBrand'
import NavbarMenu from './NavbarMenu'
import NavbarMenuRight from './NavbarMenuRight'

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
        <NavbarToggler
          sidebarSlide={sidebarSlide}
          setSidebarSlide={setSidebarSlide}
        />

        <NavbarBrand />

        <NavbarMenu />

        <NavbarMenuRight />
      </Container>
    </nav>
  )
}

Navbar.defaultProps = {
  expand: 'md'
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
