import styles from './Products.module.css';

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.productImage} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{name}</h3>
        <p className={styles.productDescription}>{description}</p>
        <div className={styles.productAction}>
          <span className={styles.productPrice}>{price}</span>
          <button className={styles.orderButton}>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
