import { useState } from 'react';
import styles from './Testimonials.module.css';
import { testimonials } from '../../../data/testimonials';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={`container ${styles.testimonialsContainer}`}>
        <div className={styles.headerArea}>
          <h2 className={styles.mainHeading}>Customer Reviews</h2>
          <p className={styles.subHeading}>What our coffee lovers are saying</p>
        </div>

        <div className={styles.sliderContainer}>
          <button
            className={styles.navButton}
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            &#8592;
          </button>

          <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>&ldquo;</div>

            <p className={styles.quoteText}>{testimonials[activeIndex].quote}</p>

            <div className={styles.customerProfile}>
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className={styles.customerImage}
              />
              <div className={styles.customerInfo}>
                <h4 className={styles.customerName}>{testimonials[activeIndex].name}</h4>
                <span className={styles.customerRole}>{testimonials[activeIndex].role}</span>
              </div>
            </div>
          </div>

          <button
            className={styles.navButton}
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            &#8594;
          </button>
        </div>

        {/* Pagination Dots (Optional, matching typical reference styling) */}
        <div className={styles.paginationDots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
