import PropTypes from 'prop-types'

import {
  Heading,
  Span
} from '../../components/Typography'

import Box from '../../layouts/Box'
import Button from '../../components/Button'
import Icon from '../../components/Icon'

function ProductInfo({
  title,
  category
}) {
  return (
    <Box
      classes={[
        'collection__info'
      ]}
    >
      <Heading
        as='h6'
        utilities={{
          mb: { _: 2 }
        }}
      >
        {category.toUpperCase()}
      </Heading>

      <Heading
        as='h4'
        utilities={{
          mb: { _: 6 }
        }}
      >
        {title}
      </Heading>

      <Heading
        as='h5'
        utilities={{
          mb: { _: 8 }
        }}
      >
        <Span>$</Span>60.00
      </Heading>

      <Box
        classes={[
          'btn-group',
        ]}
        utilities={{
          d: { _: 'flex' },
          'flex': { _: 'wrap' },
          mb: { _: 3 }
        }}
      >
        <Button
          size='lg'
          extended
        >
          <Icon
            name='cart'
          />
          Add to Cart
        </Button>

        <Button
          size='lg'
          variant='outline'
        >
          Contact for Customization
        </Button>
      </Box>

      <Box
        classes={[
          'btn-group'
        ]}
        utilities={{
          d: { _: 'flex' }
        }}
      >
        <Button
          size='sm'
          color='light'
          extended
          utilities={{
            w: { _: '100' },
            h: { _: 'auto' },
            'flex-direction': { _: 'column' },
            gap: { _: 2 },
            py: { _: 6 }
          }}
          style={{
            whiteSpace: 'normal'
          }}
        >
          <Icon
            name='heart'
            classes={[
              'icon--lg'
            ]}
          />

          Collecton
        </Button>

        <Button
          size='sm'
          color='light'
          extended
          utilities={{
            w: { _: '100' },
            h: { _: 'auto' },
            'flex-direction': { _: 'column' },
            gap: { _: 2 },
            py: { _: 6 }
          }}
          style={{
            whiteSpace: 'normal'
          }}
        >
          <Icon
            name='heart'
            classes={[
              'icon--lg'
            ]}
          />

          Favourite
        </Button>

        <Button
          size='sm'
          color='light'
          extended
          utilities={{
            w: { _: '100' },
            h: { _: 'auto' },
            'flex-direction': { _: 'column' },
            gap: { _: 2 },
            py: { _: 6 }
          }}
          style={{
            whiteSpace: 'normal'
          }}
        >
          <Icon
            name='heart'
            classes={[
              'icon--lg'
            ]}
          />

          Share
        </Button>
      </Box>
    </Box>
  )
}

ProductInfo.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
}

export default ProductInfo
