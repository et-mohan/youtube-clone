import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Videocard from './components/Videocard'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-2 '>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      <Videocard/>
      </div>
    </>
  )
}

export default App
