import React from 'react';

const ProductCard = ({ nombre, precio, imagen, stock }) => {
  // Clase condicional si el stock es 0
  const cardClasses = `bg-white rounded-lg overflow-hidden flex flex-col ${stock === 0 ? 'border-2 border-red-400 bg-red-50 opacity-75' : 'shadow-md'}`;

  return (
    <div className={cardClasses}>
      <img 
        src={imagen} 
        className="w-full h-[200px] object-cover" 
        alt={`Imagen de ${nombre}`} 
      />
      <div className="p-4 flex flex-col flex-1">
        <h5 className="text-lg font-semibold mb-1">{nombre}</h5>
        <p className="mb-1">Precio: ${precio}</p>
        <p className="mb-3 text-gray-500">Stock: {stock}</p>
        
        <button
          className={`mt-auto py-2 px-4 rounded font-medium text-white ${stock === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          disabled={stock === 0}
        >
          {stock === 0 ? 'Sin Stock' : 'Agregar'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;