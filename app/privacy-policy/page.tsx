import PageHero from '@/components/sections/PageHero';

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-background min-h-screen transition-colors duration-500">
            <PageHero
                title="Privacy Policy"
                subtitle="How we protect and manage your data at Slash Info Tech."
            />

            <section className="section-padding">
                <div className="container max-w-4xl">
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold mb-6 text-foreground">1. Introduction</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            At Slash Info Tech, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
                        </p>

                        <h2 className="text-2xl font-bold mb-6 text-foreground">2. Information We Collect</h2>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                            We may collect personal information that you provide to us, such as:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
                            <li>Name, email address, and contact details via our contact form.</li>
                            <li>Project requirements and documents you upload.</li>
                            <li>Usage data and cookies to improve your browsing experience.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-6 text-foreground">3. How We Use Your Information</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            We use the information we collect to communicate with you, provide our services, and improve our website performance. We do not sell your personal data to third parties.
                        </p>

                        <h2 className="text-2xl font-bold mb-6 text-foreground">4. Data Security</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
                        </p>

                        <h2 className="text-2xl font-bold mb-6 text-foreground">5. Your Rights</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            You have the right to request access to the personal information we hold about you and to ask for it to be corrected or deleted.
                        </p>

                        <h2 className="text-2xl font-bold mb-6 text-foreground">6. Contact Us</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at info@slashinfotech.com.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
