import './App.css'
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting = "Bienvenido a mi tienda"/>}/>
        <Route path='/producto/:id' element={<ItemDetailContainer />} /> 
        <Route path='/categoria/:categoria' element={<ItemListContainer greeting="Productos" />} />
        <Route path='*' element={<h2 style={{ color: "white", textAlign: "center", padding: "10rem" }}> 404 - pagina no encontrada </h2>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
