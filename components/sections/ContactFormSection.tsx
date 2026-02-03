"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { services } from '@/data/services';

export default function ContactFormSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="bg-card border border-border p-12 rounded-3xl text-center shadow-xl animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Message Received!</h3>
                <p className="text-muted-foreground mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <Button onClick={() => setIsSubmitted(false)} className="rounded-full px-8">Send Another Message</Button>
            </div>
        );
    }

    return (
        <div className="bg-card border border-border p-8 md:p-12 rounded-3xl shadow-xl transition-all">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <Input label="First Name" placeholder="John" required />
                    <Input label="Last Name" placeholder="Doe" required />
                </div>
                <Input label="Email Address" type="email" placeholder="john@example.com" required />

                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Interested Service</label>
                    <select className="w-full h-11 bg-background border border-input rounded-md px-3 text-sm text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition-colors">
                        {services.map(s => (
                            <option key={s.slug} value={s.slug}>{s.title}</option>
                        ))}
                        <option value="other">Other Inquiry</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Project Document (PDF/DOCX)</label>
                    <input
                        type="file"
                        className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-all cursor-pointer"
                    />
                </div>

                <Textarea label="Project Description" placeholder="Tell us about your project..." required maxLength={500} />

                <Button type="submit" className="w-full rounded-xl py-4 flex items-center justify-center space-x-2 group">
                    <span>Submit Request</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Button>
            </form>
        </div>
    );
}
