function ProductCard({ nombre, precio, imagen, stock }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imagen} alt={nombre} />
        </figure>
      </div>
      <div className="card-content">
        <h2 className="title is-5">{nombre}</h2>
        <p className="subtitle is-6">Precio: ${precio}</p>
        {stock > 0 ? (
          <p className="has-text-success">En stock: {stock}</p>
        ) : (
          <p className="has-text-danger">Sin stock</p>
        )}
        <button className="button is-primary mt-3">Comprar</button>
      </div>
    </div>
  )
}

export default ProductCard
