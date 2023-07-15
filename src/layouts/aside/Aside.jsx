import classNames from 'classnames'

import Categories from './Categories'

function Aside() {
  return (
    <aside
      className={classNames(
        'aside pr-8'
      )}
    >
      <Categories />
    </aside>
  )
}

export default Aside
