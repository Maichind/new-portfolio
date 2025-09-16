'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function Studies({ id }: { id?: string }) {
    const { lang } = useLanguage();
    const studies = {
        en: [
            { title: "Frontend Development with React", institution: "Platzi", period: "2025" },
            { title: "TailwindCSS", institution: "Platzi", period: "2025" },
            { title: "Frontend Development with Angular", institution: "Platzi", period: "2024" },
            { title: "JavaScript Professional", institution: "Platzi", period: "2023" },
            { title: "Software Development (Certificate Program)", institution: "National University of Colombia", period: "2022" },
            { title: "Web Application Development (Certificate Program)", institution: "National University of Colombia", period: "2022" },
            { title: "Mechatronics Engineering", institution: "University of Pamplona", period: "2014 - 2021" },
        ],
        es: [
            { title: "Desarrollo Frontend con React", institution: "Platzi", period: "2025" },
            { title: "TailwindCSS", institution: "Platzi", period: "2025" },
            { title: "Desarrollo Frontend con Angular", institution: "Platzi", period: "2024" },
            { title: "Profesional de JavaScript", institution: "Platzi", period: "2023" },
            { title: "Desarrollo de Software (Diplomado)", institution: "Universidad Nacional de Colombia", period: "2022" },
            { title: "Desarrollo de Aplicaciones Web (Diplomado)", institution: "Universidad Nacional de Colombia", period: "2022" },
            { title: "Ingeniería Mecatrónica", institution: "Universidad de Pamplona", period: "2014 - 2021" },
        ],
    };

    return (
        <section
            id={id}
            className="bg-gradient-to-b from-black via-purple-400/20 to-black text-white py-16 scroll-mt-16"
        >
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12">{lang === "es" ? "Estudios" : "Studies"}</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {studies[lang].map((study, i) => (
                        <div
                            key={i}
                            className="group bg-gradient-to-r from-purple-900/20 to-black/40 
                         rounded-2xl shadow-md p-6 
                         hover:-translate-y-1 hover:shadow-purple-500/30 
                         transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-purple-400 text-2xl group-hover:rotate-12 transition-transform">
                                    🎓
                                </span>
                                <h3 className="text-lg md:text-xl font-semibold tracking-wide">
                                    {study.title}
                                </h3>
                            </div>
                            <p className="text-gray-300">{study.institution}</p>
                            <p className="text-sm text-gray-400">{study.period}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
