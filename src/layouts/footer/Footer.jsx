import classNames from 'classnames'

import Divider from '../../components/Divider'

import Top from './Top'
import Bottom from './Bottom'

function Footer() {
  return (
    <footer
      className={classNames(
        'footer'
      )}
    >
      <Top />

      <Divider />

      <Bottom />
    </footer>
  )
}

export default Footer
