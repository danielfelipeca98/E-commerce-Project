import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                const foundProduct = data.find(p => p.id === parseInt(id));
                setProduct(foundProduct);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        })();
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