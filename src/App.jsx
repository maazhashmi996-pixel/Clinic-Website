import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../home/Home'
import Footer from '../components/Footer'
import About from '../about/About'
import Departments from '../departments/Departments'
import Blog from '../blog/Blog'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/departments' element={<Departments />} > </Route>
          <Route path='/blog' element={<Blog />} > </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
