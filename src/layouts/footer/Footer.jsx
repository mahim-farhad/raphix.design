import classNames from 'classnames'

import Top from './Top'
import Bottom from './Bottom'
import Social from '../Social'

function Footer() {
  return (
    <footer
      className={classNames(
        'footer'
      )}
    >
      <Social />

      <Top />

      <Bottom />
    </footer>
  )
}

export default Footer
