import { useState } from 'react'
import CalcCom from './components/calc/CalcCom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CalcCom/>
    </>
  )
}

export default App
