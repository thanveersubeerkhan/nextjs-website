import PageHero from '@/components/sections/PageHero';
import ContactFormSection from '@/components/sections/ContactFormSection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import ContactStepsSection from '@/components/sections/ContactStepsSection';

export default function ContactPage() {
    return (
        <div className="bg-background transition-colors duration-500">
            <PageHero
                title="Contact Us"
                subtitle="Contact for Premium Business Services"
                backgroundImage="https://ryanquantum.com/wp-content/uploads/2025/10/img-workspace-16.jpg"
            />

            <section className="section-padding pb-0">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                        {/* Left: Form */}
                        <div className="order-2 lg:order-1">
                            <ContactFormSection />
                        </div>
                        {/* Right: Info & GIF */}
                        <div className="order-1 lg:order-2">
                            <ContactInfoSection />
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Width Map Section */}
            <section className="w-full h-[400px] lg:h-[500px] mt-20 relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.758652676644!2d77.726207!3d11.350812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIxJzAyLjkiTiA3N8KwNDMnMzQuNCJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                ></iframe>
            </section>

            {/* 3-Step Grid Section */}
            <ContactStepsSection />
            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/919698548633"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
                aria-label="Chat on WhatsApp"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </a>
        </div>
    );
}
