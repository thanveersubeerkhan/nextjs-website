export type Service = {
  title: string;
  slug: string;
  description: string;
  icon?: string;
};

export const services: Service[] = [
    // {
    //     title: "Web Design",
    //     description: "Visually stunning and user-friendly designs tailored for your brand.",
    //     icon: "🎨",
    //     slug: "web-design",
    // },
    {
        title: "Mobile App & Web Development",
        description: "Scalable websites and high-performance mobile apps built for the modern world.",
        icon: "💻",
        slug: "web-development",
    },
    {
        title: "Software Development",
        description: "Custom software solutions to automate and grow your business.",
        icon: "⚙️",
        slug: "software-development",
    },
    /* {
        title: "Mobile App Development",
        description: "Innovative mobile apps for iOS and Android platforms.",
        icon: "📱",
        slug: "mobile-app-development",
    }, */
    {
        title: "Digital Marketing",
        description: "Strategic marketing solutions to boost your online presence.",
        icon: "📈",
        slug: "digital-marketing",
    },
    {
        title: "UI/UX & Graphic Design",
        description: "Crafting intuitive digital experiences and compelling brand identities.",
        icon: "✨",
        slug: "ui-ux-design",
    },
];
