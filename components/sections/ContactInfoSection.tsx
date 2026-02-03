import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfoSection() {
    const contacts = [
        {
            icon: Phone,
            title: "Call Us",
            details: "+91 96985 48633",
            href: "tel:+919698548633"
        },
        {
            icon: Mail,
            title: "Email Us",
            details: "info@slashinfotech.com",
            href: "mailto:info@slashinfotech.com"
        }
    ];

    return (
        <div className="space-y-10 transition-colors">
            <div>
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Get in Touch</h2>
                <h3 className="text-3xl font-black text-foreground mb-6">Let's Talk About Your Project</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Whether you have a fully-defined project scope or just a raw idea, we're here to brainstorm and build together.
                </p>
            </div>

            <div className="space-y-8">
                <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mr-6 shrink-0 border border-primary/20">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-foreground">Erode Office</h4>
                            <p className="text-muted-foreground text-sm">Old .146, New No.8, Meenakshi Sundatam Street, Thirunagar Colony, Erode-638 003</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground">Coimbatore Office</h4>
                            <p className="text-muted-foreground text-sm">123, Avinashi Road, Peelamedu, Coimbatore - 641004</p>
                        </div>
                    </div>
                </div>

                {contacts.map((contact) => (
                    <div key={contact.title} className="flex items-center">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mr-6 shrink-0 border border-primary/20">
                            <contact.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-foreground">{contact.title}</h4>
                            <a href={contact.href} className="text-muted-foreground transition-colors hover:text-primary">
                                {contact.details}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
