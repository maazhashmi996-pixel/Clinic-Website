import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../home/Home'
import About from '../about/About'
import Departments from '../departments/Departments'
import Blog from '../blog/Blog'
import Doctor from '../Docters/Doctor'
import './App.css'

// Navbar on top and Footer at the bottom of every page; <Outlet/> is where the page goes
function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/departments" element={<Departments/>} />
          <Route path="/doctors" element={<Doctor/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App