import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar' // Agar path kharab ho toh check kar lein
import Footer from './components/Footer' // Agar path kharab ho toh check kar lein
import Layout from './components/Layout' // Jo Layout component niche bana hai

// Aapke saare Imports (Purane aur Naye)
import Home from './home/Home'
import About from './about/About'
import Doctor from './Docters/Doctor'
import Departments from '../departments/Departments'
import Blog from '../blog/Blog'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Main Layout jis mein Navbar aur Footer aate hain */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
