import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemListContainer.css'
function ItemListContainer(props) {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
       (async()=>{
        try {
            const response = await fetch("./src/jsons/products.json")
        const data = await response.json()
        setProducts(data);
        } catch (error) {
            console.log(error)
        }
       })()
    },[])

    return (
        <>
            <div className='greeting'>
                {props.greeting}
                <div className='itemListContainer-space'>
                    {
                        products.map((product)=>{
                          return  <ItemDetail key={product.id} product={product}/>
                        })
                    }
                    
                </div>

            </div>
        </>
    )
}
export default ItemListContainer;