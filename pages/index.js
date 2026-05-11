// pages/index.js
import { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import styles from '../styles/ProductGrid.module.css'

const CATEGORIES = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
]

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [sortBy, setSortBy] = useState('default')

  // ── Fetch products using Axios ──────────────────────────
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
      } catch (err) {
        setError('Failed to load products. Please try again.')
        console.error('Axios fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // ── Category filter toggle ──────────────────────────────
  function toggleCategory(cat) {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  // ── Filter & Sort ───────────────────────────────────────
  const filtered = products
    .filter(p =>
      selectedCategories.length === 0 || selectedCategories.includes(p.category)
    )
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating.rate - a.rating.rate
      if (sortBy === 'name') return a.title.localeCompare(b.title)
      return 0
    })

  return (
    <>
      <Head>
        <title>Product Listing | MetroStore</title>
        <meta name="description" content="Shop the latest products at MetroStore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        <Header />

        {/* Page Header */}
        <div className={styles.pageHeader}>
          <div className={styles.pageTitle}>
            <span>Collection</span>
            All Products
          </div>
          <div className={styles.sortBar}>
            <label className={styles.sortLabel} htmlFor="sort">Sort by:</label>
            <select
              id="sort"
              className={styles.sortSelect}
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>

        {/* Main Layout */}
        <div className={styles.layout}>
          {/* Sidebar Filters */}
          <aside className={styles.sidebar}>
            <div className={styles.filterSection}>
              <p className={styles.filterTitle}>Category</p>
              {CATEGORIES.map(cat => (
                <div key={cat} className={styles.filterItem}>
                  <input
                    type="checkbox"
                    id={cat}
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <label htmlFor={cat}>{cat}</label>
                  <span className={styles.filterCount}>
                    ({products.filter(p => p.category === cat).length})
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.filterSection}>
              <p className={styles.filterTitle}>Price Range</p>
              {['Under ₹500', '₹500 – ₹2000', '₹2000 – ₹5000', 'Above ₹5000'].map(range => (
                <div key={range} className={styles.filterItem}>
                  <input type="checkbox" id={range} />
                  <label htmlFor={range}>{range}</label>
                </div>
              ))}
            </div>

            <div className={styles.filterSection}>
              <p className={styles.filterTitle}>Rating</p>
              {['4★ & above', '3★ & above', '2★ & above'].map(r => (
                <div key={r} className={styles.filterItem}>
                  <input type="checkbox" id={r} />
                  <label htmlFor={r}>{r}</label>
                </div>
              ))}
            </div>
          </aside>

          {/* Product Grid */}
          <main>
            {!loading && !error && (
              <p className={styles.resultCount}>
                Showing {filtered.length} of {products.length} products
              </p>
            )}
            <div className={styles.grid}>
              {loading && (
                <div className={styles.loadingContainer}>
                  <div className={styles.spinner} />
                  <p className={styles.loadingText}>Loading products…</p>
                </div>
              )}

              {error && (
                <div className={styles.error}>
                  <p>{error}</p>
                </div>
              )}

              {!loading && !error && filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
