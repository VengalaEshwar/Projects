import { useState } from 'react'
import './App.css'
import AppContainer from './components/AppContainer/AppContainer'
import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom';
function App() {

  return (
    <div className="main">
      <div className="title"><Link to="/" >POKEDEX</Link></div>
      <CustomRoutes/>
    </div>
  )
}

export default App
