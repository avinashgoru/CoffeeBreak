import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './pages/Home/Home';

// Placeholder Pages (will be moved to actual components later)

const Menu = () => <div>Menu Page</div>;
const ProductDetails = () => <div>Product Details</div>;
const About = () => <div>About Us</div>;
const Contact = () => <div>Contact Us</div>;
const Cart = () => <div>Cart</div>;
const Checkout = () => <div>Checkout</div>;
const Login = () => <div>Login</div>;
const Register = () => <div>Register</div>;
const Profile = () => <div>Profile</div>;

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      {/* Footer placeholder */}
    </div>
  );
}

export default App;
