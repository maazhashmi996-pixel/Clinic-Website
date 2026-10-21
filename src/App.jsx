
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HeroDoc from '../components/HeroDoc'
import Eccomerce from '../components/Eccomerce'
import './App.css'
import Foot from '../components/Foot'
import Footer from '../Clinic-Website/components/Footer'


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
            <Footer/>
            </>
          }
        />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
