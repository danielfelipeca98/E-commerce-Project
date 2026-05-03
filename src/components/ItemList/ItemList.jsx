import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemList.css';

function ItemList({ products }) {
    const navigate = useNavigate();
    const { addCartProduct } = useContext(CartContext);
    const [agregados, setAgregados] = useState({});

    const handleAddCartProduct = (product, quantity) => {
        addCartProduct({
            id: product.id,
            title: product.title,
            price: product.precio,
            quantity: quantity,
        });
        setAgregados((prev) => ({ ...prev, [product.id]: true }));
    };

    return (
        <div className="itemListContainer-space">
            {products.map((product) => (
                <div key={product.id} className="itemDetail">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <span>${product.precio} COP</span>
                    {!agregados[product.id] ? (
                        <ItemCount stock={product.stock} onAdd={(qty) => handleAddCartProduct(product, qty)} />
                    ) : (
                        <button onClick={() => navigate("/cart")}>Ir al carrito</button>
                    )}
                    <Link to={`/producto/${product.id}`} className="detail-link">
                        Ver detalle
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ItemList;