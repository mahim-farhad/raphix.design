import Icon from '../../components/Icon'
import Button from '../../components/Button'
import Textfield from '../../components/Textfield'

import Box from '../Box'

import Toggler from './Toggler'

function Right() {
  return (
    <Box
      utilities={{
        d: { _: 'flex' },
        'align-items': { _: 'center' },
        'justify-content': { _: 'end' }
      }}
    >
      <Box
        classes={[
          'form-group',
        ]}
        utilities={{
          flex: { _: 'fill' },
          d: { _: 'none', lg: 'block' },
          mr: { _: 2 }
        }}
      >
        <Textfield
          size='lg'
          type='text'
          prependIcon='search'
          placeholder='Search...'
        />
      </Box>

      <Button
        size='sm'
        variant='text'
        color='dark'
        iconOnly
      >
        <Icon
          name='cart'
          classes={[
            'btn__icon'
          ]}
          style={{
            transform: 'translate(-15%, -50%)'
          }}
        />
      </Button>

      <Toggler />
    </Box>
  )
}

export default Right
