# Component Documentation

This document provides a detailed overview of the reusable components and sections used in the Slash Info Tech website.

## 🧱 UI Components (`components/ui`)

These are the atomic building blocks of the application, designed to be reusable and theme-aware.

### `Button.tsx`
A versatile button component with multiple variants and sizes.
- **Props**:
  - `variant`: `primary` (default), `secondary`, `outline`, `ghost`
  - `size`: `sm`, `md` (default), `lg`
  - `children`: Button content
  - Standard HTML button attributes
- **Usage**:
  ```tsx
  <Button variant="outline" onClick={handleClick}>Click Me</Button>
  ```

### `Card.tsx`
A container component with consistent padding, border, and hover effects.
- **Props**:
  - `children`: Content inside the card
  - `className`: Additional classes
- **Key Features**: Auto-adapts to dark mode with `bg-card` and `border-border`.

### `Input.tsx` / `Textarea.tsx`
Form elements styled with theme-aware borders and focus states.
- **Props**: Standard HTML input/textarea attributes.
- **Key Features**: Focus ring uses the `--ring` variable (Brand Green).

### `ServiceCard.tsx`
Specialized card for displaying service highlights.
- **Props**: Accepts a `Service` object (title, slug, description, icon).
- **Behavior**: Clicking the card links to the specific service page. Includes a hover lift animation.

### `StatCard.tsx`
Displays a key statistic and its label.
- **Props**: `value` (e.g., "10+"), `label` (e.g., "Years Experience").

---

## 📄 Page Sections (`components/sections`)

These are larger, self-contained blocks used to construct pages.

### `HeroSection.tsx`
The main landing banner for the homepage.
- **Features**:
  - Dynamic background gradients.
  - Animated entrance for text and images.
  - "Get a Quote" CTA.

### `PageHero.tsx`
A reusable header section for internal pages (About, Contact, Services).
- **Props**:
  - `title`: Main heading.
  - `subtitle`: Optional sub-heading.
- **Usage**:
  ```tsx
  <PageHero title="About Us" subtitle="Our Story..." />
  ```

### `ServicesSection.tsx`
Displays a grid of all available services.
- **Data Source**: Pulls from `data/services.ts`.
- **Layout**: Uses `smart-grid` utility for responsive columns.

### `IndustriesSection.tsx`
Showcases the industries served (e.g., Healthcare, Education).
- **Layout**: Uses `smart-grid-compact` for a dense, visually appealing grid.

### `ContactFormSection.tsx`
A fully functional contact form.
- **Features**:
  - Name, Email, Phone, Budget, Message fields.
  - "File Upload" simulation styled as a premium dropzone.
  - Success state upon submission (mock).

### `ContactInfoSection.tsx`
Displays office addresses (Erode & Coimbatore) and contact methods.
- **Icons**: Uses `lucide-react` for consistent iconography.

---

## 📐 Layout Components (`components/layout`)

### `Header.tsx`
The primary navigation bar.
- **Features**:
  - **Sticky**: Remains fixed at the top.
  - **Active State**: Highlights the current page/section.
  - **Mobile Menu**: Full-screen overlay with smooth slide animation (`z-index: 100`).
  - **Services Dropdown**: Desktop hover menu for service direct links.

### `Footer.tsx`
The site footer.
- **Features**:
  - Brand branding (Slash Info Tech).
  - Quick links to all pages.
  - Social media icons with hover effects.
  - Address details for both office locations.

### `ThemeProvider.tsx`
Wraps the application to provide theme context (`next-themes`).
- **Configuration**:
  - `attribute="class"`: Adds `.dark` class to HTML tag.
  - `enableSystem`: Respects OS preference.

### `ThemeToggle.tsx`
A button that toggles between Light and Dark modes.
- **Icon**: Animates between Sun and Moon icons.

---

## 🎨 Theming System (`app/globals.css`)

The site uses a customized CSS variable system mapped to Tailwind.

### Key Variables
| Token | Description | Light Mode | Dark Mode |
|-------|-------------|------------|-----------|
| `--background` | Page bg | White | #0a0a0a |
| `--foreground` | Main text | #0a0a0a | #fafafa |
| `--primary` | Brand Color | Green (600) | Green (500) |
| `--muted` | Secondary bg | #f5f5f5 | #262626 |

### Utility Classes
- `.section-padding`: Standardized top/bottom padding for all sections.
- `.smart-grid`: Automatically creates responsive grid columns based on available width.
