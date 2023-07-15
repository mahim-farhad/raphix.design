import PropTypes from 'prop-types'

import {
  Heading
} from '../../Typography'
import DynamicLink from '../../DynamicLink'

import Box from '../../../layouts/Box'

function Body({
  title,
  slug,
  excerpt
}) {
  return (
    <Box
      classes={[
        'card__body'
      ]}
      utilities={{
        pb: { _: 0 },
        text: { _: 'center' }
      }}
    >
      <Heading
        as='h6'
        display
        classes={[
          'card__title'
        ]}
      >
        <DynamicLink
          path={`/blogs/${slug}`}
        >
          {title}
        </DynamicLink>
      </Heading>

      <Box
        classes={[
          'card__description'
        ]}
      >
        {excerpt}
      </Box>
    </Box>
  )
}

Body.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  excerpt: PropTypes.string
}

export default Body
