"use client";

import { useState, useEffect } from 'react';
import PageHero from '@/components/sections/PageHero';
import ContactFormSection from '@/components/sections/ContactFormSection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import ContactStepsSection from '@/components/sections/ContactStepsSection';

export default function ContactPage() {
    const [isMapLoading, setIsMapLoading] = useState(true);

    // Fallback to ensure loading stops even if onLoad doesn't fire
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMapLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

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
            <section className="w-full h-[400px] lg:h-[500px] mt-20 relative bg-muted/20">
                {/* Skeleton Loader - Map Pattern */}
                {isMapLoading && (
                    <div className="absolute inset-0 z-10 animate-pulse bg-gray-200 dark:bg-gray-800 overflow-hidden">
                        {/* CSS Pattern to mimic roads/map */}
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: `linear-gradient(#fff 2px, transparent 2px), linear-gradient(90deg, #fff 2px, transparent 2px)`,
                                backgroundSize: '100px 100px',
                                backgroundPosition: '-2px -2px'
                            }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-sm font-semibold text-foreground/80">Loading Map...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <iframe
                    src="https://maps.google.com/maps?q=62%2C%20Suriya%20Complex%2C%20Gandhi%20Street%2C%20Thaneerpanthal%20Road%2C%20BR%20Puram%2C%20Hope%20College%2C%20Coimbatore%2C%20Tamil%20Nadu%20641004&t=m&z=15&output=embed&iwloc=near"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={`w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ${isMapLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setIsMapLoading(false)}
                ></iframe>
            </section>

            {/* 3-Step Grid Section */}
            <ContactStepsSection />
            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/919677704758"
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
