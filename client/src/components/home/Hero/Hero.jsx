import styles from './Hero.module.css';
import heroCoffeeImg from '../../../assets/images/hero/hero-coffee.jpg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <h2 className={styles.subheading}>Discover the Power of real</h2>
          <h1 className={`script-font ${styles.mainHeading}`}>Coffee</h1>
          <p className={styles.description}>
            Our carefully curated coffee is designed to give you the energy and focus you need to
            maximize your productivity. Say goodbye to sluggish mornings and hello to a sharper,
            more alert you.
          </p>
          <button className={styles.ctaButton}>Order Now</button>
        </div>

        {/* Right Content / Image */}
        <div className={styles.rightContent}>
          <div className={styles.imageWrapper}>
            <img
              src={heroCoffeeImg}
              alt="Luxurious dark coffee in a glass cup"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
