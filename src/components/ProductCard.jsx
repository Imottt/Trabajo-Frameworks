import React from 'react';

const ProductCard = ({ nombre, precio, imagen, stock }) => {
  // Clase condicional si el stock es 0
  const cardClasses = `card h-100 ${stock === 0 ? 'border-danger bg-danger-subtle opacity-75' : 'shadow-sm'}`;

  return (
    <div className={cardClasses}>
      <img 
        src={imagen} 
        className="card-img-top" 
        alt={`Imagen de ${nombre}`} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text mb-1">Precio: ${precio}</p>
        <p className="card-text mb-3 text-muted">Stock: {stock}</p>
        
        <button
          className={`btn mt-auto ${stock === 0 ? 'btn-secondary' : 'btn-primary'}`}
          disabled={stock === 0}
        >
          {stock === 0 ? 'Sin Stock' : 'Agregar'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;