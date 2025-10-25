
import Item from "./Item";

export default function ItemList({ productos }) {
    if (!productos || productos.length === 0) {
        return <p style={{ textAlig: "center" }}>No hay productos disponibles</p>
    }

    return (
        <section className="productos">
            {productos.map((prod) => (
                <Item key={prod.id} producto={prod}/>
            ))}
        </section>
    )
}