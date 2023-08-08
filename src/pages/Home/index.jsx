import {
  Helmet
} from 'react-helmet-async'

// import Divider from '../../components/Divider'

import Main from '../../layouts/Main'

// import PageHeader from './PageHeader'
// import CollectionsSection from './CollectionsSection'
import ReviewsSection from './ReviewsSection'

function Home() {
  return (
    <>
      <Helmet>
        <title>Esports graphics designer | Raphix Design</title>
      </Helmet>

      <Main>
        {/* <CollectionsSection /> */}

        {/* <Divider /> */}

        <ReviewsSection />
      </Main>
    </>
  )
}

export default Home
