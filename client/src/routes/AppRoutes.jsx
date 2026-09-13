import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Cart from '../pages/Cart/Cart';

// Placeholder Pages
const About = () => (
  <div style={{ padding: '10rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
    <h1>About Us</h1>
    <p>Placeholder page</p>
  </div>
);
const Contact = () => (
  <div style={{ padding: '10rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
    <h1>Contact Us</h1>
    <p>Placeholder page</p>
  </div>
);
const Login = () => (
  <div style={{ padding: '10rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
    <h1>Login</h1>
    <p>Placeholder page</p>
  </div>
);
const Register = () => (
  <div style={{ padding: '10rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
    <h1>Register</h1>
    <p>Placeholder page</p>
  </div>
);
const Checkout = () => (
  <div style={{ padding: '10rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
    <h1>Checkout</h1>
    <p>Checkout coming in next phase!</p>
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/:productId" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
