import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Doctors from '../doctors/Doctors'
import Hero from '../components/Hero'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Hero/>
        <Routes> 
          <Route path='/' element={<h1>CareWell</h1>}> </Route>
           <Route path='/doctors' element={<Doctors/>} > </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
