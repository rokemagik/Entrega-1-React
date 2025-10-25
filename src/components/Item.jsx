import { Link } from "react-router-dom";

export default function Item({ producto }) {

    const { id, nombre, precio, imagen } = producto;

    const precioFormateado = new Intl.NumberFormat('es-AR').format(precio);

    return (
        <article className="producto">
            <div className="imagen">
                <img 
                    src={imagen || "/img/placeholder.png"}
                    alt={nombre}
                    loading="lazy"       
                />
            </div>

            <div className="producto-cuerpo">
                <h3 className="titulo">{nombre}</h3>
                <p className="precio">${precioFormateado}</p>
                <Link to={`/detalle/${id}`} className="boton" 
                    Ver Detalle
                />
            </div>
        </article>
    )
}