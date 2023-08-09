import DynamicLink from '../../components/DynamicLink'
// import Icon from '../../components/Icon'

function NavbarBrand() {
  return (
    <DynamicLink
      path='/'
      classes={[
        'navbar__brand'
      ]}
    >
      {/* <Icon
        name='brand'
        classes={[
          'navbar__brand-icon'
        ]}
      /> */}

      Raphix Design
    </DynamicLink>
  )
}

export default NavbarBrand
