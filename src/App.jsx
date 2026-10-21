
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HeroDoc from '../components/HeroDoc'
import Eccomerce from '../components/Eccomerce'
import './App.css'
import Foot from '../components/Foot'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Navbar/>
              <HeroDoc/>
              <Eccomerce/>
              <Foot/>
            </>
          }
        />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
