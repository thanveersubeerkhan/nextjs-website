export type Service = {
  title: string;
  slug: string;
  description: string;
  icon?: string;
};

export const services: Service[] = [
  {
    title: "Web Design",
    slug: "web-design",
    description: "Visually stunning, user-friendly, and mobile-responsive website designs that reflect your brand identity.",
  },
  {
    title: "Web Development",
    slug: "web-development",
    description: "Fast, secure, and scalable websites built with the latest technologies for seamless functionality.",
  },
  {
    title: "Software Development",
    slug: "software-development",
    description: "Custom software solutions like GST billing, CRM, and ERP systems designed to streamline operations.",
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "High-performance Android and iOS apps built for engagement and long-term scalability.",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Strategic marketing and data-driven solutions to boost brand visibility and convert customers.",
  },
  {
    title: "UI/UX & Graphic Design",
    slug: "ui-ux-design",
    description: "Crafting intuitive digital experiences and brand visuals that inspire and engage.",
  }
];
