import Image from 'next/image';

export default function ProjectsSection() {
	const projects = [
		{
			title: 'ZenTasks',
			description: 'Minimalist task application to create, organize and manage to-dos simply and efficiently.',
			image: '/zentasks.png',
			projectLink: 'https://m-zen-tasks.netlify.app/',
			githubLink: 'https://github.com/Maichind/todo-app',
		},
		{
			title: 'OctoSearch',
			description: 'GitHub user finder that shows the first match found quickly.',
			image: '/octosearch.png',
			projectLink: 'https://github-u-finder.netlify.app/',
			githubLink: 'https://github.com/Maichind/github-user-app',
		},
		{
			title: 'Github Explorer',
			description: 'GitHub user search engine with full listing and pagination to explore multiple results.',
			image: '/githubusers.png',
			projectLink: 'https://frontend-api-github-mind.netlify.app/',
			githubLink: 'https://github.com/Maichind/Frontend-API-GitHub',
		},
		{
			title: 'Votaciones App',
			description: 'Informative web app about the 2022 Colombian elections, including data and results visualization.',
			image: '/votacionesapp.png',
			projectLink: 'https://app-votaciones-2022.netlify.app/',
			githubLink: 'https://github.com/Maichind/Frontend-APP-Votaciones',
		},
		{
			title: 'Portfolio v1',
			description: 'First personal portfolio built with core frontend technologies: HTML, CSS, and JavaScript.',
			image: '/portfoliov1.png',
			projectLink: 'https://portfolio-mind-developer.netlify.app/',
			githubLink: 'https://github.com/Maichind/Portfolio-mind',
		},
		{
			title: 'Boceto prueba',
			description: 'CRUD application built as a technical test, featuring tables to manage cars in different stages: storage, preparation, for sale, and sold.',
			image: '/jquerytest.png',
			projectLink: 'https://prueba-jsnativo-jquery.netlify.app/',
			githubLink: 'https://github.com/Maichind/Prueba-JsNativo-jQuery',
		},
	];

	return (
		<section className="w-full min-h-screen py-12 sm:py-20 bg-black">
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center"
					style={{ opacity: 1, transform: 'none' }}>Featured Projects
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
					{projects.map((project) => (
						<div
							key={project.title}
							className="w- relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
						>
							<div className="relative w-full h-56 sm:h-64 md:h-72">
								<Image
									src={project.image}
									alt={`Project ${project.title}`}
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
							</div>

							<div className="absolute inset-0 flex flex-col justify-end p-6">
								<h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
								<p className="text-sm sm:text-base text-gray-200 mb-4">{project.description}</p>
								<div className="flex gap-3">
									<a
										href={project.projectLink} target='_blank'
										className="px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-gray-200 transition"
									>
										View Project
									</a>
									<a
										href={project.githubLink} target='_blank'
										className="px-4 py-2 bg-gray-700 text-white text-sm font-medium rounded-full hover:bg-gray-600 transition"
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
