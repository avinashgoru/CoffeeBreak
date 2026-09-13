import styles from './Offer.module.css';

const Offer = () => {
  return (
    <section className={styles.offerSection}>
      <div className={`container ${styles.offerContainer}`}>
        {/* Left: Promotional Content */}
        <div className={styles.contentWrapper}>
          <span className={`script-font ${styles.offerLabel}`}>Offer</span>
          <h2 className={styles.mainHeading}>Up to 50% off</h2>
          <p className={styles.description}>
            Experience the finest premium coffee blends delivered straight to your door. Take
            advantage of our exclusive seasonal offer and elevate your daily coffee ritual today.
          </p>
          <button className={styles.shopButton}>Shop Now</button>
        </div>

        {/* Right: Visual Area */}
        <div className={styles.imageWrapper}>
          <img
            src="https://placehold.co/600x600/3E2723/FFF8E1?text=Promotional+Coffee+Image"
            alt="Premium coffee bags on display"
            className={styles.offerImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Offer;
