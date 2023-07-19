import {
  Paragraph
} from '../../components/Typography'
import Icon from '../../components/Icon'
import DynamicLink from '../../components/DynamicLink'
import Button from '../../components/Button'
import Dropdown from '../../components/Dropdown'

import Box from '../../layouts/Box'

const categories = [
  {
    type: 'Jersey'
  },
  {
    type: 'Banner'
  },
  {
    type: 'Hoodies'
  },
  {
    type: 'Logos'
  }
]

function Filters() {
  return (
    <Box
      classes={[
        'filter'
      ]}
    >
      <Dropdown
        text={'Sort By'}
        dropdownItem={
          categories && categories.map((category) => {
            return (
              <li
                key={category.id}
                className='w-100 py-3 px-6'
              >
                <Box
                  classes={[
                    'form-group',
                    'form-group--check'
                  ]}
                >
                  <input
                    type="checkbox"
                    name={category.type}
                    id={category.type}
                    className='form-group__check-input form-group__check-input--checkbox'
                  />

                  <label
                    htmlFor={category.type}
                    className='form-group__check-label'
                  >
                    {category.type}
                  </label>
                </Box>
              </li>
            )
          })
        }
      />

      <Dropdown
        text={'Apparel Type'}
        dropdownItem={
          categories && categories.map((category) => {
            return (
              <li
                key={category.id}
                className='w-100 py-3 px-6'
              >
                <Box
                  classes={[
                    'form-group',
                    'form-group--check'
                  ]}
                >
                  <input
                    type="checkbox"
                    name={category.type}
                    id={category.type}
                    className='form-group__check-input form-group__check-input--checkbox'
                  />

                  <label
                    htmlFor={category.type}
                    className='form-group__check-label'
                  >
                    {category.type}
                  </label>
                </Box>
              </li>
            )
          })
        }
      />

      <Paragraph
        utilities={{
          mr: { _: 'auto', md: 0 },
          ml: { _: 'auto' }
        }}
      >
        Showing 1-4 of 40 results
      </Paragraph>

      <Box
        utilities={{
          d: { _: 'flex' },
          gap: { _: 6 },
          'align-items': { _: 'center' }
        }}
      >
        <Button
          size='sm'
          color='light'
          extended
          utilities={{
            w: { _: 50, md: 'auto' },
            d: { md: 'none' },
            mr: { _: 'auto' },
            rounded: { _: 0 }
          }}
        >
          <Icon
            name='filters'
            classes={[
              'btn__icon'
            ]}
          />

          Filter
        </Button>

        <DynamicLink
          path='/ekommart/shop/?layout=list'
        >
          <Icon
            name='list'
            classes={[
              'opacity-5'
            ]}
          />
        </DynamicLink>

        <DynamicLink
          path='/ekommart/shop/?layout=grid'
        >
          <Icon
            name='grid'
            classes={[
              'opacity-5'
            ]}
          />
        </DynamicLink>
      </Box>
    </Box >
  )
}

export default Filters
