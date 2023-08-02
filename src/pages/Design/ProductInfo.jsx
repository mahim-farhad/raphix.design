import PropTypes from 'prop-types'

import {
  Heading,
  Paragraph,
  Span
} from '../../components/Typography'

import Icon from '../../components/Icon'
import Button from '../../components/Button'
import Textfield from '../../components/Textfield'
import Box from '../../layouts/Box'
import Divider from '../../components/Divider'

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
        as='h2'
        utilities={{
          mb: { _: 2 }
        }}
      >
        {category.toUpperCase()}
      </Heading>

      <Heading
        as='h1'
        utilities={{
          mb: { _: 6 }
        }}
      >
        {title}
      </Heading>

      <Heading
        as='h2'
        utilities={{
          mb: { _: 6 }
        }}
      >
        <Span>$</Span>60.00
      </Heading>

      <Paragraph
        utilities={{
          mb: { _: 6 }
        }}
      >
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Nemo veritatis dolorum voluptates recusandae,
        consectetur, delectus perferendis voluptatibus
        atque illum beatae non voluptatum!
        Earum reprehenderit natus, at facere
        explicabo voluptates voluptate.
      </Paragraph>

      <Textfield
        placeholder='Team Slogan'
      />

      <Divider
        utilities={{
          mb: { _: 3 }
        }}
      />

      <Textfield
        placeholder='Team Name'
      />

      <Divider
        utilities={{
          mb: { _: 3 }
        }}
      />

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
          extended
        >
          <Icon
            name='cart'
          />
          Add to Cart
        </Button>

        <Button
          variant='outline'
        >
          Contact for Customization
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
