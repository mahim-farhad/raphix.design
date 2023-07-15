import PropTypes from 'prop-types'

import classNames from 'classnames'

import Box from '../../../layouts/Box'

import Thumbnail from './Thumbnail'
import Body from './Body'
// import Footer from './Footer'

function ArticleCard({
  key,
  title,
  slug,
  excerpt,
  thumbnail,
  // uploadedAt
}) {
  return (
    <article
      key={key}
      className={classNames(
        'card',
        'card--article'
      )}
    >
      <Thumbnail
        title={title}
        slug={slug}
        thumbnail={thumbnail}
      />

      <Box
        classes={[
          'card__content'
        ]}
      >
        <Body
          title={title}
          slug={slug}
          excerpt={excerpt}
        />

        {/* <Footer
          uploadedAt={uploadedAt}
        /> */}
      </Box>
    </article>
  )
}

ArticleCard.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  excerpt: PropTypes.string,
  thumbnail: PropTypes.url,
  uploadedAt: PropTypes.string
}

export default ArticleCard
