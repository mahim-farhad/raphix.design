import PropTypes from 'prop-types'

import {
  Swiper,
  SwiperSlide
} from 'swiper/react'

import {
  FreeMode
} from 'swiper/modules'

import 'swiper/css'

import {
  Span
} from '../../components/Typography'
import DynamicLink from '../../components/DynamicLink'
import Icon from '../../components/Icon'
import Image from '../../components/Image'

function ProductGallery({
  gallery,
  setGallerySlider,
  setInitialSlideNumber
}) {
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={12}
      freeMode={true}
      speed={1000}
      modules={[
        FreeMode
      ]}
      className='collection__gallery'
    >
      {
        gallery && gallery.map((gallery, index) => {
          return (
            <SwiperSlide
              key={gallery.id}
            >
              {
                <DynamicLink
                  onClick={() => {
                    setGallerySlider(true)

                    setInitialSlideNumber(index)

                    document.body.style.width = '100%'
                    document.body.style.position = 'absolute'
                    document.body.style.overflow = 'hidden'
                  }}
                  classes={[
                    'collection__gallery-item'
                  ]}
                >
                  <Span
                    classes={[
                      'collection__gallery-image'
                    ]}
                  >
                    <Image
                      src={`${gallery.attributes.url}`}
                      alt=''
                    />
                  </Span>

                  <Icon
                    name='expand'
                  />
                </DynamicLink>
              }
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

ProductGallery.propTypes = {
  gallery: PropTypes.array,
  gallerySlider: PropTypes.bool,
  setGallerySlider: PropTypes.func,
  setInitialSlideNumber: PropTypes.num
}

export default ProductGallery
