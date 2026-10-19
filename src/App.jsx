import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Departments from '../departments/Departments'
import Blog from '../blog/Blog'
import NavBar from '../components/NavBar'
import './App.css'
function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      {/* <Departments/> */}
        {/* <Blog /> */}
        <Routes>
          <Route path='/departments' element={<Departments />} > </Route>
          <Route path='/blog' element={<Blog />} > </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
