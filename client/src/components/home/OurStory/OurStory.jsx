import styles from './OurStory.module.css';
import storyCoffeeImg from '../../../assets/images/story/story-coffee.jpg';

const OurStory = () => {
  return (
    <section className={styles.storySection}>
      <div className={`container ${styles.storyContainer}`}>
        {/* Main Story Card */}
        <div className={styles.storyCard}>
          {/* Left: Image */}
          <div className={styles.imageWrapper}>
            <img
              src={storyCoffeeImg}
              alt="A warm cup of coffee with latte art on a wooden table"
              className={styles.storyImage}
            />
          </div>

          {/* Right: Content */}
          <div className={styles.contentWrapper}>
            <h2 className={`script-font ${styles.heading}`}>Our Story</h2>

            <div className={styles.textContent}>
              <p>
                Coffee Break Is An Online Coffee Store That Offers The Widest Selection Of Specialty
                Coffees From Around The World.
              </p>
              <p>
                From Medium-Dark Roast Single Origin To Heaviest Blended Beans, They Offer A Variety
                Of Ethically Sourced Products To Tantalize Any Customer's Palate. For Those Looking
                For Unique Brewing Equipment, Coffee Break Also Carries A Full Range Of Quality
                Espresso Makers, Grinders And More.
              </p>
              <p>On Top Of All That, Their Baristas Are Highly Trained Professionals Who...</p>
            </div>

            <a href="#" className={styles.moreLink}>
              More
            </a>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className={styles.carouselIndicators}>
          <span
            className={`${styles.dot} ${styles.active}`}
            aria-label="Slide 1"
            role="button"
            tabIndex="0"
          ></span>
          <span className={styles.dot} aria-label="Slide 2" role="button" tabIndex="0"></span>
          <span className={styles.dot} aria-label="Slide 3" role="button" tabIndex="0"></span>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
