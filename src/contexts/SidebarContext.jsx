import {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext
} from 'react'

import PropTypes from 'prop-types'

const SidebarContext = createContext()

export const SidebarSlider = () => {
  return useContext(SidebarContext)
}

const SidebarProvider = ({ children }) => {
  const [sidebarSlide, setSidebarSlide] = useState(null)

  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSidebarSlide(false)

        document.body.style.width = ''
        document.body.style.position = ''
        document.body.style.overflow = ''
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const value = {
    wrapperRef,
    sidebarSlide,
    setSidebarSlide
  }

  return (
    <SidebarContext.Provider
      value={value}
    >
      {children}
    </SidebarContext.Provider>
  )
}

SidebarProvider.propTypes = {
  children: PropTypes.node
}

export default SidebarProvider
