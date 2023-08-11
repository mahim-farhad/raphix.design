import Box from '../Box'

import NavbarMenu from './NavbarMenu'
import NavbarBrand from './NavbarBrand'

function Center() {
  return (
    <Box
      utilities={{
        d: { _: 'flex' },
        'align-items': { _: 'center' }
      }}
    >
      <NavbarBrand />

      <NavbarMenu />
    </Box>
  )
}

export default Center
