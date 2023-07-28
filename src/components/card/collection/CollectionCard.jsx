import {
  Link
} from 'react-router-dom'

import {
  Heading,
  Span
} from '../../Typography'

function CollectionCard({
  image
}) {
  return (
    <div className='design-thumbnail'>
      <figure className='design-thumbnail__placeholder'>
        <img
          src={image}
          // alt={design.title}
          className='design-thumbnail__placeholder-img'
          loading='lazy'
        />
      </figure>

      <Link
        // to={`/designs/${design.slug}`}
        className='design-thumbnail__link'
      >
        {/* <Span>{design.title}</Span> */}
      </Link>

      <div className='design-thumbnail__overlay'>
        <div className='design-thumbnail__content'>
          <Heading
            as='h6'
            classes={['design-thumbnail__title']}
            utilities={{
              w: { _: 75 },
              mb: { _: 0 },
            }}
          >
            {/* {design.title} */}
          </Heading>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard
