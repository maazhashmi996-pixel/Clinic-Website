import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../home/Home'
import Footer from '../components/Footer'
import About from '../about/About'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
