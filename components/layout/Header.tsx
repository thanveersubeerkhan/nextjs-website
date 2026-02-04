"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { services } from '@/data/services';
import Button from '@/components/ui/Button';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    const isActive = (path: string) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname?.startsWith(path)) return true;
        return false;
    };

    return (
        <>
            <header
                ref={headerRef}
                // className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${isScrolled || isMenuOpen
                //     ? 'bg-background/95 border-b border-border shadow-sm backdrop-blur py-3'
                //     : 'bg-white dark:bg-transparent border-b border-transparent py-5'
                //     }`}
                className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 
                    bg-background/95 border-b border-border shadow-sm backdrop-blur py-3
                  `}
            >
                <nav className="container flex items-center justify-between">
                    {/* Logo - click closes menu */}
                    <Link
                        href="/"
                        className="flex items-center space-x-2 z-[110] transition-transform hover:scale-105"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <img
                            src="/logo.png"
                            alt="Slash Info Tech"
                            className="h-8 md:h-12 w-auto object-contain transition-all duration-300 brightness-0 dark:brightness-100"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
                        {['Home', 'Services', 'About', 'Contact'].map((item) => {
                            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                            const active = isActive(path);

                            if (item === 'Services') {
                                return (
                                    <div
                                        key={item}
                                        className="relative group"
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                    >
                                        <button className={`px-3 py-2 text-sm font-bold transition-colors cursor-pointer flex items-center ${active ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                                            }`}>
                                            Services
                                            <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        <div className={`absolute top-full left-0 w-64 pt-2 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                            <div className="bg-popover border border-border shadow-2xl rounded-2xl p-2 overflow-hidden ring-1 ring-black/5">
                                                {services.map((service) => {
                                                    const servicePath = `/services/${service.slug}`;
                                                    const serviceActive = pathname === servicePath;
                                                    return (
                                                        <Link
                                                            key={service.slug}
                                                            href={servicePath}
                                                            className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${serviceActive
                                                                ? 'bg-primary text-primary-foreground'
                                                                : 'hover:bg-accent hover:text-accent-foreground text-popover-foreground text-muted-foreground'
                                                                }`}
                                                        >
                                                            {service.title}
                                                        </Link>
                                                    );
                                                })}
                                                <div className="border-t border-border mt-2 pt-2">
                                                    <Link
                                                        href="/services"
                                                        className={`block px-4 py-3 text-sm font-black rounded-xl transition-colors ${pathname === '/services' ? 'bg-primary/10 text-primary' : 'hover:bg-accent text-primary'
                                                            }`}
                                                    >
                                                        All Services
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <Link
                                    key={item}
                                    href={path}
                                    className={`px-3 py-2 text-sm font-bold transition-colors ${active ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                                        }`}
                                >
                                    {item}
                                </Link>
                            );
                        })}

                        <div className="flex items-center space-x-4 border-l border-border pl-6 ml-4">
                            {/* <ThemeToggle /> */}
                            <Button size="sm" className="rounded-full shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform font-black">
                                Get Started
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center space-x-3 md:hidden z-[110]">
                        {/* <ThemeToggle /> */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-xl bg-accent text-accent-foreground border border-border transition-all active:scale-95"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay - Moved outside header but controlled by same state if possible, or kept inside but fixed */}
            {/* We keep it separate from the sticky header structure to avoid height issues */}
            <div
                className={`fixed inset-0 z-[90] bg-background md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                style={{ height: '100dvh' }}
            >
                <div className={`flex flex-col h-full pt-28 px-4 pb-8 transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-10'
                    }`}>
                    <div className="flex flex-col space-y-6 h-full overflow-y-auto pb-10">
                        {['Home', 'Services', 'About', 'Contact'].map((item) => {
                            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                            const active = isActive(path);

                            if (item === 'Services') {
                                return (
                                    <div key={item} className="space-y-4">
                                        <span className="font-black text-xs uppercase tracking-widest text-primary/50 border-b border-border pb-2 block">Premium Services</span>
                                        <div className="grid grid-cols-1 gap-2 pl-2">
                                            {services.map((service) => {
                                                const servicePath = `/services/${service.slug}`;
                                                const serviceActive = pathname === servicePath;
                                                return (
                                                    <Link
                                                        key={service.slug}
                                                        href={servicePath}
                                                        className={`text-lg font-bold py-2 transition-colors flex items-center ${serviceActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                                                            }`}
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <span className={`w-2 h-2 rounded-full mr-3 shadow-sm ${serviceActive ? 'bg-primary shadow-primary/50' : 'bg-border'
                                                            }`}></span>
                                                        {service.title}
                                                    </Link>
                                                );
                                            })}
                                            <Link
                                                href="/services"
                                                className={`text-lg font-black py-2 flex items-center ${pathname === '/services' ? 'text-primary' : 'text-primary'
                                                    }`}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <ChevronDown className="h-5 w-5 mr-2 -rotate-90" />
                                                View All Services
                                            </Link>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item}
                                    href={path}
                                    className={`text-4xl font-black tracking-tight transition-colors ${active ? 'text-primary' : 'text-foreground hover:text-foreground/70'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            );
                        })}

                        <div className="mt-auto pt-8">
                            <Button
                                className="w-full rounded-2xl py-8 text-xl shadow-2xl shadow-primary/20 font-black"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started Today
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
