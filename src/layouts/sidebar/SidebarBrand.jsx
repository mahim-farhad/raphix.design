import DynamicLink from '../../components/DynamicLink'
import Icon from '../../components/Icon'

function SidebarBrand() {
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

export default SidebarBrand
