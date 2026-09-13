import styles from './WhyDifferent.module.css';

const FeatureCard = ({ title, description, iconType }) => {
  // Minimalist, elegant SVG icons matching the dark brown theme
  const renderIcon = () => {
    switch (iconType) {
      case 'beans':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.iconSvg}
          >
            <path d="M10 2c-3 0-6 2-7 6-1.5 6 1 12 7 14 3 0 6-2 7-6 1.5-6-1-12-7-14z" />
            <path d="M10 2c2 4 4 10 1 18" />
            <path d="M16 4c-1 0-3 1-3 3s1 4 4 5" />
            <path d="M16 4c1 2 2 5 .5 9" />
          </svg>
        );
      case 'quality':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.iconSvg}
          >
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            <circle cx="12" cy="8" r="3" />
          </svg>
        );
      case 'cup':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.iconSvg}
          >
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
            <line x1="6" y1="2" x2="6" y2="4" />
            <line x1="10" y1="2" x2="10" y2="4" />
            <line x1="14" y1="2" x2="14" y2="4" />
          </svg>
        );
      case 'price':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.iconSvg}
          >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
            <line x1="7" y1="7" x2="7.01" y2="7" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.featureCard}>
      <div className={styles.iconWrapper}>{renderIcon()}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default FeatureCard;
