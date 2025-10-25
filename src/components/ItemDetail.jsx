
function ItemDetail({ item }) {
    return (
        <div className="item-detail">
            <img src={item.image} alt={item.nombre} />
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
            <h3>${item.precio}</h3>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default ItemDetail;