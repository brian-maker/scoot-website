import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Common/Navbar'
import Footer from './components/Common/Footer'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Careers from './components/Pages/Careers'
import Locations from './components/Pages/Location'

import Calltoaction from './components/Common/Calltoaction'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h screen">
        <Navbar/>
        <div className="flex-grow">
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/about' Component={About}/>
            <Route path='/careers' Component={Careers}/>
            <Route path='/locations' Component={Locations}/>
          </Routes>
        </div>
        <Calltoaction/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App