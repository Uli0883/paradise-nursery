import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import Header from '../components/Header';

const plants = {
  '🌿 Plantas de Interior': [
    { id: 1, name: 'Monstera Deliciosa', price: 25, image: '/images/monstera.jpg' },
    { id: 2, name: 'Poto Dorado', price: 15, image: '/images/poto.jpg' },
  ],
  '🌵 Suculentas': [
    { id: 3, name: 'Aloe Vera', price: 12, image: '/images/aloe.jpg' },
    { id: 4, name: 'Echeveria Elegans', price: 10, image: '/images/echeveria.jpg' },
  ],
  '🌿 Plantas Colgantes': [
    { id: 5, name: 'Helecho de Boston', price: 18, image: '/images/helecho.jpg' },
    { id: 6, name: 'Cinta o Malamadre', price: 14, image: '/images/cinta.jpg' },
  ],
};

function ProductList() {
  const [addedItems, setAddedItems] = useState(new Set());
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems(prev => new Set(prev).add(plant.id));
  };

  return (
    <>
      <Header />
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Nuestras Plantas</h1>
        {Object.entries(plants).map(([category, items]) => (
          <div key={category}>
            <h2 style={{ marginTop: '2rem' }}>{category}</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
            }}>
              {items.map(plant => (
                <div key={plant.id} style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '1rem',
                  textAlign: 'center',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                    }}
                  />
                  <h3>{plant.name}</h3>
                  <p style={{ fontSize: '1.2rem', color: '#27ae60' }}>${plant.price}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems.has(plant.id)}
                    style={{
                      backgroundColor: addedItems.has(plant.id) ? '#ccc' : '#27ae60',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      cursor: addedItems.has(plant.id) ? 'not-allowed' : 'pointer',
                      width: '100%',
                    }}
                  >
                    {addedItems.has(plant.id) ? '✅ Añadido' : '🛒 Añadir al carrito'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;