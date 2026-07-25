import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Philosophy from './pages/Philosophy'
import Events from './pages/Concerts'
import GraduatedStudents from './pages/GraduatedStudents'
import TeachingAssistants from './pages/TeachingAssistants'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/events" element={<Events />} />
        <Route path="/graduated-students" element={<GraduatedStudents />} />
        <Route path="/teaching-assistants" element={<TeachingAssistants />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
