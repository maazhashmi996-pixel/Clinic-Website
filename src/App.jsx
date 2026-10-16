import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../home/Home'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
