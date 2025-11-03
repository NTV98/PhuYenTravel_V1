import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Destinations from './pages/Destinations'
import Cuisine from './pages/Cuisine'
import Contact from './pages/Contact'
import MapPage from './pages/MapPage'
import FloatingContacts from './components/FloatingContacts'
import Detail from './pages/Detail'
import Activities from './pages/Activities'
import Transport from './pages/Transport'
import Hotels from './pages/Hotels'
import Tips from './pages/Tips'
import Reviews from './pages/Reviews'
import Weather from './pages/Weather'

export default function App() {
  const location = useLocation()
  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  }

  // Scroll to top when route changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname])

  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.25, ease: 'easeOut' }}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destinations/:slug" element={<Detail />} />
              <Route path="/cuisine" element={<Cuisine />} />
              <Route path="/cuisine/:slug" element={<Detail />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/activities/:slug" element={<Detail />} />
              <Route path="/transport" element={<Transport />} />
              <Route path="/transport/:slug" element={<Detail />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/hotels/:slug" element={<Detail />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/tips/:slug" element={<Detail />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/reviews/:slug" element={<Detail />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/weather/:slug" element={<Detail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/map" element={<MapPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingContacts />
    </div>
  )
}


