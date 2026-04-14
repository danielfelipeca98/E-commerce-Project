import './CartWidget.css'
import { ShoppingCart } from 'lucide-react';
function CartWidget() {
    return (
        <>
            <button className="material-symbols-outlined">
                <ShoppingCart/>
            </button>
        </>
    )
}

export default CartWidget;