import classNames from 'classnames'

import {
  SidebarSlider
} from '../../contexts/SidebarContext'

import Divider from '../../components/Divider'
import Textfield from '../../components/Textfield'

import Box from '../Box'
import Backdrop from '../Backdrop'

import Header from './Header'
import Menu from './Menu'

function Sidebar() {
  const {
    wrapperRef,
    sidebarSlide
  } = SidebarSlider()

  return (
    <Box
      classes={[
        'sidebar-wrapper',
        `${sidebarSlide ? 'show' : ''}`
      ]}
    >
      <Backdrop />

      <aside
        ref={wrapperRef}
        className={classNames(
          'sidebar'
        )}
      >
        <Header />

        <Divider />

        <Box
          classes={[
            'form-group',
          ]}
        >
          <Textfield
            type='text'
            appendIcon='search'
            placeholder='Search...'
          />
        </Box>

        <Divider />

        <Menu />
      </aside>
    </Box>
  )
}

export default Sidebar
