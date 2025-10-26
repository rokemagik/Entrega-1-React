
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
        <div className="contenedor_main">
            <h2>{greeting}</h2>
            <div className="filtros_basicos">
                <p>Ordenar por: Seleccionar <i className="bi bi-chevron-down"></i></p>
                <p>Mostrar: Seleccionar <i className="bi bi-chevron-down"></i></p>
            </div>
            <div className="contenedor_productos">
                <div className="filtros_avanzados">
                    <h1>Micros</h1>
                    <div>
                        <h3>Marcas</h3>
                        <a href="">Amd</a>
                        <a href="">Intel</a>
                        <h3>Socket</h3>
                        <p>Amd</p>
                        <a href="">Am4</a>
                        <a href="">Am5</a>
                        <p>Intel</p>
                        <a href="">1700</a>
                        <a href="">1151</a>
                        <a href="">1851</a>
                        <a href="">1200</a>
                        <a href="">Am4</a>
                        <h3>Disipacion</h3>
                        <p>Cooler Stock</p>
                        <a href="">Si</a>
                        <a href="">No</a>
                    </div>
                </div>
                <ItemList productos={productos} />
            </div>
        </div>
    );
}
