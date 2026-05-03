import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ product }) {
    const [agregado, setAgregado] = useState(false);
    const { addCartProduct } = useContext(CartContext);
    const navigate = useNavigate();

    const handleAddCartProduct = (quantity) => {
        addCartProduct({
            id: product.id,
            title: product.title,
            price: product.precio,
            quantity: quantity,
        });
        setAgregado(true);
    };

    return (
        <div className="itemDetail">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>${product.precio} COP</span>
            {!agregado ? (
                <ItemCount stock={product.stock} onAdd={handleAddCartProduct} />
            ) : (
                <button onClick={() => navigate("/cart")}>Ir al carrito</button>
            )}
        </div>
    );
}

export default ItemDetail;