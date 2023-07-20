import PropTypes from 'prop-types'

import {
  Heading,
  Span
} from '../../components/Typography'

import Box from '../../layouts/Box'

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
          mb: { _: 0 }
        }}
      >
        <Span>$</Span>60.00
      </Heading>
    </Box>
  )
}

ProductInfo.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
}

export default ProductInfo
