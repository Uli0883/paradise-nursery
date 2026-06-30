import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products'); // Navega a la página de productos
  };

  return (
    <div className="landing-container">
      <div className="overlay">
        <h1>🌿 Welcome to Paradise Nursery</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Transforma tu hogar en un paraíso verde con nuestras plantas de interior.
        </p>
        <AboutUs />
        <button className="cta-button" onClick={handleGetStarted}>
          🌱 Comenzar
        </button>
      </div>
    </div>
  );
}

export default App;
