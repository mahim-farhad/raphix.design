import {
  Routes,
  Route
} from 'react-router-dom'

import {
  HelmetProvider
} from 'react-helmet-async'

import './assets/styles/styles.css'

import SidebarProvider from './contexts/SidebarContext'

import Divider from './components/Divider'

import Header from './layouts/header/Header'
import Sidebar from './layouts/sidebar/Sidebar'
import Footer from './layouts/footer/Footer'

import Home from './pages/Home'
import Collections from './pages/Designs'
import Collection from './pages/Design'
import Error404 from './pages/Error404'

function App() {
  const helmetContext = {}

  return (
    <HelmetProvider
      context={helmetContext}
    >
      <SidebarProvider>
        <Header />

        <Divider />

        <Sidebar />

        <Routes>
          <Route
            path='/'
            exact
            element={
              <Home />
            }
          />

          <Route
            path='/home'
            exact
            element={
              <Home />
            }
          />

          <Route
            path='/collections'
            exact
            element={
              <Collections />
            }
          />

          <Route
            path='/collections/:slug'
            exact
            element={
              <Collection />
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
      </SidebarProvider>
    </HelmetProvider>
  )
}

export default App
