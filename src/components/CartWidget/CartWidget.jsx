import { Link } from 'react-router-dom';
import './CartWidget.css'
import { ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext'

function CartWidget() {
    const {cart} = useContext(CartContext);
    const total = cart.reduce((acc,prod)=>acc+(prod.quantity || 0),0);
    console.log(total);
      return (
        <>
            <Link to ="/cart" className="cart-widget">
                <ShoppingCart />
                {total > 0 && <span className='cart-badge'>{total}</span>}
                
            </Link>
        </>
    )
}

export default CartWidget;