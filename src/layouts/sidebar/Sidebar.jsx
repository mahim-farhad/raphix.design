import {
  useEffect,
  useRef
} from 'react'

import PropTypes from 'prop-types'

import classNames from 'classnames'

import Divider from '../../components/Divider'
import Textfield from '../../components/Textfield'

import Box from '../Box'
import Backdrop from '../Backdrop'

import Header from './Header'
import SidebarMenu from './SidebarMenu'

function useOutsideClick(
  ref,
  modal,
  setModal
) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setModal(false)

        document.body.style.width = ''
        document.body.style.position = ''
        document.body.style.overflow = ''
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [
    ref,
    modal,
    setModal
  ])
}

function Sidebar({
  sidebarSlide,
  setSidebarSlide
}) {
  const wrapperRef = useRef(null)

  useOutsideClick(wrapperRef, sidebarSlide, setSidebarSlide)

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
        <Header
          sidebarSlide={sidebarSlide}
          setSidebarSlide={setSidebarSlide}
        />

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

        <SidebarMenu />
      </aside>
    </Box>
  )
}

Sidebar.propTypes = {
  sidebarSlide: PropTypes.bool,
  setSidebarSlide: PropTypes.func
}

export default Sidebar
