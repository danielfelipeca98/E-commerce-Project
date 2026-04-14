import { useState } from "react";
import "./ItemCount.css"
function ItemCount({stock}) {
    const [count, setCount] = useState(1)

    const less = () => {
        if (count > 1) {
            setCount(count - 1);
        }

    }
    const add = () => {
        if (count < stock) {
            setCount(count + 1);
        }


    }
    return (
        <div className="itemCount">
            <button className="itemCount-button" onClick={less}>-</button>
            <span className="itemCount-value">{count}</span>
            <button className="itemCount-button" onClick={add}>+</button>
        </div>
    )
}
export default ItemCount;