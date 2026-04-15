import './App.css'
import Container from './Pages/Container'
import { BrowserRouter,Routes,Route } from 'react-router'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container/>}/>
          
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
