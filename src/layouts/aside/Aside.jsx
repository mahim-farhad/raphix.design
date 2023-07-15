import classNames from 'classnames'

import About from './About'
import Categories from './Categories'
// import PopulerArticles from './PopulerArticles'

function Aside() {
  return (
    <aside
      className={classNames(
        'aside'
      )}
    >
      <About />

      <Categories />

      {/* <PopulerArticles /> */}
    </aside>
  )
}

export default Aside
