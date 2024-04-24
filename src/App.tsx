import { useState } from 'react'
import Sidebar from './components/Sidebar'
import HomePage from './components/HomePage'

function App() {

  return (
    <>
    <div className='flex'>
      <Sidebar/>
      <HomePage/>
    </div>
      
    </>
  )
}

export default App
