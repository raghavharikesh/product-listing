// components/ProductCard.js
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/ProductCard.module.css'

// Compute a fake "original" price (always higher than current)
function getOriginalPrice(price) {
  return (price * 2).toFixed(2)
}

// Convert USD to INR for display (approximate)
function toINR(usd) {
  const inr = Math.round(usd * 83)
  return inr.toLocaleString('en-IN')
}

export default function ProductCard({ product }) {
  const [saved, setSaved] = useState(false)
  const [added, setAdded] = useState(false)

  const originalUSD = getOriginalPrice(product.price)
  const discountPct = 50

  function handleBookmark(e) {
    e.stopPropagation()
    setSaved(prev => !prev)
  }

  function handleCart(e) {
    e.stopPropagation()
    setAdded(prev => !prev)
  }

  return (
    <div className={styles.card}>
      {/* Image */}
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
        {/* Bookmark */}
        <button
          className={`${styles.bookmarkBtn} ${saved ? styles.saved : ''}`}
          onClick={handleBookmark}
          aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={saved ? '#1a1a1a' : 'none'} stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>

        {/* Category badge */}
        <span className={styles.badge}>
          {product.category}
        </span>
      </div>

      {/* Info */}
      <div className={styles.info}>
        <p className={styles.name}>{product.title}</p>

        <div className={styles.priceRow}>
          <div className={styles.priceGroup}>
            <span className={styles.price}>₹{toINR(product.price)}</span>
            <span className={styles.original}>₹{toINR(originalUSD)}</span>
            <span className={styles.discount}>{discountPct}% Off</span>
          </div>

          {/* Cart button */}
          <button
            className={`${styles.cartBtn} ${added ? styles.added : ''}`}
            onClick={handleCart}
            aria-label={added ? 'Remove from cart' : 'Add to cart'}
          >
            {added ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
                <line x1="12" y1="14" x2="12" y2="20"/>
                <line x1="9" y1="17" x2="15" y2="17"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
