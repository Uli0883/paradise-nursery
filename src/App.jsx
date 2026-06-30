import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🌿 Paradise Nursery</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Transforma tu hogar en un paraíso verde con nuestras plantas de interior.
        </p>
        <AboutUs />
        <Link to="/products" className="cta-button">
          🌱 Comenzar
        </Link>
      </div>
    </div>
  );
}

export default App;