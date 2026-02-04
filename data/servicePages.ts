export type ServicePageConfig = {
  title: string;
  heroSubtitle: string;
  heroImage?: string;
  heroGradient?: string;
  sections: {
    overview?: { 
      layout: 'default' | 'split' | 'media-heavy';
      title?: string;
      paragraphs?: string[]; // Support multiple paragraphs
      image?: string;
    };
    whyChooseUs?: {
      title?: string;
      variant?: 'default' | 'flip' | 'grid'; // Add grid variant support
      items?: Array<{
        title: string;
        description: string;
        backTitle?: string;
        backDescription?: string;
      }>;
    } | boolean;
    offerings?: { 
      variant: 'grid' | 'list' | 'icon-box' | 'floating-grid'; // Add floating-grid variant
      title?: string;
      items?: Array<{
        title: string;
        icon?: string | React.ReactNode; 
        description?: string;
      }>;
    };
    specializedServices?: {
      title?: string;
      items: Array<{
        title: string;
        description: string;
        icon?: string | React.ReactNode;
        bgColor?: string;
      }>;
    };
    process?: {
      title?: string;
      items: Array<{
        title: string;
        description: string;
        icon?: string | React.ReactNode;
      }>;
    } | boolean;
    faq?: {
      title?: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
    cta?: { 
      variant: 'default' | 'dark' | 'gradient';
      title?: string;
      description?: string;
    };
  };
};

export const servicePages: Record<string, ServicePageConfig> = {
  "digital-marketing": {
    title: "Digital Marketing Services",
    heroSubtitle: "Transform Your Online Presence & Grow Your Business",
    sections: {
      overview: { 
        layout: 'split',
        title: "Why Digital Marketing?",
        paragraphs: [
          "In today’s competitive digital world, your customers are searching, browsing, and making decisions online. Our digital marketing services ensure that your brand reaches the right audience at the right time — and converts them into loyal customers. With a mix of strategy, creativity, analytics, and cutting-edge tools, we help businesses achieve measurable online growth.",
          "Our core strength lies in combining strategic thinking, creative execution, and advanced analytics to deliver digital marketing that truly drives business growth. We focus on understanding your audience, analyzing competition, and creating campaigns that not only attract attention but also deliver measurable results. From boosting website rankings to converting visitors into customers, we ensure every digital touchpoint contributes to your success."
        ],
        image: "https://ryanquantum.com/wp-content/uploads/2025/11/Untitled-design-10.gif"
      },
      offerings: { 
        variant: 'floating-grid',
        title: "our Service",
        items: [
          { title: "Search Engine Optimization (SEO)", icon: "🔍" },
          { title: "Social Media Marketing (SMM)", icon: "📱" },
          { title: "Content Marketing", icon: "✍️" },
          { title: "Email Marketing", icon: "✉️" },
          { title: "Pay-Per-Click Advertising (PPC)", icon: "💰" },
          { title: "Website Conversion Optimization", icon: "⚙️" }
        ]
      },
      specializedServices: {
        title: "Our Specialized Digital Marketing Services",
        items: [
          { title: "Search Engine Optimization (SEO)", description: "Improve your website's visibility and attract high-intent customers with strategic SEO. We optimize your on-page content, technical structure, and backlinks to consistently boost your search rankings and organic traffic.", icon: "🌐", bgColor: "bg-[#6B46FE]" },
          { title: "Pay-Per-Click Advertising (PPC)", description: "Get instant leads and conversions with targeted Google Ads and paid campaigns. We plan, launch, and optimize PPC ads to maximize ROI while reducing wasted spend and improving overall campaign performance.", icon: "👆", bgColor: "bg-[#00B5D8]" },
          { title: "Social Media Marketing", description: "Build a strong online presence with engaging content, creative visuals, and data-driven strategies across platforms like Facebook, Instagram, and LinkedIn. We help your brand attract, engage, and convert followers into customers.", icon: "📣", bgColor: "bg-[#FF5C00]" },
          { title: "YouTube / Video Marketing", description: "Reach a wider audience with compelling video content, optimized YouTube channels, and targeted video ads. We produce engaging videos that increase visibility, strengthen your brand, and drive more conversions.", icon: "🎥", bgColor: "bg-[#A855F7]" },
          { title: "Content Marketing", description: "Deliver meaningful, high-value content that attracts, educates, and converts your audience. From blogs to website copy and creatives — our content strategies boost authority, SEO, and brand trust.", icon: "📄", bgColor: "bg-[#22C55E]" },
          { title: "Conversion Rate Optimization (CRO)", description: "Turn your website traffic into paying customers. We analyze user behavior, fix conversion barriers, and optimize UX/UI to improve leads, sales, and revenue without increasing ad spend.", icon: "🛡️", bgColor: "bg-[#F59E0B]" },
          { title: "LinkedIn Marketing", description: "Generate high-quality B2B leads and build authority with professional LinkedIn marketing. We optimize profiles, create valuable content, run targeted ads, and build strong industry connections.", icon: "💼", bgColor: "bg-[#0077B5]" },
          { title: "Influencer Marketing", description: "Enhance your brand reach with trusted influencers who match your audience. We handle influencer selection, collaboration, content, and tracking to deliver authentic exposure and real results.", icon: "▶️", bgColor: "bg-[#EC4899]" }
        ]
      },
      whyChooseUs: {
        title: "Why Choose Slash Info Tech",
        variant: 'flip',
        items: [
          { 
            title: "Data-Driven Approach", 
            description: "We use insights and analytics to build strategies that deliver real results.",
            backTitle: "Data-Driven",
            backDescription: "Every decision is backed by research and accurate data."
          },
          { 
            title: "Tailored Strategies", 
            description: "We create personalized digital marketing plans for your business goals.",
            backTitle: "Custom Plans",
            backDescription: "Unique strategies for your brand success."
          },
          { 
            title: "Transparent Reporting", 
            description: "You get detailed reports with clear campaign insights every month.",
            backTitle: "100% Transparent",
            backDescription: "Know how your campaigns perform anytime."
          },
          { 
            title: "Expert Team", 
            description: "Our skilled designers, strategists & marketers help your brand grow.",
            backTitle: "Specialists",
            backDescription: "A team dedicated to your success."
          },
          { 
            title: "Focus on ROI", 
            description: "We prioritize leads, conversions, and sales to maximize your revenue.",
            backTitle: "More Conversions",
            backDescription: "Our strategies focus on real business growth."
          }
        ]
      },
      process: {
        title: "Our Digital Marketing Process",
        items: [
          { title: "1. Research & Understanding", description: "We study your business, audience, competitors, and market trends to create a strong foundation.", icon: "🔍" },
          { title: "2. Strategy Development", description: "We build a customized digital marketing plan with channels, timelines, and performance goals.", icon: "🚀" },
          { title: "3. Content & Creative Planning", description: "We design engaging visuals, content, and ad creatives to connect with your target audience.", icon: "🎨" },
          { title: "4. Campaign Execution", description: "We launch SEO, ad campaigns, social media posts, and monitor them for optimal performance.", icon: "💻" },
          { title: "5. Analysis & Optimization", description: "We analyze metrics and user behavior to refine campaigns and maximize your return on investment.", icon: "📈" },
          { title: "6. Reporting & Growth Scaling", description: "You receive detailed reports with insights, while we refine the strategy to boost growth month by month.", icon: "📊" }
        ]
      },
      faq: {
        title: "Frequently Asked Questions — Digital Marketing",
        items: [
          { question: "What results can I expect from SEO and how long does it take?", answer: "SEO delivers sustainable organic traffic growth. You can expect to see significant rankings and traffic improvements typically within 3 to 6 months depending on competition." },
          { question: "How does Pay-Per-Click (PPC) advertising work for small budgets?", answer: "PPC is flexible and scales to any budget. For small budgets we focus on high-intent keywords to ensure every click counts toward a conversion." },
          { question: "Which social platforms should my business use?", answer: "It depends on your audience. B2B brands usually get the best results on LinkedIn, while B2C brands excel on Instagram, Facebook, and TikTok." },
          { question: "How do you measure campaign success?", answer: "We measure through KPIs aligned with your business goals: ROI, conversion rate, cost per acquisition, and engagement metrics." },
          { question: "Will you create content and creatives for ads?", answer: "Yes, we produce copy, images, banners, short videos, and high-converting landing pages for your campaigns." },
          { question: "Do you provide local SEO for small businesses?", answer: "Absolutely! Local SEO services include Google Business Profile optimization, local citations, and geo-targeted keywords." }
        ]
      },
      // cta: { 
      //   variant: 'gradient',
      //   title: "Ready to Accelerate Your Business Growth? Let’s Build Your Digital Success Story Together.",
      //   description: "At Slash Info Tech, we empower businesses across diverse industries through tailored digital solutions."
      // }
    }
  },
  // "web-design": {
  //   title: "Web Design Services",
  //   heroSubtitle: "Visually stunning, user-friendly, and mobile-responsive designs in Erode & Coimbatore.",
  //   sections: {
  //     overview: { layout: 'split' },
  //     whyChooseUs: true,
  //     offerings: { variant: 'grid' },
  //     process: true,
  //     cta: { variant: 'default' }
  //   }
  // },
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
  "ui-ux-design": {
    title: "UI/UX & Graphic Design",
    heroSubtitle: "Crafting Digital Experiences That Inspire, Engage & Convert Globally.",
    sections: {
      overview: { 
        layout: 'split',
        title: "Crafting Digital Experiences That Inspire, Engage & Convert",
        paragraphs: ["Let’s Design Something Extraordinary Together"],
        image: "https://ryanquantum.com/wp-content/uploads/2025/11/dashboard.gif"
      },
      offerings: { 
        variant: 'grid',
        title: "Key Design Stages",
        items: [
          { 
            title: "User Research & Analysis", 
            icon: "fas fa-user-check",
            description: "We dive deep into understanding your audience, their behavior, needs, challenges, and expectations."
          },
          { 
            title: "Wireframing & Prototyping", 
            icon: "wireframe",
            description: "We build intuitive wireframes and interactive prototypes that present the page layout, structure, and flow before the final design—saving time and ensuring clarity."
          },
          { 
            title: "UI/UX Design", 
            icon: "design",
            description: "We craft visually stunning, modern, and responsive interfaces using consistent design systems, smart color psychology, high-quality visuals, and brand-aligned elements."
          }
        ]
      },
      whyChooseUs: {
        title: "Why Choose Us for UI & UX Design?",
        variant: 'grid',
        items: [
          { title: "User-First Approach", description: "We solve real user problems with research-driven design strategies." },
          { title: "Clean, Modern & Trend-Ready", description: "From minimal to bold, we design for the future." },
          { title: "Pixel-Perfect Visuals", description: "We deliver premium and aesthetic designs that stand out." },
          { title: "Cross-Platform Consistency", description: "Mobile, tablet, or desktop—your design looks perfect everywhere." },
          { title: "Faster Conversions", description: "Better experience → more engagement → more sales." },
          { title: "Design System & Style Guide", description: "We deliver a complete design system with typography, color palettes, components." }
        ]
      },
      specializedServices: {
        title: "We Design Beautiful & User-Friendly Digital Experiences",
        items: [
          { title: "UI Design", description: "Clean, modern and responsive user interface design tailored for your brand.", icon: "ui", bgColor: "bg-[#9B59B6]" },
          { title: "UX Design", description: "Smart user flows, easy navigation and conversion-focused experience mapping.", icon: "ux", bgColor: "bg-[#1ABC9C]" },
          { title: "Graphic Design", description: "Brand visuals, icons, banner graphics and illustrations to enhance your UI.", icon: "graphic", bgColor: "bg-[#2ECC71]" },
          { title: "Wireframes", description: "Clickable prototypes and wireframes for better clarity before development.", icon: "wireframes", bgColor: "bg-[#F39C12]" },
          { title: "Design System", description: "Color palettes, style guides, components and full design documentation.", icon: "system", bgColor: "bg-[#2C3E50]" },
          { title: "Responsive Layout", description: "Optimized for all devices like mobile, tablet and desktop. Optimized for Speed & Usability", icon: "responsive", bgColor: "bg-[#E91E63]" }
        ]
      },
      cta: { variant: 'dark' }
    }
  }
};
