import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button1 from "./components/Buttons/Button1/Button1.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Button1 />
        <div className="mt-10"></div>
    </>
  )
}

export default App
