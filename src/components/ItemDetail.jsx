
function ItemDetail({ item }) {
    return (
        <div className="item-detail">
            <a href="/"><i class="bi bi-arrow-left-short"></i> Atras</a>
            <div>
                <img src={item.imagen} alt={item.nombre} />
                <div>
                    <h2>{item.nombre}</h2>
                    <p>{item.descripcion}</p>
                    <h3>${item.precio}</h3>
                    <button>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;