import useFetch from '../../hooks/useFetch'

import {
  Heading
} from '../../components/Typography'
import DynamicLink from '../../components/DynamicLink'
import SkeletonLoading from '../../components/card/SkeletonLoading'

import Section from '../Section'

function PopulerArticles() {
  const {
    data,
    loading
  } = useFetch('articles')

  return (
    <Section
      utilities={{
        pt: { _: 6 }
      }}
    >
      <Heading
        as='h6'
        classes={[
          'section__title'
        ]}
        utilities={{
          mb: { _: 8 }
        }}
      >
        Populer Publications
      </Heading>

      <ul
        className="list"
      >
        {
          loading
            ? <SkeletonLoading />
            : (data && data.map((article) => {
              return (
                <li
                  key={article.id}
                  className="list__item"
                >
                  <DynamicLink
                    path={`publications`}
                    classes={[
                      'list__link'
                    ]}
                  >
                    {article.attributes.title}
                  </DynamicLink>
                </li>
              )
            }))
        }
      </ul>
    </Section>
  )
}

export default PopulerArticles
