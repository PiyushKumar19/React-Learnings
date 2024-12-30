import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ToDo from './Intro/ToDo'
import ToggleOption from './Intro/ToggleOption'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>JSX Excercise</div>
      <ToggleOption />
      <ToDo />
    </>
  )
}

export default App
