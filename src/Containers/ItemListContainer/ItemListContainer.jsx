import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';  
import { getItems}  from '../../firebase'
import './ItemListContainer.css'


function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  // ← Corregido
    const { categoria } = useParams();

     let saludo = props.greeting;
            if (categoria === "skate") saludo = "Productos de Skate";
            if (categoria === "tattoo") saludo = "Productos de Tattoo";

    useEffect(() => {
        const fetchProducts = async()=>{
            try{
                setLoading(true);
                const productsData = await getItems();
                let productFilter = productsData;
                if (categoria){
                    productFilter= productsData.filter(
                        producto => producto.categoria===categoria
                    );
                }
                setProducts(productFilter);
                setLoading(false);
            }catch(error){
                console.log("error cargando productos:",error);
                setLoading(false);
            }
        };
        fetchProducts();
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