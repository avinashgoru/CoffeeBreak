import styles from './Products.module.css';
import { products } from '../../../data/products';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <section className={styles.productsSection}>
      <div className={`container ${styles.productsContainer}`}>
        <div className={styles.headerArea}>
          <h2 className={styles.mainHeading}>Delight In a new mix of the Coffee World</h2>
        </div>

        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
