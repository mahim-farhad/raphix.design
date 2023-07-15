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

import Header from './layouts/header/Header'
import Sidebar from './layouts/sidebar/Sidebar'
import Footer from './layouts/footer/Footer'

import Home from './pages/Home'
import Error404 from './pages/Error'

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
          path='/'
          element={
            <Home />
          }
        />

        <Route
          path='*'
          element={
            <Error404 />
          }
        />
      </Routes>

      <Footer />
    </HelmetProvider>
  )
}

export default App
