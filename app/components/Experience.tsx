'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function Experience({ id }: { id?: string }) {
	const { lang } = useLanguage();
	const experiences = {
		es: [
			{
				role: "Fullstack Developer",
				company: "Freelancer",
				period: "2025",
				description: [
					"Definí la arquitectura técnica y desarrollé una plataforma de E-commerce de alto rendimiento utilizando Next.js, logrando una mejora significativa en los puntajes de SEO y velocidad de carga (LCP).",
					"Diseñé un sistema de base de datos optimizado con PostgreSQL y Prisma ORM, reduciendo la latencia de las consultas de productos en tiempo real.",
					"Implementé la infraestructura de backend mediante Supabase, integrando autenticación segura y manejo de estado en tiempo real para procesos de pago.",
					"Diseñé y estructuré componentes UI reutilizables con consistencia visual y escalabilidad para nuevas funcionalidades."					
				]
			},
			{
				role: "Frontend Developer",
				company: "Datamart",
				period: "2024 - 2025",
				description: [
					"Desarrollé interfaces dinámicas de alta fidelidad, asegurando una compatibilidad del 100% en dispositivos móviles y navegadores modernos.",
					"Reduje el tiempo de desarrollo en un 20% mediante la creación de componentes UI reutilizables y escalables.",
					"Optimicé la gestión de datos complejos integrando APIs de GraphQL y máquinas de estado, mejorando la fluidez de la experiencia de usuario en dashboards analíticos.",
					"Desarrollé widgets dinámicos, participando también en su integración dentro de los sitios web de los clientes.",
					"Colaboré con el equipo de UX/UI para garantizar coherencia visual y funcional en todas las plataformas."					
				]
			},
			{
				role: "Frontend Developer (Mid level)",
				company: "Red 5G",
				period: "2023 - 2024",
				description: [
					"Lideré la estandarización de mejores prácticas de codificación, logrando una reducción del 40% en bugs reportados en el entorno de producción.",
					"Brindé mentoría técnica a miembros del equipo, elevando la calidad técnica del equipo y acelerando los tiempos de entrega de sprints.",
					"Optimicé el rendimiento de aplicaciones mediante técnicas de lazy loading y code splitting, disminuyendo el tiempo de carga inicial en un 30%.",
					"Participé en la definición de la estrategia técnica junto a arquitectos para asegurar la escalabilidad a largo plazo de los productos core.",
					"Construí aplicaciones web responsivas garantizando interfaces de alta calidad y accesibilidad (WCAG).",
					"Integré servicios RESTful, optimizando el flujo de datos entre el cliente y el servidor para mejorar la interactividad de las plataformas.",
					"Implementé pruebas unitarias en Angular, incrementando la cobertura de código y la estabilidad de las funcionalidades críticas."				
				]
			},
			{
				role: "Frontend Developer",
				company: "Freelancer",
				period: "2022 - 2023",
				description: [
					"Diseñé y desarrollé interfaces interactivas personalizadas, transformando requerimientos técnicos complejos en soluciones visuales funcionales para diversos clientes.",
					"Aseguré la compatibilidad multiplataforma mediante la implementación de diseños mobile-first y responsivos, garantizando una navegación fluida en dispositivos móviles y de escritorio.",
					"Potencié la escalabilidad de las aplicaciones mediante la integración de APIs RESTful de terceros, permitiendo la comunicación eficiente con servicios externos y bases de datos."					
				]
			}
		],
		en: [
			{
				role: "Fullstack Developer",
				company: "Freelancer",
				period: "2025",
				description: [
					"Defined the technical architecture and developed a high-performance E-commerce platform using Next.js, achieving a significant improvement in SEO scores and loading speed (LCP).",
					"Designed an optimized database system using PostgreSQL and Prisma ORM, reducing latency in real-time product queries.",
					"Implemented backend infrastructure using Supabase, integrating secure authentication and real-time state management for payment processes.",
					"Designed and structured reusable UI components with visual consistency and scalability for future features."
				]
			},
			{
				role: "Frontend Developer",
				company: "Datamart",
				period: "2024 - 2025",
				description: [
					"Developed high-fidelity dynamic interfaces, ensuring 100% compatibility across mobile devices and modern browsers.",
					"Reduced development time by 20% through the creation of reusable and scalable UI components.",
					"Optimized complex data management by integrating GraphQL APIs and state machines, improving user experience fluidity in analytical dashboards.",
					"Developed dynamic widgets and participated in their integration within client websites.",
					"Collaborated with the UX/UI team to ensure visual and functional consistency across all platforms."
				]
			},
			{
				role: "Frontend Developer (Mid level)",
				company: "Red 5G",
				period: "2023 - 2024",
				description: [
					"Led the standardization of coding best practices, achieving a 40% reduction in reported bugs in the production environment.",
					"Provided technical mentorship to team members, improving overall technical quality and accelerating sprint delivery timelines.",
					"Optimized application performance using lazy loading and code splitting techniques, reducing initial load time by 30%.",
					"Participated in defining the technical strategy alongside architects to ensure long-term scalability of core products.",
					"Built responsive web applications ensuring high-quality interfaces and accessibility compliance (WCAG).",
					"Integrated RESTful services, optimizing data flow between client and server to enhance platform interactivity.",
					"Implemented unit tests in Angular, increasing code coverage and stability of critical features."
				]
			},
			{
				role: "Frontend Developer",
				company: "Freelancer",
				period: "2022 - 2023",
				description: [
					"Designed and developed custom interactive interfaces, transforming complex technical requirements into functional visual solutions for diverse clients.",
					"Ensured cross-platform compatibility through mobile-first and responsive design implementations, delivering seamless navigation across mobile and desktop devices.",
					"Enhanced application scalability by integrating third-party RESTful APIs, enabling efficient communication with external services and databases."
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
