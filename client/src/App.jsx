import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
