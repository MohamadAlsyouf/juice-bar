<div align="center">

# 🍹 Juice Bar

### Fresh Squeezed Juices in Anaheim, CA

_Experience the pure taste of freshly squeezed juices made with love — serving Los Angeles & Orange County._

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

</div>

---

## ✨ Features

- 🖼️ **Hero Image Carousel** — Auto-rotating showcase with smooth transitions and navigation controls
- 📱 **Fully Responsive** — Beautiful experience on desktop, tablet, and mobile
- 🍊 **Interactive Menu** — Browse 7 fresh juice options with health benefits and pricing
- 📋 **Catering Packages** — Three-tier catering system with an inquiry form
- 👥 **About Page** — Company story, team bios, values, and service area
- 🎨 **Modern UI** — Clean, green-themed design with gradients, shadows, and hover effects
- ⚡ **Lightning Fast** — Powered by Vite for instant HMR and optimized builds

---

## 📄 Pages

| Page            | Route       | Description                                                       |
| --------------- | ----------- | ----------------------------------------------------------------- |
| 🏠 **Home**     | `/`         | Hero carousel, welcome section, features, popular juices, and CTA |
| 🥤 **Menu**     | `/menu`     | Full juice menu with prices, descriptions, and health benefits    |
| 💚 **About**    | `/about`    | Story, values, team, and service area across LA & OC              |
| 🎉 **Catering** | `/catering` | Packages (Basic, Premium, Ultimate) and booking inquiry form      |

---

## 🧃 Menu Offerings

| Juice                       | Price |
| --------------------------- | ----- |
| 🎋 Sugarcane Juice          | $x.99 |
| 🍊 Orange Juice             | $x.99 |
| 🥭 Mango Juice              | $x.99 |
| 🍋 Lemon Juice              | $x.99 |
| 🍃 Lemon & Mint Juice       | $x.99 |
| 🍓 Strawberry & Lemon Juice | $x.49 |
| 🍉 Watermelon Juice         | $x.99 |

> Available in **Small** (12 oz), **Regular** (16 oz), and **Large** (24 oz).

---

## 🛠️ Tech Stack

| Technology                                           | Purpose                 |
| ---------------------------------------------------- | ----------------------- |
| [React 19](https://react.dev/)                       | UI library              |
| [Vite 7](https://vite.dev/)                          | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com/)           | Utility-first styling   |
| [React Router 7](https://reactrouter.com/)           | Client-side routing     |
| [Cloudflare Pages](https://pages.cloudflare.com/)    | Hosting & deployment    |
| [Poppins](https://fonts.google.com/specimen/Poppins) | Typography              |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/juice-bar.git

# Navigate to the project
cd juice-bar

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

The app will be running at **http://localhost:5173**.

### Build & Preview

```bash
# Create a production build
npm run build

# Preview the production build locally
npm run preview
```

### Deploy

```bash
# Build and deploy to Cloudflare Pages
npm run deploy
```

---

## 📁 Project Structure

```
juice-bar/
├── public/
│   └── favicon.svg            # Custom juice bar favicon
├── src/
│   ├── components/
│   │   ├── Footer.jsx         # Site-wide footer with links & social icons
│   │   ├── ImageCarousel.jsx  # Auto-rotating hero image carousel
│   │   └── Navbar.jsx         # Responsive sticky navigation bar
│   ├── pages/
│   │   ├── About.jsx          # About us page
│   │   ├── Catering.jsx       # Catering packages & inquiry form
│   │   ├── Home.jsx           # Landing page
│   │   └── Menu.jsx           # Full juice menu
│   ├── App.jsx                # Root component with routing
│   ├── index.css              # Global styles & Tailwind imports
│   └── main.jsx               # React entry point
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
├── wrangler.jsonc             # Cloudflare Pages config
└── package.json               # Dependencies & scripts
```

---

## 📜 Available Scripts

| Script    | Command           | Description                        |
| --------- | ----------------- | ---------------------------------- |
| `dev`     | `npm run dev`     | Start development server with HMR  |
| `build`   | `npm run build`   | Create optimized production build  |
| `preview` | `npm run preview` | Preview production build locally   |
| `lint`    | `npm run lint`    | Run ESLint checks                  |
| `deploy`  | `npm run deploy`  | Build & deploy to Cloudflare Pages |

---

<div align="center">

Made with 💚 in Anaheim, California

</div>
