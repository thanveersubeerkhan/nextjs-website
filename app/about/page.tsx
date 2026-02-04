import PageHero from '@/components/sections/PageHero';
import CTASection from '@/components/sections/CTASection';
import AboutWorkflow from '@/components/sections/AboutWorkflow';
import StatsSection from '@/components/sections/StatsSection';
import AboutWhyChooseUs from '@/components/sections/AboutWhyChooseUs';
import DifferentiatorsSection from '@/components/sections/DifferentiatorsSection';
import { ChevronRight } from 'lucide-react';

export default function AboutPage() {
    const services = [
        "Website Development", "Software Development", "Mobile Application",
        "Marketing", "Social Media", "UI UX Design",
        "eCommerce Store", "Tech Support", "Meta ADS", "WordPress Developments"
    ];

    return (
        <div className="bg-background transition-colors duration-500">
            <PageHero
                title="About Us"
                subtitle="Welcome to The Digital Transformation"
            />

            {/* Who Are We & Mission Section */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                        {/* Who Are We - 1 Col */}
                        <div className="lg:col-span-1 space-y-6">
                            <h3 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-4">Who Are We</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We are more than just a web design company — we are your digital growth partners. At <strong className="text-foreground">Slash Info Tech</strong>, our mission is to transform every vision into a powerful online presence. Our experienced team blends design thinking, technical expertise, and local insights to deliver websites and digital platforms that inspire, engage, and perform.
                            </p>
                        </div>

                        {/* Mission - 1 Col */}
                        <div className="lg:col-span-1 space-y-6">
                            <h3 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-4">Our Mission</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Our mission is to empower businesses through innovative technology and creative excellence. We aim to build digital solutions that not only look stunning but also deliver real results. Every project we undertake is guided by a commitment to quality, customer satisfaction, and continuous innovation.
                            </p>
                        </div>

                        {/* What We Do - 1 Col */}
                        <div className="lg:col-span-1 space-y-6">
                            <h3 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-4">What We Do</h3>
                            <ul className="space-y-3">
                                {services.map((getService, idx) => (
                                    <li key={idx} className="flex items-center text-muted-foreground group">
                                        <ChevronRight className="w-4 h-4 text-primary mr-2 group-hover:translate-x-1 transition-transform" />
                                        <span className="group-hover:text-primary transition-colors">{getService}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <AboutWorkflow />

            <AboutWhyChooseUs />

            <DifferentiatorsSection />

            <StatsSection />

            {/* <CTASection variant="gradient" /> */}
        </div>
    );
}
