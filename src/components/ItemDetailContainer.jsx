import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import data from "../data/productos";

function ItemDetailContainer({ greeting }) {
    const [producto, setProductos] = useState(null);
    const { idProducto } = useParams();

    useEffect(() => {
        const getProducto = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.find((p) => p.id === parseInt(idProducto)));
            }, 500);
        });

        getProducto.then((res) => setProducto(res));
    }, [idProducto]);

    return (
        <div className="contenedor_productos">
            {producto ? (
                <ItemDetail item={producto} />
            ) : (
                <h3>Cargando detalles del producto...</h3>
            )}
        </div>
    );
}

export default ItemDetailContainer;