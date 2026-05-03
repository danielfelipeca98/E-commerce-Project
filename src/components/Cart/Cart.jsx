import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import './Cart.css';

function Cart() {
    const { cart } = useContext(CartContext);

    console.log("Productos en carrito:", cart);

    const totalGeneral = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div style={{ color: "black", padding: "2rem" }}>
            <h2>Carrito de compras</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <p>{item.title} - Cantidad: {item.quantity} - ${item.price}-Subtotal: ${item.price * item.quantity}</p>
                        </div>
                    ))}
                    <p><strong>total: ${totalGeneral}</strong></p>
                    <Link to="/checkoutform" className="btn-finalizar">Finalizar compra</Link>
                </>
            )}

        </div>
    );
}

export default Cart;