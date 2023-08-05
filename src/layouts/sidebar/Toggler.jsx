import PropTypes from 'prop-types'

import {
  Span
} from '../../components/Typography'
import Button from '../../components/Button'

const MenuIcon = () => {
  return (
    <Span
      classes={[
        'menu-icon'
      ]}
      utilities={{
        mr: { _: 0 },
        ml: { _: 'auto' }
      }}
    >
      <Span
        classes={[
          'menu-icon__bar',
          'bar-1'
        ]}
      />
      <Span
        classes={[
          'menu-icon__bar',
          'bar-2'
        ]}
      />
      <Span
        classes={[
          'menu-icon__bar',
          'bar-3'
        ]}
      />
    </Span>
  )
}

function Toggler({
  sidebarSlide,
  setSidebarSlide
}) {
  return (
    <Button
      onClick={() => {
        setSidebarSlide(false)

        document.body.style.width = ''
        document.body.style.position = ''
        document.body.style.overflow = ''
      }}
      size='sm'
      variant='text'
      color='dark'
      iconOnly
      classes={[
        `navbar__toggler${sidebarSlide ? ' active' : ''}`
      ]}
    >
      <MenuIcon />
    </Button>
  )
}

Toggler.propTypes = {
  sidebarSlide: PropTypes.bool,
  setSidebarSlide: PropTypes.func
}

export default Toggler
