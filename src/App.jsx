import {
  useState
} from 'react'

import {
  Routes,
  Route
} from 'react-router-dom'

import {
  HelmetProvider
} from 'react-helmet-async'

import './assets/styles/styles.css'

import Divider from './components/Divider'

import Header from './layouts/header/Header'
import Sidebar from './layouts/sidebar/Sidebar'
import Footer from './layouts/footer/Footer'

import Home from './pages/Home'
import Designs from './pages/Designs'
import Design from './pages/Design'
import Error404 from './pages/Error404'

function App() {
  const [sidebarSlide, setSidebarSlide] = useState(false)

  const helmetContext = {}

  return (
    <HelmetProvider
      context={helmetContext}
    >
      <Header
        sidebarSlide={sidebarSlide}
        setSidebarSlide={setSidebarSlide}
      />

      <Sidebar
        sidebarSlide={sidebarSlide}
        setSidebarSlide={setSidebarSlide}
      />

      <Routes>
        <Route
          path='/home'
          exact
          element={
            <Home />
          }
        />

        <Route
          path='/'
          exact
          element={
            <Home />
          }
        />

        <Route
          path='/collections'
          exact
          element={
            <Designs />
          }
        />

        <Route
          path='/collections/:slug'
          exact
          element={
            <Design />
          }
        />

        <Route
          path='*'
          element={
            <Error404 />
          }
        />
      </Routes>

      <Divider />

      <Footer />
    </HelmetProvider>
  )
}

export default App
