'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="w-full h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,.7),#000)]">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/me.png" alt="Profile Picture" width={120} height={120} className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				<h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Maichol Mindiola Joiro</h1>
				<p className="text-lg md:text-xl text-gray-300 mb-8 px-4" style={{ opacity: 1, transform: 'none' }}>Frontend Developer</p>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					I build modern and scalable web applications. I specialize in Angular, React, TypeScript, and JavaScript (ES6+),
					with solid knowledge of RESTful and GraphQL API consumption, performance optimization, and responsive design.
					Experience leading remote projects and collaborating with multidisciplinary teams, ensuring high-quality interfaces
					and exceptional user experiences.
				</p>
				<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" style={{ opacity: 1, transform: 'none' }}>
					<div className="animate-bounce">
						<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
}
