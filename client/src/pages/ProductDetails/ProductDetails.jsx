import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/products';
import { useCart } from '../../hooks/useCart';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  // Find product
  const product = products.find((p) => p.id === productId);

  // Dynamic SEO Title
  useEffect(() => {
    if (product) {
      document.title = `Coffee Break | ${product.name}`;
    } else {
      document.title = 'Coffee Break | Product Not Found';
    }
  }, [product]);

  // Reset added state if product changes
  useEffect(() => {
    setAdded(false);
    setQuantity(1);
  }, [productId]);

  // Handle Quantity
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    setAdded(false);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    setAdded(false);
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);

    // Reset the success state after 2 seconds
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  // Not Found State
  if (!product) {
    return (
      <div className={styles.notFoundContainer}>
        <div className={`container ${styles.notFoundContent}`}>
          <h1 className={styles.notFoundTitle}>Product Not Found</h1>
          <p className={styles.notFoundText}>
            We couldn't find the coffee you're looking for. It may have been removed or the URL is
            incorrect.
          </p>
          <Link to="/menu" className={styles.backToMenuButton}>
            Return to Menu
          </Link>
        </div>
      </div>
    );
  }

  // Product Details State
  return (
    <div className={styles.productDetailsPage}>
      <div className={`container ${styles.detailsContainer}`}>
        {/* Left Column: Image */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <img
              src={product.image}
              alt={`${product.name} image`}
              className={styles.productImage}
            />
          </div>
        </div>

        {/* Right Column: Info */}
        <div className={styles.infoColumn}>
          <div className={styles.breadcrumb}>
            <Link to="/menu" className={styles.breadcrumbLink}>
              Menu
            </Link>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbCurrent}>{product.name}</span>
          </div>

          <span className={styles.productCategory}>{product.category}</span>
          <h1 className={styles.productTitle}>{product.name}</h1>
          <span className={styles.productPrice}>{product.price}</span>

          <p className={styles.productDescription}>{product.description}</p>

          <div className={styles.purchaseSection}>
            <div className={styles.quantityWrapper}>
              <span className={styles.quantityLabel}>Quantity</span>
              <div className={styles.quantityControls}>
                <button
                  className={styles.quantityButton}
                  onClick={handleDecrement}
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className={styles.quantityDisplay} aria-live="polite">
                  {quantity}
                </span>
                <button
                  className={styles.quantityButton}
                  onClick={handleIncrement}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <button
              className={`${styles.addToCartButton} ${added ? styles.addedSuccess : ''}`}
              onClick={handleAddToCart}
              aria-label={`Add ${quantity} ${product.name} to cart`}
              disabled={added}
            >
              {added ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
