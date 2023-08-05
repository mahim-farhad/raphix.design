import Box from '../Box'

import NavbarMenu from './NavbarMenu'
import NavbarBrand from './NavbarBrand'

function Center() {
  return (
    <Box
      utilities={{
        d: { _: 'flex' },
        'align-items': { _: 'center' },
        'justify-content': { _: 'center', lg: 'start' }
      }}
    >
      <NavbarBrand />

      <NavbarMenu />
    </Box>
  )
}

export default Center
