import PropTypes from 'prop-types'

import Box from '../Box'

import SidebarBrand from './SidebarBrand'
import Toggler from './Toggler'

function Header({
  sidebarSlide,
  setSidebarSlide
}) {
  return (
    <Box
      classes={[
        'sidebar__header'
      ]}
    >
      <SidebarBrand />

      <Toggler
        sidebarSlide={sidebarSlide}
        setSidebarSlide={setSidebarSlide}
      />
    </Box>
  )
}

Header.propTypes = {
  sidebarSlide: PropTypes.bool,
  setSidebarSlide: PropTypes.func
}

export default Header
