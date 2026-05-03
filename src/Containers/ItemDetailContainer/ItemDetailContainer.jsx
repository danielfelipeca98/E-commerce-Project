import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById}  from '../../firebase';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
       const fetchProduct = async () => {
            try {
               setLoading(true);
                const productData = await getItemById(id);
                setProduct(productData);
                setLoading(false);
            } catch (error) {
                console.log("Error cargando producto:", error);
                setLoading(false);
            }
        };
        
        fetchProduct();
    }, [id]);

    if (loading) {
        return <h2 style={{ color: "white", textAlign: "center" }}>Cargando...</h2>;
    }

    if (!product) {
        return <h2 style={{ color: "white", textAlign: "center" }}>Producto no encontrado</h2>;
    }

    return <ItemDetail product={product} />; 
}

export default ItemDetailContainer;