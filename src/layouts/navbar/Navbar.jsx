import {
  useState,
  useEffect
} from 'react'

import classNames from 'classnames'

import Container from '../Container'
import {
  Row,
  Column
} from '../Grid'

import Toggler from './Toggler'
import Center from './Center'
import Right from './Right'

function Navbar() {
  const [navbarSticky, setNavbarSticky] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY >= 60) {
          setNavbarSticky(true)
        } else {
          setNavbarSticky(false)
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
          ['navbar--sticky']: navbarSticky
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
            <Toggler />
          </Column>

          <Column
            col={{ _: 6, lg: 7, xl: 8 }}
          >
            <Center />
          </Column>

          <Column
            col={{ _: 3, lg: 5, xl: 4 }}
          >
            <Right />
          </Column>
        </Row>
      </Container>
    </nav>
  )
}

export default Navbar
