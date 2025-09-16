"use client";

import { useState } from "react";
import Image from 'next/image';
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const { lang, setLang } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { label: lang === "es" ? "Proyectos" : "Projects", href: "#featured" },
        { label: lang === "es" ? "Habilidades" : "Skills", href: "#skills" },
        { label: lang === "es" ? "Experiencia" : "Experience", href: "#experience" },
        { label: lang === "es" ? "Estudios" : "Studies", href: "#studies" },
        { label: lang === "es" ? "Contacto" : "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="relative w-8 h-8">
                    <Image
                        src={"./favicon.ico"}
                        alt={`logo`}
                        fill
                        className="object-cover"
                    />
                </a>

                {/* Desktop links */}
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex gap-8">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative group"
                            >
                                <span className="text-white transition group-hover:text-purple-400">
                                    {link.label}
                                </span>
                                <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                            </a>
                        ))}
                    </div>

                    {/* Language Switch */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setLang("es")}
                            className={`w-6 h-6 rounded text-xs ${lang === "es" ? "bg-purple-500" : "bg-gray-700"}`}
                        >
                            ES
                        </button>
                        <button
                            onClick={() => setLang("en")}
                            className={`w-6 h-6 rounded text-xs ${lang === "en" ? "bg-purple-500" : "bg-gray-700"}`}
                        >
                            EN
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-md animate-fadeIn">
                    <div className="flex flex-col items-center py-6 space-y-4">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-purple-400 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
