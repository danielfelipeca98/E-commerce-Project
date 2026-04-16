import { ShoppingBasket } from "lucide-react"
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ product }) {
    return (
        <div className="itemDetail">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <ItemCount stock={product.stock} />
            <span>${product.precio} COP</span>
            <div className="itemDetail-buttons">
                <button>
                    <ShoppingBasket />
                    Carrito
                </button>
                
            </div>

        </div>
    )
}

export default ItemDetail;