import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import data from "../data/productos";

function ItemDetailContainer({ greeting }) {
    return (
        <div className="contenedor_productos">
            <h2>{greeting}</h2>
        </div>
    );
}

export default ItemDetailContainer;