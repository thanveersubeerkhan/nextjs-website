# Slash Info Tech - Corporate Website

Welcome to the official repository for the **Slash Info Tech** corporate website. This modern, high-performance web application is built with **Next.js 15+** and **Tailwind CSS v4**, designed to showcase our web design and software development services in Erode and Coimbatore.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.
- **Centralized Theming**: Robust Dark/Light mode support using CSS variables and `next-themes`.
- **Responsive Design**: Mobile-first architecture with "Smart Grids" that adapt seamlessly to any device.
- **Premium UI**: Custom-built components with smooth animations and transitions.
- **SEO Optimized**: Semantic HTML and optimized metadata for better search engine visibility.
- **Dual Location Support**: Integrated context for both Erode and Coimbatore offices.

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Theme Management**: `next-themes`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 📂 Project Structure

```bash
/app
  ├── /about              # About Us page
  ├── /contact            # Contact page
  ├── /services           # Service listing & dynamic slug pages
  ├── /privacy-policy     # Privacy Policy page
  ├── /terms              # Terms & Conditions page
  ├── globals.css         # Global styles & CSS variables
  ├── layout.tsx          # Root layout with ThemeProvider
  └── page.tsx            # Homepage
/components
  ├── /layout             # Header, Footer, ThemeToggle
  ├── /sections           # Page sections (Hero, Services, CTA, etc.)
  └── /ui                 # Reusable UI components (Button, Card, Input)
/data                     # Static data files (services, stats, workflow)
```

## ⚡ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-repo/slash-info-tech.git
    cd slash-info-tech
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎨 Theming System

We use a **CSS Variable** approach for theming, similar to `shadcn/ui`.

-   All colors are defined in `app/globals.css` as HSL values.
-   The application supports system preference detection and manual toggling.
-   **Key Variables:**
    -   `--background` / `--foreground`: Base page colors.
    -   `--primary` / `--primary-foreground`: Brand accent color (Slash Green).
    -   `--muted` / `--muted-foreground`: Secondary text and backgrounds.
    -   `--card`: Background for card components.

## 🧩 Key Components

-   **Header**: Fixed, always-visible navigation with mobile menu overlay.
-   **Footer**: Theme-aware footer with social links and office addresses.
-   **HeroSection**: Immersive landing area with dynamic gradients.
-   **ServicePage**: Dynamic template (`app/services/[slug]/page.tsx`) that renders content based on `data/servicePages.ts`.

## 📜 Legal & Compliance

This project includes dedicated pages for:
-   **Privacy Policy**: `/privacy-policy`
-   **Terms & Conditions**: `/terms-and-conditions`

## 👥 Authors

**Slash Info Tech Team**
*Turning ideas into impactful digital experiences.*
