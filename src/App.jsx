import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting = "BIenvenido a mi tienda"/>
    </>
  )
}

export default App
