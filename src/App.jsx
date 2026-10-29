
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'
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
          <Route path="/Docters" element={<Doctor/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App