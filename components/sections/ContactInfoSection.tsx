import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfoSection() {
    const contacts = [
        {
            icon: Phone,
            title: "Reach Us",
            details: ["+91 96777 04758", "+91 96777 04785"],
            href: "tel:+919677704758"
        },
        {
            icon: Mail,
            title: "Email Us",
            details: ["crm@ryanquantum.com"],
            href: "mailto:crm@ryanquantum.com"
        }
    ];

    return (
        <div className="space-y-8 transition-colors h-full flex flex-col justify-center">
            {/* Clean GIF Display */}
            <div className="w-full mb-4">
                <img
                    src="https://ryanquantum.com/wp-content/uploads/2025/11/customer-service.gif"
                    alt="Customer Service Support"
                    className="w-full max-w-[300px] h-auto object-contain mx-auto lg:mx-0 drop-shadow-sm"
                />
            </div>

            {/* Address & Contacts */}
            <div className="space-y-6 pl-2">
                <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mr-6 shrink-0 border border-primary/20">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground text-lg mb-2">Address</h4>
                        <div className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            <strong>Slash Info Tech</strong><br />
                            62, Suriya Complex, Gandhi Street, Thaneerpanthal, Road, BR Puram, Hope College, Coimbatore, Tamil Nadu 641004
                        </div>
                    </div>
                </div>

                {/* Contact List */}
                <div className="grid gap-6">
                    {contacts.map((contact) => (
                        <div key={contact.title} className="flex items-start">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mr-6 shrink-0 border border-primary/20 mt-1">
                                <contact.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground text-lg mb-1">{contact.title}</h4>
                                <div className="flex flex-col space-y-1">
                                    {Array.isArray(contact.details) ? (
                                        contact.details.map((detail, index) => (
                                            <a key={index} href={contact.href} className="text-muted-foreground transition-colors hover:text-primary font-medium">
                                                {detail}
                                            </a>
                                        ))
                                    ) : (
                                        <a href={contact.href} className="text-muted-foreground transition-colors hover:text-primary font-medium">
                                            {contact.details}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
