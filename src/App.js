import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Direction from './components/Direction'
import SpecialtyPage from './components/SpecialityPage'

const {
  mathematicsAndNaturalSciences,
  engineeringTechnologyAndTechnicalSciences,
  healthcareAndMedicalSciences,
  agricultureAndAgriculturalSciences,
  socialSciences,
  educationAndPedagogicalSciences,
  humanities,
  artAndCulture
} = require('./components/Specialties.js');

const data = [mathematicsAndNaturalSciences,
  engineeringTechnologyAndTechnicalSciences,
  healthcareAndMedicalSciences,
  agricultureAndAgriculturalSciences,
  socialSciences,
  educationAndPedagogicalSciences,
  humanities,
  artAndCulture];


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main data={data} />} />
          <Route path='/Main' element={<Main data={data} />} />
          <Route path='/About' element={<About />} />
          <Route path='/About/:direction' element={<Direction />} />
          <Route path='/' element={<SpecialtyPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
