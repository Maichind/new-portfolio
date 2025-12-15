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
					"Diseñé y desarrollé una plataforma e-commerce completa utilizando Next.js, con una arquitectura escalable orientada a performance, SEO y experiencia de usuario.",
					"Arquitecturé la capa de datos con PostgreSQL y Prisma ORM, optimizando el modelado y la mantenibilidad de la base de datos.",
					"Implementé servicios backend con Supabase, gestionando autenticación, APIs REST, almacenamiento de archivos y actualizaciones en tiempo real.",
					"Desarrollé componentes UI reutilizables y escalables con TypeScript, asegurando consistencia visual y facilidad para incorporar nuevas funcionalidades.",
					"Desplegué y mantuve la aplicación en Vercel, gestionando el control de versiones con Git y GitHub."					
				]
			},
			{
				role: "Frontend Developer",
				company: "Datamart",
				period: "2024 - 2025",
				description: [
					"Desarrollé e integré widgets dinámicos y embebibles utilizados en múltiples sitios web de clientes, asegurando su estabilidad y facilidad de integración.",
					"Diseñé e implementé componentes reutilizables y librerías internas, reduciendo tiempos de desarrollo y mejorando la consistencia entre proyectos frontend.",
					"Construí interfaces dinámicas y responsivas optimizadas para entornos web y móviles, con foco en performance y experiencia de usuario.",
					"Integré APIs GraphQL y máquinas de estado para gestionar de forma eficiente flujos de datos complejos y estados de la aplicación.",
					"Colaboré estrechamente con el equipo de UX/UI, trasladando sistemas de diseño a implementaciones frontend escalables y coherentes.",
					"Contribuí a la mejora de la arquitectura frontend, promoviendo modularidad, reutilización y mantenibilidad del código."
				]
			},
			{
				role: "Frontend Developer",
				company: "Red 5G",
				period: "2023 - 2024",
				description: [
					"Desarrollé y mantuve aplicaciones web modernas utilizando Angular, JavaScript y TypeScript, entregando interfaces responsivas y de alta calidad.",
					"Lideré la adopción de buenas prácticas de desarrollo frontend, logrando una reducción significativa de bugs en producción y una mayor calidad del código.",
					"Implementé optimizaciones de performance como lazy loading y code splitting, mejorando los tiempos de carga y la experiencia del usuario.",
					"Participé en la toma de decisiones técnicas junto con los equipos de arquitectura y producto, alineando las soluciones frontend con los objetivos de la plataforma.",
					"Brindé mentoría técnica a otros miembros del equipo, fortaleciendo las capacidades del equipo y la calidad final de los entregables.",
					"Integré APIs RESTful para habilitar la comunicación eficiente entre aplicaciones frontend y servicios backend.",
					"Aseguré compatibilidad cross-browser y un comportamiento consistente en distintos dispositivos y tamaños de pantalla.",
					"Gestioné el control de versiones y dependencias utilizando Git y NPM, manteniendo bases de código estables y mantenibles."
				]
			},
			{
				role: "Frontend Developer",
				company: "Freelancer",
				period: "2022 - 2023",
				description: [
					"Desarrollé soluciones frontend a medida para múltiples proyectos de clientes utilizando Angular y React, traduciendo requerimientos de negocio en interfaces web funcionales y orientadas al usuario.",
					"Implementé componentes escalables y mantenibles con JavaScript y TypeScript, aplicando buenas prácticas y patrones modernos de desarrollo frontend.",
					"Construí interfaces responsivas y accesibles con HTML y CSS, asegurando un comportamiento consistente en desktop y dispositivos móviles.",
					"Integré APIs RESTful para el manejo dinámico de datos y la comunicación con servicios externos.",
					"Gestioné el control de versiones y dependencias de los proyectos utilizando Git y NPM, manteniendo bases de código organizadas y consistentes.",
					"Colaboré directamente con los clientes durante todo el ciclo de desarrollo, iterando sobre funcionalidades y mejorando la usabilidad a partir del feedback recibido."
				]
			}
		],
		en: [
			{
				role: "Fullstack Developer",
				company: "Freelancer",
				period: "2025",
				description: [
					"Designed and developed a full-featured e-commerce platform using Next.js, focusing on scalability, performance, SEO, and user experience.",
					"Architected the data layer using PostgreSQL with Prisma ORM, ensuring efficient data modeling and maintainability.",
					"Implemented backend services with Supabase, handling authentication, REST APIs, file storage, and real-time data updates.",
					"Built reusable and scalable UI components with TypeScript, promoting consistency and ease of future feature development.",
					"Deployed and maintained the application using Vercel, managing version control with Git and GitHub."					
				]
			},
			{
				role: "Frontend Developer",
				company: "Datamart",
				period: "2024 - 2025",
				description: [
					"Developed and integrated dynamic, embeddable widgets used across multiple client websites, ensuring reliability and ease of integration.",
					"Designed and implemented reusable components and internal libraries, reducing development time and improving consistency across frontend projects.",
					"Built responsive and dynamic user interfaces optimized for web and mobile environments, focusing on performance and usability.",
					"Integrated GraphQL APIs and state machines to efficiently manage complex data flows and application states.",
					"Collaborated closely with UX/UI designers to translate design systems into scalable and consistent frontend implementations.",
					"Contributed to improving frontend architecture by promoting modularity, reusability, and maintainability."
				]
			},
			{
				role: "Frontend Developer",
				company: "Red 5G",
				period: "2023 - 2024",
				description: [
					"Developed and maintained modern web applications using Angular, JavaScript, and TypeScript, delivering responsive and high-quality user interfaces.",
					"Led the adoption of frontend best practices, significantly reducing production bugs and improving overall code quality.",
					"Implemented performance optimizations such as lazy loading and code splitting, resulting in faster load times and improved user experience.",
					"Contributed to technical decision-making in collaboration with architecture and product teams, aligning frontend solutions with long-term platform goals.",
					"Provided technical mentorship to team members, strengthening team capabilities and raising the overall quality of frontend deliverables.",
					"Integrated RESTful APIs to enable seamless communication between frontend applications and backend services.",
					"Ensured cross-browser compatibility and consistent behavior across multiple devices and screen sizes.",
					"Managed version control and dependencies using Git and NPM, maintaining stable and maintainable codebases."
				]
			},
			{
				role: "Frontend Developer",
				company: "Freelancer",
				period: "2022 - 2023",
				description: [
					"Delivered custom frontend solutions for multiple client projects using Angular and React, translating business requirements into functional and user-friendly web interfaces.",
					"Developed scalable and maintainable UI components with JavaScript and TypeScript, applying modern frontend architecture and best practices.",
					"Built responsive and accessible interfaces with HTML and CSS, ensuring consistent behavior across desktop and mobile devices.",
					"Integrated RESTful APIs to handle dynamic data flows and communication with external services.",
					"Managed source control and project dependencies using Git and NPM, maintaining clean and organized codebases.",
					"Collaborated directly with clients throughout the development lifecycle, iterating on features and improving usability based on feedback."
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
