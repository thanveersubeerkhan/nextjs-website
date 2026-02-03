import PageHero from '@/components/sections/PageHero';
import ContactFormSection from '@/components/sections/ContactFormSection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';

export default function ContactPage() {
    return (
        <div className="bg-background transition-colors duration-500">
            <PageHero
                title="Contact Us"
                subtitle="Let's discuss your next project. We're here to help you grow with Slash Info Tech."
            />

            <section className="section-padding">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                        <div className="lg:col-span-1">
                            <ContactInfoSection />
                        </div>
                        <div className="lg:col-span-2">
                            <ContactFormSection />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map View Placeholder */}
            <section className="h-[400px] bg-muted w-full relative overflow-hidden border-y border-border">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-bold italic">
                    [Interactive Office Maps - Erode & Coimbatore]
                </div>
            </section>
        </div>
    );
}
