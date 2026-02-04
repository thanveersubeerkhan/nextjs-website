import PageHero from '@/components/sections/PageHero';

export default function TermsPage() {
    return (
        <div className="bg-background min-h-screen transition-colors duration-500">
            <PageHero
                title="Terms & Conditions"
                subtitle="The rules and guidelines for using Slash Info Tech services."
            />

            <section className="section-padding">
                <div className="container max-w-4xl">
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold mb-6 text-foreground">1. Acceptance of Terms</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            By accessing or using the services provided by Slash Info Tech, you agree to be bound by these Terms and Conditions and our Privacy Policy.
                        </p>

                        <h2 className="text-2xl font-bold mb-6 text-foreground">2. Services</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Slash Info Tech provides web design, development, software solutions, and digital marketing services. The specific scope of work for each project will be outlined in a separate agreement or proposal.
                        </p>

                        <h2 className="text-2xl font-bold mb-6 text-foreground">3. Intellectual Property</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Unless otherwise agreed, all intellectual property rights for the deliverables created during a project will belong to the client upon full payment. Slash Info Tech retains the right to showcase the work as part of its portfolio.
                        </p>

                        <h2 className="text-20 font-bold mb-6 text-foreground">4. Payment Terms</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Clients agree to pay the fees outlined in the project proposal. Payments are typically divided into milestones. Delayed payments may result in the suspension of work.
                        </p>

                        <h2 className="text-2xl font-bold mb-6 text-foreground">5. Limitation of Liability</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Slash Info Tech will not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.
                        </p>

                        <h2 className="text-2xl font-bold mb-6 text-foreground">6. Governing Law</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
