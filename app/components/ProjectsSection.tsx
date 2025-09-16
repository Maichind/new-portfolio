'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsSection({ id }: { id?: string }) {
	const { lang } = useLanguage();

	const projects = [
		{
			title: "ZenTasks",
			description: lang === "en" ?
				"Minimalist task application to create, organize and manage to-dos simply and efficiently." :
				"Aplicación minimalista de tareas para crear, organizar y gestionar to-dos de forma simple y eficiente.",
			image: "/zentasks.png",
			projectLink: "https://m-zen-tasks.netlify.app/",
			githubLink: "https://github.com/Maichind/todo-app",
		},
		{
			title: "OctoSearch",
			description: lang === "en" ?
				"GitHub user finder that shows the first match found quickly." :
				"Buscador de usuarios de GitHub que muestra rápidamente el primer resultado encontrado.",
			image: "/octosearch.png",
			projectLink: "https://github-u-finder.netlify.app/",
			githubLink: "https://github.com/Maichind/github-user-app",
		},
		{
			title: "Github Explorer",
			description: lang === "en" ?
				"GitHub user search engine with full listing and pagination to explore multiple results." :
				"Buscador de usuarios de GitHub con listado completo y paginación para explorar múltiples resultados.",
			image: "/githubusers.png",
			projectLink: "https://frontend-api-github-mind.netlify.app/",
			githubLink: "https://github.com/Maichind/Frontend-API-GitHub",
		},
		{
			title: lang === "en" ? "Voting App" : "App Votaciones",
			description: lang === "en" ?
				"Informative web app about the 2022 Colombian elections, including data and results visualization." :
				"Aplicación web informativa sobre las elecciones de Colombia 2022, incluyendo visualización de datos y resultados.",
			image: "/votacionesapp.png",
			projectLink: "https://app-votaciones-2022.netlify.app/",
			githubLink: "https://github.com/Maichind/Frontend-APP-Votaciones",
		},
		{
			title: "Portfolio v1",
			description: lang === "en" ?
				"First personal portfolio built with core frontend technologies: HTML, CSS, and JavaScript." :
				"Primer portafolio personal construido con tecnologías frontend básicas: HTML, CSS y JavaScript.",
			image: "/portfoliov1.png",
			projectLink: "https://portfolio-mind-developer.netlify.app/",
			githubLink: "https://github.com/Maichind/Portfolio-mind",
		},
		{
			title: lang === "en" ? "Test Sketch" : "Boceto prueba",
			description: lang === "en" ?
				"CRUD application built as a technical test, featuring tables to manage cars in different stages: storage, preparation, for sale, and sold." :
				"Aplicación CRUD construida como prueba técnica, con tablas para gestionar carros en diferentes etapas: bodega, preparación, en venta y vendidos",
			image: "/jquerytest.png",
			projectLink: "https://prueba-jsnativo-jquery.netlify.app/",
			githubLink: "https://github.com/Maichind/Prueba-JsNativo-jQuery",
		},
	];

	return (
		<section
			id={id}
			className="w-full min-h-screen py-16 sm:py-20 bg-black scroll-mt-16"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-10 md:mb-12 text-center">
					{lang === "en" ? "Featured Projects" : "Proyectos Destacados"}
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.title}
							className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg 
								group hover:scale-[1.02] transition-transform duration-300"
						>
							{/* Imagen con efecto zoom */}
							<div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
								<Image
									src={project.image}
									alt={`Project ${project.title}`}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent " />
							</div>

							{/* Texto y botones */}
							<div className="absolute inset-0 flex flex-col justify-end p-6 opacity-90 group-hover:opacity-100 
								transition-opacity duration-500">
								<h3 className="text-xl font-semibold text-white mb-2 group-hover:translate-y-0 translate-y-2 
									transition-transform duration-500">
									{project.title}
								</h3>
								<p className="text-sm text-gray-300 mb-4 line-clamp-3">
									{project.description}
								</p>
								<div className="flex gap-3">
									<a
										href={project.projectLink}
										target="_blank"
										className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white 
											text-sm font-medium rounded-full hover:opacity-90 transition"
									>
										{lang === "en" ? "View Project" : "Ver Proyecto"}
									</a>
									<a
										href={project.githubLink}
										target="_blank"
										className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 
											text-white text-sm font-medium rounded-full hover:bg-white/20 transition"
									>
										GitHub
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
