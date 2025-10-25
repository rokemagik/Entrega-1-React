
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import productosData from "../data/productos";

export default function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = new Promise((resolve) => {
            setTimeout(() => resolve(productosData), 1000)
        });

        fetchProductos.then((res) => setProductos(res));
    }, []);

    return (
        <div className="contenedor_productos">
            <h2>{greeting}</h2>
            <ItemList productos={productos} />
        </div>
    );
}
