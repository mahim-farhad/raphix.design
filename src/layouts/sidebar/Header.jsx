import Box from '../Box'

import Brand from './Brand'
import Toggler from './Toggler'

function Header() {
  return (
    <Box
      classes={[
        'sidebar__header'
      ]}
    >
      <Brand />

      <Toggler />
    </Box>
  )
}

export default Header
