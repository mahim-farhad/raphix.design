import PropTypes from 'prop-types'

import DynamicLink from '../../DynamicLink'
import {
  Heading
} from '../../Typography'
import Image from '../../Image'
import Box from '../../Box'

function CollectionCard({
  title,
  slug,
  thumbnail
}) {
  return (
    <Box
      classes={[
        'design-thumbnail'
      ]}
    >
      <figure className='design-thumbnail__placeholder'>
        <Image
          src={thumbnail}
          alt={title}
          className='design-thumbnail__placeholder-img'
          loading='lazy'
        />
      </figure>

      <DynamicLink
        path={`/collections/${slug}`}
        className='design-thumbnail__link'
      >
        {title}
      </DynamicLink>

      <Box
        classes={[
          'design-thumbnail__overlay'
        ]}
      >
        <Box
          classes={[
            'design-thumbnail__content'
          ]}
        >
          <Heading
            as='h4'
            classes={['design-thumbnail__title']}
            utilities={{
              w: { _: 75 },
              mb: { _: 0 },
            }}
          >
            {title}
          </Heading>
        </Box>
      </Box>
    </Box>
  )
}

CollectionCard.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  thumbnail: PropTypes.url
}

export default CollectionCard
