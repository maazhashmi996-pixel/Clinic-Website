import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Aapke saare baaki folder paths (jo bilkul sahi hain)
import Home from '../home/Home'
import About from '../about/About'
import Doctor from '../Docters/Doctor'
import Departments from '../departments/Departments'
import Blog from '../blog/Blog'
import './App.css'

// Layout Function jo aapki screen par Navbar aur Footer show karega
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Main Layout jis mein saare pages load honge */}
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
