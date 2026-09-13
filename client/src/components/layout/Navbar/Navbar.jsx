import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../../hooks/useCart';
import styles from './Navbar.module.css';
import logoIcon from '../../../assets/icons/logo.jpg';

const Navbar = () => {
  const location = useLocation();
  const { totalItems } = useCart();

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo Section */}
        <Link to="/" className={styles.logo}>
          <img src={logoIcon} alt="Coffee Break Icon" className={styles.logoIcon} />
          <span className={`script-font ${styles.logoText}`}>Coffee Break</span>
        </Link>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <Link
            to="/"
            className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={`${styles.link} ${location.pathname === '/menu' ? styles.active : ''}`}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className={`${styles.link} ${location.pathname === '/about' ? styles.active : ''}`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`${styles.link} ${location.pathname === '/contact' ? styles.active : ''}`}
          >
            Contact Us
          </Link>
        </div>

        {/* Auth Section & Cart */}
        <div className={styles.auth}>
          <Link
            to="/cart"
            className={`${styles.cartLink} ${totalItems > 0 ? styles.cartActive : ''}`}
          >
            Cart {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
          </Link>
          <Link to="/login" className={styles.signIn}>
            Sign In
          </Link>
          <Link to="/register" className={styles.signUp}>
            SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
