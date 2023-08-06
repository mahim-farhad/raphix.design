import DynamicLink from '../../components/DynamicLink'

function Brand() {
  return (
    <DynamicLink
      path='/'
      classes={[
        'sidebar__brand'
      ]}
    >
      RAPHIX DESIGN
    </DynamicLink>
  )
}

export default Brand
