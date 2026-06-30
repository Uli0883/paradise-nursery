import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header style={{
      backgroundColor: '#2c3e50',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <h1 style={{ color: 'white', fontSize: '1.5rem' }}>🌿 Paradise Nursery</h1>
      <nav>
        <Link to="/" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Inicio</Link>
        <Link to="/products" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Plantas</Link>
        <Link to="/cart" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none', position: 'relative' }}>
          <FaShoppingCart size={24} />
          <span style={{
            backgroundColor: '#e74c3c',
            borderRadius: '50%',
            padding: '2px 8px',
            fontSize: '12px',
            position: 'absolute',
            top: '-10px',
            right: '-15px',
          }}>{totalQuantity}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
