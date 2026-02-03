export type ServicePageConfig = {
  title: string;
  heroSubtitle: string;
  sections: {
    overview?: { layout: 'default' | 'split' | 'media-heavy' };
    whyChooseUs?: boolean;
    offerings?: { variant: 'grid' | 'list' };
    process?: boolean;
    cta?: { variant: 'default' | 'dark' | 'gradient' };
  };
};

export const servicePages: Record<string, ServicePageConfig> = {
  "web-design": {
    title: "Web Design Services",
    heroSubtitle: "Visually stunning, user-friendly, and mobile-responsive designs in Erode & Coimbatore.",
    sections: {
      overview: { layout: 'split' },
      whyChooseUs: true,
      offerings: { variant: 'grid' },
      process: true,
      cta: { variant: 'default' }
    }
  },
  "web-development": {
    title: "Web Development",
    heroSubtitle: "Scalable, secure, and high-performance websites built for businesses in South India.",
    sections: {
      overview: { layout: 'media-heavy' },
      whyChooseUs: true,
      offerings: { variant: 'grid' },
      process: true,
      cta: { variant: 'gradient' }
    }
  },
  "software-development": {
    title: "Software Development",
    heroSubtitle: "Empowering Your Business with Smart, Scalable Software Solutions from Slash Info Tech.",
    sections: {
      overview: { layout: 'split' },
      whyChooseUs: true,
      offerings: { variant: 'grid' },
      process: true,
      cta: { variant: 'dark' }
    }
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    heroSubtitle: "Smart Web & Mobile App Development for the Modern Digital World.",
    sections: {
      whyChooseUs: true,
      offerings: { variant: 'grid' },
      process: true,
      cta: { variant: 'default' }
    }
  },
  "digital-marketing": {
    title: "Digital Marketing",
    heroSubtitle: "Strategic digital marketing and data-driven solutions in Erode and Coimbatore.",
    sections: {
      overview: { layout: 'default' },
      whyChooseUs: true,
      offerings: { variant: 'grid' },
      process: true,
      cta: { variant: 'gradient' }
    }
  },
  "ui-ux-design": {
    title: "UI/UX & Graphic Design",
    heroSubtitle: "Crafting Digital Experiences That Inspire, Engage & Convert Globally.",
    sections: {
      overview: { layout: 'split' },
      whyChooseUs: true,
      offerings: { variant: 'grid' },
      process: true,
      cta: { variant: 'dark' }
    }
  }
};
