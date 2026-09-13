import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import CartItem from '../../components/cart/CartItem';
import CartSummary from '../../components/cart/CartSummary';
import styles from './Cart.module.css';

const Cart = () => {
  const { items, clearCart } = useCart();

  const isEmpty = items.length === 0;

  if (isEmpty) {
    return (
      <div className={styles.emptyCartContainer}>
        <div className={`container ${styles.emptyCartContent}`}>
          <h1 className={styles.emptyTitle}>Your Cart is Empty</h1>
          <p className={styles.emptyText}>
            Looks like you haven't added any of our delicious coffee to your cart yet.
          </p>
          <Link to="/menu" className={styles.shopBtn}>
            Explore Our Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <div className={`container ${styles.cartContainer}`}>
        {/* Left Column: Items */}
        <div className={styles.itemsColumn}>
          <div className={styles.cartHeader}>
            <h1 className={styles.cartTitle}>Your Cart</h1>
            <button onClick={clearCart} className={styles.clearBtn} aria-label="Clear entire cart">
              Clear Cart
            </button>
          </div>

          <div className={styles.itemsList}>
            {items.map((item) => (
              <CartItem key={item.productId} item={item} />
            ))}
          </div>
        </div>

        {/* Right Column: Summary */}
        <div className={styles.summaryColumn}>
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
