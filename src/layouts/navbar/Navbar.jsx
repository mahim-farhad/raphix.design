import {
  useState,
  useEffect
} from 'react'

import PropTypes from 'prop-types'

import classNames from 'classnames'

import Container from '../Container'
import {
  Row,
  Column
} from '../Grid'
import Box from '../Box'

import NavbarToggler from './NavbarToggler'
import NavbarBrand from './NavbarBrand'
import NavbarMenu from './NavbarMenu'
import NavbarMenuRight from './NavbarMenuRight'

function Navbar({
  sidebarSlide,
  setSidebarSlide
}) {
  const [navbarFixed, setNavbarFixed] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY >= 70) {
          setNavbarFixed(true)
        } else {
          setNavbarFixed(false)
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [])

  return (
    <nav
      className={classNames(
        'navbar',
        {
          ['navbar--sticky']: navbarFixed
        }
      )}
    >
      <Container
        fluid
      >
        <Row
          utilities={{
            'align-items': { _: 'center' }
          }}
        >
          <Column
            col={{ _: 3, lg: 0 }}
            utilities={{
              d: { lg: 'none' }
            }}
          >
            <NavbarToggler
              sidebarSlide={sidebarSlide}
              setSidebarSlide={setSidebarSlide}
            />
          </Column>

          <Column
            col={{ _: 6, lg: 7, xl: 8 }}
          >
            <Box
              utilities={{
                d: { _: 'flex' },
                'align-items': { _: 'center' },
                'justify-content': { _: 'center', lg: 'start' }
              }}
            >
              <NavbarBrand />

              <NavbarMenu />
            </Box>
          </Column>

          <Column
            col={{ _: 3, lg: 5, xl: 4 }}
          >
            <NavbarMenuRight />
          </Column>
        </Row>
      </Container>
    </nav>
  )
}

// Navbar.defaultProps = {}

Navbar.propTypes = {
  sidebarSlide: PropTypes.bool,
  setSidebarSlide: PropTypes.func
}

export default Navbar
