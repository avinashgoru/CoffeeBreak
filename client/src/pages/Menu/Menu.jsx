import { useState, useMemo } from 'react';
import ProductCard from '../../components/home/Products/ProductCard';
import { products } from '../../data/products';
import styles from './Menu.module.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Hot Coffee', 'Cold Brew'];

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className={styles.menuPage}>
      {/* Menu Header / Small Hero */}
      <header className={styles.menuHeader}>
        <div className="container">
          <h1 className={styles.menuTitle}>Our Menu</h1>
          <p className={styles.menuSubtitle}>
            Discover our meticulously crafted beverages, made from the finest ethically sourced
            beans.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <section className={`container ${styles.menuSection}`}>
        {/* Category Filters */}
        <div className={styles.categoryContainer}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                activeCategory === category ? styles.activeCategory : ''
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className={styles.productGrid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State Fallback (Just in case) */}
        {filteredProducts.length === 0 && (
          <div className={styles.emptyState}>
            <p>No products found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Menu;
