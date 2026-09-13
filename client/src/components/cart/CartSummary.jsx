import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import styles from './CartSummary.module.css';

const CartSummary = () => {
  const { subtotal } = useCart();

  return (
    <div className={styles.summaryCard}>
      <h2 className={styles.summaryTitle}>Order Summary</h2>

      <div className={styles.summaryRow}>
        <span className={styles.summaryLabel}>Subtotal</span>
        <span className={styles.summaryValue}>${subtotal.toFixed(2)}</span>
      </div>

      <div className={styles.summaryRow}>
        <span className={styles.summaryLabel}>Delivery</span>
        <span className={styles.summaryValueMuted}>Calculated at checkout</span>
      </div>

      <div className={styles.divider}></div>

      <div className={`${styles.summaryRow} ${styles.totalRow}`}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalValue}>${subtotal.toFixed(2)}</span>
      </div>

      <Link to="/checkout" className={styles.checkoutBtn}>
        Proceed to Checkout
      </Link>

      <Link to="/menu" className={styles.continueShoppingBtn}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartSummary;
