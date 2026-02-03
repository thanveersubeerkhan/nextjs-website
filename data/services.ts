export type Service = {
  title: string;
  slug: string;
  description: string;
  icon?: string;
};

export const services: Service[] = [
    {
        title: "Business Websites",
        description: "Professional and goal-driven websites that build your brand’s digital identity and convert visitors into customers.",
        icon: "💼",
        slug: "business-websites",
    },
    {
        title: "Magazine Websites",
        description: "Visually dynamic and content-rich designs tailored for publishers, blogs, and online magazines.",
        icon: "📰",
        slug: "magazine-websites",
    },
    {
        title: "E-commerce Websites",
        description: "Feature-rich online stores built for smooth transactions, product management, and responsive user journeys.",
        icon: "🛒",
        slug: "ecommerce-websites",
    },
    {
        title: "Blogs",
        description: "SEO-optimized blogging platforms to express your ideas, boost visibility, and grow your audience organically.",
        icon: "✍️",
        slug: "blogs",
    },
    {
        title: "Portfolio Websites",
        description: "Elegant portfolios that highlight your work beautifully — perfect for creatives, artists, and freelancers.",
        icon: "🎨",
        slug: "portfolio-websites",
    },
    {
        title: "Landing Pages",
        description: "High-impact landing pages designed to promote offers, capture leads, and drive conversions effectively.",
        icon: "🚀",
        slug: "landing-pages",
    },
    {
        title: "Social Media Websites",
        description: "Interactive social and community websites that foster engagement, sharing, and real-time interaction.",
        icon: "🌐",
        slug: "social-media-websites",
    },
    {
        title: "Directory & Contact Pages",
        description: "Structured directories with smart filters, maps, and responsive contact forms for effortless communication.",
        icon: "📇",
        slug: "directory-contact-pages",
    },
];
