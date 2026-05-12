# 🛍️ Product Listing Page — Next.js

A dynamic product listing page built with **Next.js**, **Axios**, and deployed on **Netlify**. Products are fetched from the [FakeStore API](https://fakestoreapi.com/products) and displayed in a responsive 4-column grid with filter and sort functionality.

---

## 🖥️ Live Demo
**[View Live Site](https://stunning-medovik-f4f349.netlify.app)**

---

## ✨ Features

- ✅ Dynamic product listing via Axios + REST API
- ✅ 4-column responsive product grid
- ✅ Bookmark (wishlist) toggle per card
- ✅ Add-to-cart toggle per card
- ✅ Category filter sidebar
- ✅ Sort by price, rating, name
- ✅ INR price display with 50% discount label
- ✅ Loading spinner and error state
- ✅ Mobile-responsive layout

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 13** | React framework (pages router) |
| **Axios** | HTTP client for REST API |
| **CSS Modules** | Scoped component styling |
| **FakeStore API** | Product data source |
| **Netlify** | Deployment platform |
| **Git + GitHub** | Version control |

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 16
- npm ≥ 7

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/raghavharikesh/product-listing-page.git
cd product-listing-page

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Project Structure

```
product-listing-page/
├── components/
│   ├── Header.js          # Navigation header
│   └── ProductCard.js     # Individual product card
├── pages/
│   ├── _app.js            # App wrapper + global styles
│   └── index.js           # Main page — Axios fetch + grid
├── styles/
│   ├── globals.css        # CSS variables + resets
│   ├── Header.module.css  # Header styles
│   ├── ProductCard.module.css
│   └── ProductGrid.module.css
├── next.config.js         # Next.js config (image domains)
├── netlify.toml           # Netlify build config
└── README.md
```

---

## 🌐 Deploying to Netlify

### Option A — Netlify UI (Recommended for beginners)

1. Push your code to a **public GitHub repository**
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Connect your GitHub account and select the repository
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Click **Deploy site**
6. Netlify auto-installs `@netlify/plugin-nextjs` via `netlify.toml`

### Option B — Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build and deploy
npm run build
netlify deploy --prod --dir=.next
```

---

## 📡 API Used

**FakeStore API** — `https://fakestoreapi.com/products`

Returns an array of product objects:
```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack",
  "price": 109.95,
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fAn...",
  "rating": { "rate": 3.9, "count": 120 }
}
```

---

## 👤 Author

- **Framework:** Next.js (React)
- **API:** Axios + FakeStore REST API

---

## 📄 License

MIT
