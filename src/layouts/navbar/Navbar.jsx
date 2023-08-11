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

import Left from './Left'
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
            'align-items': { _: 'center' },
          }}
        >
          <Column
            col={{ _: 6, md: 8 }}
          >
            <Left />
          </Column>

          <Column
            col={{ _: 6, md: 4 }}
          >
            <Right />
          </Column>
        </Row>
      </Container>
    </nav>
  )
}

export default Navbar
