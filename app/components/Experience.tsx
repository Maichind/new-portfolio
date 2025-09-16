'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function Experience({ id }: { id?: string }) {
    const { lang } = useLanguage();
    const experiences = {
        es: [
            {
                role: "Frontend Developer",
                company: "Datamart",
                period: "2024 - 2025",
                description: [
                    "Desarrollé widgets dinámicos, participando también en su integración dentro de los sitios web de los clientes.",
                    "Implementé componentes reutilizables y librerías para reducir el tiempo de desarrollo de nuevas funcionalidades.",
                    "Desarrollé interfaces responsivas y dinámicas garantizando una experiencia fluida en web y dispositivos móviles.",
                    "Integré APIs GraphQL y máquinas de estado, mejorando la eficiencia en la gestión de datos y estados complejos.",
                    "Colaboré con el equipo de UX/UI para garantizar coherencia visual y funcional en todas las plataformas."
                ]
            },
            {
                role: "Frontend Developer",
                company: "Red 5G",
                period: "2023 - 2024",
                description: [
                    "Lideré la adopción de mejores prácticas de desarrollo, logrando una reducción muy alta de bugs en producción.",
                    "Brindé mentoría técnica a miembros del equipo, mejorando la capacidad colectiva y la calidad final del producto.",
                    "Implementé optimizaciones (lazy loading, code splitting) que disminuyeron los tiempos de carga en las aplicaciones.",
                    "Participé en la definición de la estrategia técnica junto al equipo de arquitectura y producto.",
                    "",
                    "Construí aplicaciones web modernas y con diseño responsive, garantizando interfaces de alta calidad.",
                    "Integré APIs RESTful para conectar servicios y sistemas, optimizando la conectividad de las aplicaciones.",
                    "Adapté las aplicaciones a múltiples navegadores y dispositivos, mejorando la experiencia del usuario final."
                ]
            },
            {
                role: "Frontend Developer",
                company: "Freelancer",
                period: "2022 - 2023",
                description: [
                    "Diseñé y desarrollé interfaces interactivas adaptadas a requerimientos específicos de cada cliente.",
                    "Implementé diseños responsivos para apps web, asegurando compatibilidad en desktop y dispositivos móviles.",
                    "Integré APIs RESTful para conectar aplicaciones con servicios externos, mejorando la funcionalidad y escalabilidad."
                ]
            }
        ],
        en: [
            {
                role: "Frontend Developer",
                company: "Datamart",
                period: "2024 - 2025",
                description: [
                    "Developed dynamic widgets and participated in their integration within client websites.",
                    "Implemented reusable components and libraries to reduce development time for new features.",
                    "Built responsive and dynamic interfaces ensuring a smooth experience on web and mobile devices.",
                    "Integrated GraphQL APIs and state machines, improving efficiency in managing complex data and states.",
                    "Collaborated with the UX/UI team to ensure visual and functional consistency across platforms."
                ]
            },
            {
                role: "Frontend Developer",
                company: "Red 5G",
                period: "2023 - 2024",
                description: [
                    "Led the adoption of best development practices, achieving a significant reduction of production bugs.",
                    "Provided technical mentorship to team members, enhancing collective skills and overall product quality.",
                    "Implemented performance optimizations (lazy loading, code splitting) that reduced application load times.",
                    "Contributed to defining technical strategy alongside the architecture and product teams.",
                    "",
                    "Built modern, responsive web applications ensuring high-quality interfaces.",
                    "Integrated RESTful APIs to connect services and systems, optimizing application connectivity.",
                    "Adapted applications to multiple browsers and devices, improving end-user experience."
                ]
            },
            {
                role: "Frontend Developer",
                company: "Freelancer",
                period: "2022 - 2023",
                description: [
                    "Designed and developed interactive interfaces tailored to specific client requirements.",
                    "Implemented responsive designs for web apps, ensuring compatibility across desktop and mobile devices.",
                    "Integrated RESTful APIs to connect applications with external services, enhancing functionality and scalability."
                ]
            }

        ]
    };

    return (
        <section id={id} className="bg-black text-white py-16 scroll-mt-16">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12">{lang === "es" ? "Experiencia" : "Experience"}</h2>

                <div className="relative border-l border-gray-800">
                    {experiences[lang].map((exp, i) => (
                        <div
                            key={i}
                            className="mb-12 ml-6 relative group transition-transform duration-300 hover:translate-x-1"
                        >
                            <div className="absolute w-4 h-4 bg-purple-500 border-2 border-purple-300 rounded-full 
                                -left-8 top-1 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)] transition" />

                            <h3 className="text-xl font-semibold">{exp.role}</h3>
                            <p className="text-sm text-gray-400 mb-3">
                                {exp.company} · {exp.period}
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300 marker:text-purple-500">
                                {exp.description.map(
                                    (desc, j) =>
                                        desc.trim() === "" ? (
                                            <br key={j} />
                                        ) : (
                                            <li key={j} className="mt-2 text-gray-300">
                                                {desc}
                                            </li>
                                        )
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
