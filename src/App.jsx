import './App.css'
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
import Cart from './components/Cart/Cart';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './context/CartContext';
import { useEffect } from 'react';
import { getItems } from './firebase';
import CheckoutForm from './components/checkoutForm/CheckoutForm';


function App() {

  useEffect(()=>{
      getItems();
  },[])


  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/cart' element={<Cart />} />
            <Route path='/' element={<ItemListContainer greeting="Bienvenido a mi tienda" />} />
            <Route path='/producto/:id' element={<ItemDetailContainer />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer greeting="Productos" />} />
            <Route path='*' element={<h2 style={{ color: "white", textAlign: "center", padding: "10rem" }}> 404 - pagina no encontrada </h2>} />
            <Route path='/checkoutform' element={<CheckoutForm/>}/>
          </Routes>
        </BrowserRouter>

      </CartProvider>


    </>
  )
}

export default App
