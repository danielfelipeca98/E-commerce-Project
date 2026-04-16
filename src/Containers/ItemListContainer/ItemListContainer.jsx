import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';  // Solo este import
import './ItemListContainer.css'


function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  // ← Corregido
    const { categoria } = useParams();

     let saludo = props.greeting;
            if (categoria === "skate") saludo = "Productos de Skate";
            if (categoria === "tattoo") saludo = "Productos de Tattoo";

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/products.json");  // ← Corregido
                const data = await response.json()
                let productFilter = data;
                if (categoria) {
                    productFilter = data.filter(producto => producto.categoria === categoria);
                }

                setProducts(productFilter);
                setLoading(false);  // ← Corregido
            } catch (error) {
                console.log(error)
                setLoading(false);  // ← Agrega esto también
            }
        })()
    }, [categoria])

    if (loading) {
        return <h2>Cargando...</h2>;
    }

    return (
        <div className='greeting'>
              {saludo}
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;