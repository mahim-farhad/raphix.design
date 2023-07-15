import React, {
  useState,
  useEffect,
  useRef
} from 'react'

import {
  Helmet
} from 'react-helmet-async'

import classNames from 'classnames'

import {
  motion
} from 'framer-motion'

import {
  Paragraph
} from '../../components/Typography'
import Icon from '../../components/Icon'
import Divider from '../../components/Divider'
import Button from '../../components/Button'
import ArticleCard from '../../components/card/article/ArticleCard'

import Main from '../../layouts/Main'
import Section from '../../layouts/Section'
import Container from '../../layouts/Container'
import {
  Row,
  Column
} from '../../layouts/Grid'
import Aside from '../../layouts/aside/Aside'
import Box from '../../layouts/Box'
import DynamicLink from '../../components/DynamicLink'

const collectionsData = [
  {
    title: 'Esports Jersey Designs',
    slug: '',
    price: 'USD 50.00 $',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e4ca49173999109.649a2ee5e7859.png',
    uploadedAt: 5
  },
  {
    title: 'Esports Jersey Designs',
    slug: '',
    price: 'USD 50.00 $',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/343c56173999109.649a30d6f29f5.png',
    uploadedAt: 5
  },
  {
    title: 'Esports Jersey Designs',
    slug: '',
    price: 'USD 50.00 $',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/53e27a173999109.649a30d70054f.png',
    uploadedAt: 5
  },
  {
    title: 'Esports Jersey Designs',
    slug: '',
    price: 'USD 50.00 $',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9d9c79174817139.64a8bc2107ff7.png',
    uploadedAt: 5
  },
  {
    title: 'Esports Jersey Designs',
    slug: '',
    price: 'USD 50.00 $',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/c1b718174141023.649c7fd0935b0.jpg',
    uploadedAt: 5
  },
  {
    title: 'Esports Jersey Designs',
    slug: '',
    price: 'USD 50.00 $',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/8921d4174499077.64a3c98379454.png',
    uploadedAt: 5
  }
]

const categories = [
  {
    type: 'Jersey',
  },
  {
    type: 'Banner',
  },
  {
    type: 'Hoodies',
  },
  {
    type: 'Sleeves',
  }
]

const useOutsideClick = (ref, modal, setModal) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setModal(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, modal, setModal])
}

const Dropdown = ({
  dropdownItem,
  dropdown,
  setDropdown,
  text,
  right
}) => {
  const wrapperRef = useRef(null)

  useOutsideClick(wrapperRef, dropdown, setDropdown);

  return (
    <motion.nav
      ref={wrapperRef}
      initial={false}
      animate={dropdown ? 'open' : 'closed'}
      className='dropdown'
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setDropdown(!dropdown)}
        className='btn btn--sm btn--tonal-dark btn--extended dropdown__toggle w-100 w-md-auto'
      >
        {text}

        <motion.div
          variants={{
            open: { rotate: -180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          className='dropdown__toggle-icon'
        >
          <Icon
            name='chevron-down'
          />
        </motion.div>
      </motion.button>

      <motion.ul
        className={classNames(
          'dropdown__menu',
          'top-100',
          { [`dropdown__menu--show`]: dropdown },
          { [`dropdown__menu--right`]: right },
        )}
        style={{
          pointerEvents: dropdown ? 'auto' : 'none'
        }}
      >
        {
          categories && categories.map((category) => {
            return (
              <li
                key={category.id}
                className='w-100 py-3 px-6'
              >
                <Box
                  classes={[
                    'form-group',
                    'form-group--check'
                  ]}
                >
                  <input
                    type="checkbox"
                    name={category.type}
                    id={category.type}
                    className='form-group__check-input form-group__check-input--checkbox'
                  />

                  <label
                    htmlFor={category.type}
                    className='form-group__check-label'
                  >
                    {category.type}
                  </label>
                </Box>
              </li>
            )
          })
        }
      </motion.ul>
    </motion.nav>
  )
}

function Collections() {
  const [dropdown, setDropdown] = useState(false)

  const [text, setText] = useState('Sort By')

  return (
    <React.Fragment>
      <Helmet>
        <title>Collections | Raphix Design</title>
      </Helmet>

      <Main>
        <Section>
          <Container fluid>
            <Row>
              <Column
                col={{ _: 12, md: 3, lg: 3, xl: 2 }}
              >
                <Aside />
              </Column>

              <Column
                col={{ _: 12, md: 9, lg: 9, xl: 10 }}
              >
                <Row
                  utilities={{
                    'row-gap': { _: 8 }
                  }}
                >
                  <Column
                    col={{ _: 12 }}
                  >
                    <Box
                      classes={[
                        'filter'
                      ]}
                    >
                      <Dropdown
                        dropdown={dropdown}
                        setDropdown={setDropdown}
                        text={'Sort By'}
                      />

                      <Paragraph
                        utilities={{
                          mr: { _: 'auto' }
                        }}
                      >
                        Showing 1-4 of 40 results
                      </Paragraph>

                      <Box
                        utilities={{
                          d: { _: 'flex' },
                          gap: { _: 6 },
                          'align-items': { _: 'center' }
                        }}
                      >
                        <Button
                          size='sm'
                          color='light'
                          extended
                          utilities={{
                            w: { _: 50, md: 'auto' },
                            mr: { _: 'auto' },
                            rounded: { _: 0 }
                          }}
                        >
                          <Icon
                            name='filters'
                            classes={[
                              'btn__icon'
                            ]}
                          />

                          Filter
                        </Button>

                        <DynamicLink
                          path='/ekommart/shop/?layout=grid'
                        >
                          <Icon
                            name='grid'
                          />
                        </DynamicLink>

                        <DynamicLink
                          path='/ekommart/shop/?layout=list'
                        >
                          <Icon
                            name='list'
                          />
                        </DynamicLink>
                      </Box>

                      {/* <form>
                        <fieldset>
                          <Box
                            classes={[
                              'input-group',
                              'input-group--sm'
                            ]}
                          >
                            <select
                              name='orderby'
                              className='input-group__control'
                            >
                              <option
                                value='menu_order'
                                selected='selected'
                              >
                                Default sorting
                              </option>
                              <option
                                value='popularity'
                              >
                                Sort by popularity
                              </option>
                              <option value='rating'>Sort by average rating</option>
                              <option value='date'>Sort by latest</option>
                              <option value='price'>Sort by price: low to high</option>
                              <option value='price-desc'>Sort by price: high to low</option>
                            </select>
                          </Box>
                        </fieldset>
                      </form> */}
                    </Box>
                  </Column>

                  {
                    collectionsData.map((collection, index) => (
                      <Column
                        col={{ _: 12, md: 6, xl: 4 }}
                        key={index}
                      >
                        <ArticleCard
                          title={'Esports Jersey Design'}
                          slug={'esports-jersey-design'}
                          excerpt={'USD 50.00 $'}
                          thumbnail={collection.thumbnail}
                          uploadedAt={'01/05/2022'}
                        />
                      </Column>
                    ))
                  }
                </Row>
              </Column>
            </Row>
          </Container>
        </Section>
      </Main>
    </React.Fragment>
  )
}

export default Collections
