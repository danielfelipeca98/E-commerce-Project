
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { ShoppingBasket } from 'lucide-react';
import './ItemList.css';

// Dentro del div de cada producto:
function ItemList({ products }) {
    return (
        <div className="itemListContainer-space">
            {products.map((product) => (
                <div key={product.id} className="itemDetail">
                    
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <span>${product.precio} COP</span>
                    <ItemCount stock={product.stock}/>
                    <button>
                    <ShoppingBasket />
                    Carrito
                </button>
                <Link className='detail-link' to={`/producto/${product.id}`}>Ver detalle</Link>
                
                </div>
            ))}
        </div>
    );
}

export default ItemList;