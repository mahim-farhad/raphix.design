import PropTypes from 'prop-types'

import {
  Swiper,
  SwiperSlide
} from 'swiper/react'

import {
  EffectFade,
  Navigation
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'

import {
  Span
} from '../../components/Typography'
import Image from '../../components/Image'
import Button from '../../components/Button'

import Box from '../../layouts/Box'
import Icon from '../../components/Icon'

function GallerySlider({
  gallerySlider,
  gallery,
  initialSlideNumber
}) {
  return (
    <Box
      classes={[
        'gallery-slider',
        gallerySlider && 'gallery-slider--show'
      ]}
    >
      <div className='backdrop' />

      <Button
        size='sm'
        variant='tonal'
        iconOnly
        classes={[
          'gallery-slider__close-btn'
        ]}
      >
        <Icon
          name='arrow-long-right'
          classes={[
            'btn__icon'
          ]}
        />
      </Button>

      <Box
        classes={[
          'gallery-slider__inner-wrapper'
        ]}
      >
        <Swiper
          initialSlide={initialSlideNumber}
          effect={'fade'}
          navigation={true}
          modules={[
            EffectFade,
            Navigation
          ]}
        >
          {
            gallery && gallery.map((gallery) => {
              return (
                <SwiperSlide
                  key={gallery.id}
                >
                  <Span
                    classes={[
                      'gallery-slider__image'
                    ]}
                  >
                    <Image
                      src={`http://localhost:1337${gallery.attributes.url}`}
                      alt=''
                    />
                  </Span>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </Box>
    </Box>
  )
}

GallerySlider.propTypes = {
  gallery: PropTypes.array,
  gallerySlider: PropTypes.bool,
  setGallerySlider: PropTypes.func
}

export default GallerySlider
