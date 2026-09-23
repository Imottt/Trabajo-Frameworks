import ProductCard from './components/ProductCard'

const productos = [
  { id: 1, nombre: 'Auriculares Bluetooth', precio: 25000, stock: 12, imagen: 'https://picsum.photos/seed/auriculares/400/300' },
  { id: 2, nombre: 'Teclado Mecánico', precio: 48000, stock: 5, imagen: 'https://picsum.photos/seed/teclado/400/300' },
  { id: 3, nombre: 'Mouse Gamer', precio: 18000, stock: 0, imagen: 'https://picsum.photos/seed/mouse/400/300' },
  { id: 4, nombre: 'Monitor 24"', precio: 210000, stock: 3, imagen: 'https://picsum.photos/seed/monitor/400/300' },
  { id: 5, nombre: 'Webcam HD', precio: 32000, stock: 0, imagen: 'https://picsum.photos/seed/webcam/400/300' },
  { id: 6, nombre: 'Parlante Portátil', precio: 27000, stock: 8, imagen: 'https://picsum.photos/seed/parlante/400/300' },
]

function App() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            stock={producto.stock}
          />
        ))}
      </div>
    </div>
  )
}

export default App

