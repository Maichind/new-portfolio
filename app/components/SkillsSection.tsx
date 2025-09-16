'use client';

import {
	SiAngular, SiReact, SiNextdotjs,
	SiJavascript, SiTypescript, SiHtml5,
	SiCss3, SiTailwindcss, SiGit, SiNpm
} from "react-icons/si";
import { MdDevices } from "react-icons/md";
import { useLanguage } from "@/context/LanguageContext";

export default function SkillsSection({ id }: { id?: string }) {
	const { lang } = useLanguage();
	const skills = [
		{ name: "Angular", icon: <SiAngular className="text-red-500" /> },
		{ name: "React", icon: <SiReact className="text-sky-400" /> },
		{ name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
		{ name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
		{ name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
		{ name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
		{ name: "CSS3/SCSS", icon: <SiCss3 className="text-blue-400" /> },
		{ name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
		{ name: "Git", icon: <SiGit className="text-orange-400" /> },
		{ name: "NPM", icon: <SiNpm className="text-red-500" /> },
		{ name: "Responsive Design", icon: <MdDevices className="text-purple-400" /> },
		{ name: "Componentization & Atomic Design", icon: <MdDevices className="text-purple-400" /> },
		{ name: "Scalable Project Architecture", icon: <MdDevices className="text-purple-400" /> },
	];

	return (
		<section id={id} className="py-12 md:py-20 bg-gradient-to-b from-black via-purple-900/20 to-black scroll-mt-16">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-10 md:mb-12 text-center tracking-wide">
					{lang === "en" ? "Skills & Technologies" : "Habilidades y Tecnologías"}
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
					{skills.map((skill) => (
						<div
							key={skill.name}
							className="flex flex-col items-center justify-center gap-3 bg-white/5 rounded-xl py-6 px-6 
                         text-white text-center text-base md:text-lg font-medium tracking-wide 
                         hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-blue-600/30 
                         hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 
                         transition-all duration-300 ease-out"
						>
							<span className="text-3xl">{skill.icon}</span>
							{skill.name}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
