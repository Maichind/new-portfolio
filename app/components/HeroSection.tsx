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
					{lang === "en" ? "Frontend Developer" : "Desarrollador Frontend"}
				</p>
				<p className="text-gray-400 font-bold max-w-3xl mx-auto text-sm sm:text-base">
					{
						lang === "en" ?
							"I design and build scalable, production-ready web applications." :
							"Diseño y desarrollo aplicaciones web escalables utilizadas en producción."
					}
				</p>
				<p className="text-gray-400 max-w-4xl mx-auto text-sm sm:text-base">
					{
						lang === "en" ?
							"Frontend-focused developer with strong experience in Angular, React, Next.js, TypeScript, and JavaScript (ES6+), specialized in performance optimization, scalable frontend architectures, API integration (REST & GraphQL), and responsive UI systems. Proven experience delivering real-world products, leading technical initiatives, and collaborating with distributed, multidisciplinary teams to create high-quality, user-centered interfaces." :
							"Desarrollador enfocado en frontend con sólida experiencia en Angular, React, Next.js, TypeScript y JavaScript (ES6+), especializado en optimización de rendimiento, arquitecturas frontend escalables, integración de APIs (REST y GraphQL) y sistemas de UI responsivos. Experiencia comprobada entregando productos reales, liderando iniciativas técnicas y colaborando con equipos multidisciplinarios y distribuidos para crear interfaces de alta calidad centradas en el usuario."
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
