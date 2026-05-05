'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function Experience({ id }: { id?: string }) {
	const { lang } = useLanguage();
	const experiences = {
		es: [
			{
				role: "Fullstack Developer",
				company: "Dragonfly Labs",
				period: "Noviembre 2024 - Presente",
				description: [
					"Lideré el desarrollo de soluciones fullstack en entornos de consultoría (enterprise, e-commerce y analítica), entregando productos escalables con foco en performance y experiencia de usuario.",
					"Diseñé y desarrollé un sistema de automatización documental basado en IA (OpenAI API), generando contenido estructurado dinámico y optimizando procesos empresariales.",
					"Definí arquitecturas modernas (FastAPI, React, Next.js) bajo principios de separación de responsabilidades y enfoque feature-based, mejorando mantenibilidad y evolución del producto.",
					"Implementé autenticación empresarial (MSAL + OAuth2) e integración con Microsoft Graph API para gestión segura de usuarios en Microsoft 365.",
					"Optimicé performance frontend (Core Web Vitals, LCP) y construí sistemas de componentes reutilizables, reduciendo tiempos de desarrollo en ~20%.",
					"Integré APIs GraphQL y gestioné estados complejos en dashboards analíticos, mejorando la visualización y fluidez de datos en tiempo real."
				]
			},
			{
				role: "Frontend Developer",
				company: "Red 5G",
				period: "Febrero 2023 - Octubre 2024",
				description: [
					"Lideré la estandarización de buenas prácticas de desarrollo frontend, reduciendo defectos en producción en ~40% y mejorando la estabilidad de las aplicaciones.",
					"Optimicé el rendimiento de aplicaciones Angular mediante lazy loading y code splitting, logrando una reducción de ~30% en el tiempo de carga inicial.",
					"Desarrollé interfaces accesibles bajo lineamientos WCAG, asegurando usabilidad inclusiva y cumplimiento de estándares en múltiples dispositivos.",
					"Implementé estructuras modulares y componentes reutilizables, mejorando la mantenibilidad y acelerando la entrega de nuevas funcionalidades.",
					"Mentoricé a desarrolladores junior, elevando la calidad del código y reduciendo tiempos de entrega mediante revisiones técnicas y buenas prácticas.",
					"Contribuí a la evolución de aplicaciones frontend escalables, participando en decisiones técnicas y mejoras continuas de arquitectura."	
				]
			},
			{
				role: "Frontend Developer",
				company: "Freelancer",
				period: "Febrero 2022 - Enero 2023",
				description: [
					"Desarrollé interfaces web a medida para distintos clientes, alineando requerimientos técnicos con objetivos de negocio en múltiples proyectos.",
					"Implementé diseños responsive bajo enfoque mobile-first, garantizando consistencia visual y funcional en diversos dispositivos y navegadores.",
					"Integré APIs REST para consumo de datos y conexión con servicios externos, asegurando flujos de información eficientes y confiables.",
					"Construí componentes reutilizables y estructuras frontend escalables, facilitando la evolución y mantenimiento de las aplicaciones.",
					"Optimicé la experiencia de usuario mediante mejoras en interacción, tiempos de carga y usabilidad general en entornos web.",
					"Gestioné múltiples entregables de forma autónoma, cumpliendo plazos y adaptándome a distintos contextos y necesidades de cliente."
				]
			}
		],
		en: [
			{
				role: "Fullstack Developer",
				company: "Dragonfly Labs",
				period: "Noviembre 2024 - Present",
				description: [
					"Led the development of fullstack solutions in consulting environments (enterprise, e-commerce, and analytics), delivering scalable products with a strong focus on performance and user experience.",
					"Designed and developed an AI-powered document automation system (OpenAI API), generating dynamic structured content and optimizing business processes.",
					"Defined modern architectures (FastAPI, React, Next.js) following separation of concerns and a feature-based approach, improving maintainability and product evolution.",
					"Implemented enterprise authentication (MSAL + OAuth2) and integrated Microsoft Graph API for secure user management within Microsoft 365.",
					"Optimized frontend performance (Core Web Vitals, LCP) and built reusable component systems, reducing development time by ~20%.",
					"Integrated GraphQL APIs and managed complex state in analytical dashboards, improving real-time data visualization and fluidity."
				]
			},
			{
				role: "Frontend Developer",
				company: "Red 5G",
				period: "Febrero 2023 - Octubre 2024",
				description: [
					"Led the standardization of frontend development best practices, reducing production defects by ~40% and improving application stability.",
					"Optimized Angular application performance through lazy loading and code splitting, achieving a ~30% reduction in initial load time.",
					"Developed accessible interfaces following WCAG guidelines, ensuring inclusive usability and compliance across multiple devices.",
					"Implemented modular structures and reusable components, improving maintainability and accelerating feature delivery.",
					"Mentored junior developers, improving code quality and reducing delivery time through technical reviews and best practices.",
					"Contributed to the evolution of scalable frontend applications by participating in technical decisions and continuous architecture improvements."
				]
			},
			{
				role: "Frontend Developer",
				company: "Freelancer",
				period: "Febrero 2022 - Enero 2023",
				description: [
					"Developed custom web interfaces for various clients, aligning technical requirements with business objectives across multiple projects.",
					"Implemented responsive designs using a mobile-first approach, ensuring visual and functional consistency across devices and browsers.",
					"Integrated REST APIs for data consumption and external service connectivity, ensuring efficient and reliable data flows.",
					"Built reusable components and scalable frontend structures, facilitating application evolution and maintenance.",
					"Enhanced user experience through improvements in interaction, load times, and overall usability in web environments.",
					"Managed multiple deliverables independently, meeting deadlines and adapting to diverse client contexts and needs."
				]
			}
		]
	};

	return (
		<section id={id} className="bg-black text-white py-16 scroll-mt-16">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12">
					{lang === "es" ? "Experiencia" : "Experience"}</h2>

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
