import Link from 'next/link';
import { services } from '@/data/services';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background text-foreground pt-20 pb-10 border-t border-border transition-colors duration-500">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
                            <span className="text-2xl font-black tracking-tighter uppercase">
                                RYAN <span className="text-primary">QUANTUM</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
                            Turning ideas into impactful digital experiences — Ryan Quantum Technologies. We deliver digital excellence from Erode to the world.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: Facebook, href: '#', label: 'Facebook' },
                                { icon: Instagram, href: '#', label: 'Instagram' },
                                { icon: Linkedin, href: '#', label: 'Linkedin' },
                                { icon: Twitter, href: '#', label: 'Twitter' }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 group border border-border"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="sr-only">{social.label}</span>
                                    <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black mb-6 text-lg tracking-tight">Company</h4>
                        <ul className="space-y-4 text-muted-foreground text-sm font-bold">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black mb-6 text-lg tracking-tight">Services</h4>
                        <ul className="space-y-4 text-muted-foreground text-sm font-bold">
                            {services.slice(0, 4).map((service) => (
                                <li key={service.slug}>
                                    <Link href={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black mb-6 text-lg tracking-tight">Get In Touch</h4>
                        <ul className="space-y-6 text-muted-foreground text-sm font-bold">
                            <li className="flex items-start">
                                <MapPin className="mr-3 w-5 h-5 text-primary shrink-0" />
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-foreground block mb-1 font-black text-xs uppercase tracking-widest">Address:</span>
                                        <p className="leading-relaxed">Old .146, New No.8, Meenakshi Sundatam Street, Thirunagar Colony, Erode-638 003</p>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-3 w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:crm@ryanquantum.com" className="hover:text-primary transition-colors">crm@ryanquantum.com</a>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-3 w-5 h-5 text-primary shrink-0" />
                                <div className="flex flex-col">
                                    <span>+91 96985 48633</span>
                                    <span>+91 8438 8438 07</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-[10px] sm:text-xs gap-4 uppercase tracking-[0.2em] font-black">
                    <p>Copyright © 2026 RYAN QUANTUM | Powered by RYAN QUANTUM</p>
                    <div className="flex space-x-8">
                        <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms of Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
