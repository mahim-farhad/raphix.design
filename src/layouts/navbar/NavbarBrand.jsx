import Icon from '../../components/Icon'
import DynamicLink from '../../components/DynamicLink'

function NavbarBrand() {
  return (
    <DynamicLink
      path='/'
      classes={[
        'navbar__brand'
      ]}
    >
      <Icon
        name='brand'
        classes={[
          'navbar__brand-icon'
        ]}
      />
    </DynamicLink>
  )
}

export default NavbarBrand
