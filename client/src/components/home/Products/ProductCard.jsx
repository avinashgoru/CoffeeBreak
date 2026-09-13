import { useNavigate } from 'react-router-dom';
import styles from './Products.module.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { id, name, description, price, image } = product;

  const handleProductClick = () => {
    navigate(`/menu/${id}`);
  };

  return (
    <div className={styles.productCard} onClick={handleProductClick} style={{ cursor: 'pointer' }}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.productImage} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{name}</h3>
        <p className={styles.productDescription}>{description}</p>
        <div className={styles.productAction}>
          <span className={styles.productPrice}>{price}</span>
          <button
            className={styles.orderButton}
            onClick={(e) => {
              e.stopPropagation(); // prevent double navigation if button is clicked
              handleProductClick();
            }}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
