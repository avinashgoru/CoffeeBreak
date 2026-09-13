import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.brandName}>Coffee Break</h3>
            <p className={styles.brandDescription}>
              Elevating your daily coffee ritual with ethically sourced, meticulously roasted
              premium beans. Experience the art of coffee.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <Link to="/" className={styles.footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className={styles.footerLink}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>123 Artisan Avenue, NY 10001</li>
              <li className={styles.contactItem}>+1 (555) 123-4567</li>
              <li className={styles.contactItem}>hello@coffeebreak.com</li>
            </ul>
          </div>

          {/* Social Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Twitter"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Coffee Break. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
