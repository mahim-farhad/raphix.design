import DynamicLink from '../../components/DynamicLink'
import Icon from '../../components/Icon'

function NavbarBrand() {
  return (
    <DynamicLink
      path='/'
      classes={[
        'navbar__brand'
      ]}
    >
      <Icon
        name='brand-white'
        classes={[
          'navbar__brand-icon'
        ]}
      />
    </DynamicLink>
  )
}

export default NavbarBrand
