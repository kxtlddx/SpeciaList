import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import GetInTouch from './components/GetInTouch'
import Direction6 from './components/Direction6'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/Main' element={<Main />} />
          <Route path='/About' element={<About />} />
          <Route path='/About/:direction6' element={<Direction6 />} />
          <Route path='/GetInTouch' element={<GetInTouch />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

