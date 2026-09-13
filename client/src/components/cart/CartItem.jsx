import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const { removeItem, incrementItem, decrementItem } = useCart();

  return (
    <div className={styles.cartItem}>
      {/* Image */}
      <Link to={`/menu/${item.productId}`} className={styles.imageContainer}>
        <img src={item.image} alt={item.name} className={styles.productImage} />
      </Link>

      {/* Info */}
      <div className={styles.itemInfo}>
        <div className={styles.headerRow}>
          <div>
            <span className={styles.itemCategory}>{item.category}</span>
            <Link to={`/menu/${item.productId}`} className={styles.itemName}>
              {item.name}
            </Link>
          </div>
          <span className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</span>
        </div>

        <div className={styles.controlsRow}>
          <div className={styles.quantityControls}>
            <button
              className={styles.quantityBtn}
              onClick={() => decrementItem(item.productId)}
              disabled={item.quantity <= 1}
              aria-label={`Decrease ${item.name} quantity`}
            >
              -
            </button>
            <span className={styles.quantityDisplay} aria-live="polite">
              {item.quantity}
            </span>
            <button
              className={styles.quantityBtn}
              onClick={() => incrementItem(item.productId)}
              aria-label={`Increase ${item.name} quantity`}
            >
              +
            </button>
          </div>

          <button
            className={styles.removeBtn}
            onClick={() => removeItem(item.productId)}
            aria-label={`Remove ${item.name} from cart`}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
