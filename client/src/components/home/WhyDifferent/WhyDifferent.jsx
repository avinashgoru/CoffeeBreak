import styles from './WhyDifferent.module.css';
import { features } from '../../../data/features';
import FeatureCard from './FeatureCard';

const WhyDifferent = () => {
  return (
    <section className={styles.whySection}>
      <div className={`container ${styles.whyContainer}`}>
        {/* Headings */}
        <div className={styles.headerArea}>
          <h2 className={styles.mainHeading}>Why are we different?</h2>
          <p className={styles.subHeading}>We don't just make your coffee, we make your day!</p>
        </div>

        {/* Feature Grid */}
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              iconType={feature.iconType}
            />
          ))}
        </div>

        {/* Bottom CTA Area */}
        <div className={styles.bottomArea}>
          <p className={styles.supportingText}>
            Great ideas start with great coffee. Lets help you achieve that
          </p>
          <p className={styles.boldText}>Get started today.</p>
          <button className={styles.joinButton}>Join Us</button>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
