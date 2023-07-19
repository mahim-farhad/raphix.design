import {
  useState,
  useRef,
  useEffect
} from 'react'

import PropTypes from 'prop-types'

import classNames from 'classnames'

import {
  motion
} from 'framer-motion'

import Icon from './Icon'
import Button from './Button'

const useOutsideClick = (
  ref,
  modal,
  setModal
) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setModal(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, modal, setModal])
}

function Dropdown({
  dropdownItem,
  text,
  right
}) {
  const [dropdown, setDropdown] = useState(false)

  const wrapperRef = useRef(null)

  useOutsideClick(wrapperRef, dropdown, setDropdown);

  return (
    <motion.nav
      ref={wrapperRef}
      initial={false}
      animate={
        dropdown ? 'open' : 'closed'
      }
      className='dropdown'
    >
      <Button
        onClick={() => setDropdown(!dropdown)}
        size='sm'
        variant='tonal'
        color='dark'
        extended
        classes={[
          'dropdown__toggle'
        ]}
        utilities={{
          w: { _: 100, md: 'auto' }
        }}
      >
        {text}

        <motion.span
          variants={{
            open: { rotate: -180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          className='dropdown__toggle-icon'
        >
          <Icon
            name='chevron-down'
          />
        </motion.span>
      </Button>

      <ul
        className={classNames(
          'dropdown__menu',
          'top-100',
          { [`dropdown__menu--show`]: dropdown },
          { [`dropdown__menu--right`]: right },
        )}
        style={{
          pointerEvents: dropdown ? 'auto' : 'none'
        }}
      >
        {dropdownItem}
      </ul>
    </motion.nav >
  )
}

Dropdown.propTypes = {
  dropdownItem: PropTypes.node,
  text: PropTypes.string,
  right: PropTypes.bool
}

export default Dropdown
