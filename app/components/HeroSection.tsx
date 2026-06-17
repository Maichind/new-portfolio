'use client';

import Image from 'next/image';
import Badge from './Badge';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
	const { lang } = useLanguage();

	return (
		<section className="w-full h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 
			bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,.7),#000)]">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/me.png" alt="Profile Picture" width={120} height={120}
						className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				<h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent 
					bg-gradient-to-r from-blue-400 to-purple-600">Maichol Mindiola Joiro
				</h1>
				<p className="text-lg md:text-xl text-gray-300 mb-8" style={{ opacity: 1, transform: 'none' }}>
					{lang === "en" ? "Frontend Engineer" : "Ingeniero Frontend"}
				</p>
				{/* <p className="text-gray-400 font-bold max-w-3xl mx-auto text-sm sm:text-base">
					{
						lang === "en" ?
							"I design and build scalable, production-ready web applications." :
							"Diseño y desarrollo aplicaciones web escalables utilizadas en producción."
					}
				</p> */}
				<p className="text-gray-400 max-w-4xl mx-auto text-sm sm:text-base">
					{
						lang === "en" ?
							"Frontend Engineer with 4+ years of experience building scalable, high-performance web applications. Specialized in Angular, React, Next.js, and TypeScript, with a strong focus on performance optimization (Core Web Vitals), frontend architecture, and user experience. Experienced in leading technical initiatives, improving key performance metrics, integrating complex REST and GraphQL APIs, and building maintainable user interfaces in distributed team environments." :
							"Frontend Engineer con +4 años de experiencia construyendo aplicaciones web escalables y de alto rendimiento. Especializado en Angular, React, Next.js y TypeScript, con enfoque en performance (Core Web Vitals), arquitectura frontend y experiencia de usuario. Experiencia liderando iniciativas técnicas, optimizando métricas clave de rendimiento, integrando APIs complejas (REST/GraphQL) y construyendo interfaces mantenibles en entornos distribuidos."
					}
				</p>
				<div className="flex flex-wrap justify-center gap-3 mt-12 max-w-3xl">
					<Badge tech="Angular" />
					<Badge tech="React" />
					<Badge tech="Next.js" />
					<Badge tech="TypeScript" />
					<Badge tech="JavaScript (ES6+)" />
					<Badge tech="Git" />
					<Badge tech="NPM" />
					<Badge tech="PNPM" />
				</div>
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
