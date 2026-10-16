import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from '../components/Hero'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Hero/>
        <Routes> 
          <Route path='/' element={<h1>CareWell</h1>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
