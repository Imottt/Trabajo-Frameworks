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
    <div className="container py-4">
      <h1 className="mb-4">Productos</h1>
      <div className="row g-4">
        {productos.map((producto) => (
          <div key={producto.id} className="col-12 col-sm-6 col-lg-4">
            <ProductCard
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              stock={producto.stock}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App