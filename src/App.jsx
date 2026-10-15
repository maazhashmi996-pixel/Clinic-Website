import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route><h1>CareWell</h1></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
