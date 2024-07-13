import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './components/grid/Grid'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Grid num={9} />
    </>
  )
}

export default App
