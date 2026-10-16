import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Navbar/>
          <Hero/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
