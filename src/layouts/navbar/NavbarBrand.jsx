import Box from '../../layouts/Box'

import {
  AnchorTag,
  Small
} from '../../components/Typography'
import Icon from '../../components/Icon'

function NavbarBrand() {
  return (
    <AnchorTag
      path='https://mistiaq.github.io'
      classes={[
        'navbar__brand'
      ]}
    >
      <Box
        classes={[
          'navbar__brand-text'
        ]}
      >
        Raphix Design <br />
      </Box>

      <Small
        utilities={{
          d: { _: 'none', sm: 'block' }
        }}
      >
        Esports Graphics Designer
      </Small>
    </AnchorTag>
  )
}

export default NavbarBrand
