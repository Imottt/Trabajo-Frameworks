import React from 'react';

export const ProductCard = ({ nombre, precio, imagen, stock }) => {
  const sinStock = stock === 0;

  return (
    <div className={`card ${sinStock ? 'has-background-danger-light has-border-danger' : ''}`} style={sinStock ? { border: '1px solid #ff3860' } : {}}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imagen} alt={nombre} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-6 mb-2">{nombre}</p>
        <p className="is-size-7 mb-1">Precio: ${precio}</p>
        <p className="is-size-7 mb-3">Stock: {stock}</p>

        <button
          className={`button is-fullwidth ${sinStock ? 'is-static' : 'is-link'}`}
          disabled={sinStock}
        >
          {sinStock ? 'Sin Stock' : 'Agregar'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;