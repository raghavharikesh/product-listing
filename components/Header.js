// components/Header.js
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logo}>
          METRO<span>STORE</span>
        </div>

        {/* Nav */}
        <nav>
          <ul className={styles.nav}>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Bags</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Sale</a></li>
          </ul>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          {/* Search */}
          <button className={styles.iconBtn} aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          {/* Wishlist */}
          <button className={styles.iconBtn} aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          {/* Cart */}
          <button className={styles.iconBtn} aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
