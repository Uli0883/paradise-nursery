import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/CartSlice';
import Header from '../components/Header';

function CartPage() {
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <>
        <Header />
        <div style={{ textAlign: 'center', padding: '4rem' }}>
          <h2>🛒 Tu carrito está vacío</h2>
          <p>¡Explora nuestras plantas y encuentra la perfecta para ti!</p>
          <Link to="/products" style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            backgroundColor: '#27ae60',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            marginTop: '1rem',
          }}>🌱 Continuar comprando</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2>🛒 Carrito de Compras</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#f8f9fa',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '2rem',
        }}>
          <p><strong>Total de artículos:</strong> {totalQuantity}</p>
          <p><strong>Costo total:</strong> ${totalAmount}</p>
        </div>

        {items.map(item => (
          <div key={item.id} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            border: '1px solid #ddd',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            flexWrap: 'wrap',
          }}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>Precio unitario: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p><strong>Subtotal: ${item.price * item.quantity}</strong></p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
                style={{ padding: '0.5rem 1rem', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >+</button>
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                style={{ padding: '0.5rem 1rem', backgroundColor: '#f39c12', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >−</button>
              <button
                onClick={() => dispatch(removeItem(item.id))}
                style={{ padding: '0.5rem 1rem', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >🗑️ Eliminar</button>
            </div>
          </div>
        ))}

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <Link to="/products" style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#27ae60',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
          }}>🔄 Continuar comprando</Link>
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#2c3e50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}>💳 Pagar (Próximamente)</button>
        </div>
      </div>
    </>
  );
}

export default CartPage;