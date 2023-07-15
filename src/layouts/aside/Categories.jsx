import {
  Heading
} from '../../components/Typography'
import Nav from '../../components/nav/Nav'

import Section from '../Section'
import Box from '../Box'
import { NavLink } from 'react-router-dom'

const categories = [
  {
    type: 'Jersey',
  },
  {
    type: 'Banner',
  },
  {
    type: 'Hoodies',
  },
  {
    type: 'Sleeves',
  }
]

function Categories() {
  return (
    <Section
      utilities={{
        pt: { _: 2 }
      }}
    >
      <Heading
        as='h6'
        classes={[
          'section__title'
        ]}
        utilities={{
          mb: { _: 6 }
        }}
      >
        Apparel Type
      </Heading>

      <Nav
        utilities={{
          gap: { _: 4 },
          pt: { _: 1 }
        }}
      >
        {
          categories && categories.map((category) => {
            return (
              <li
                key={category.id}
                className='w-100'
              >
                <NavLink
                  to={`/categories/${category.type}`}
                  className={[
                    'd-block'
                  ]}
                >
                  {category.type}
                </NavLink>
              </li>
            )
          })
        }
      </Nav>
    </Section>
  )
}

export default Categories
