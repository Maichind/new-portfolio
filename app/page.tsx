'use client';

import Navbar from './components/Navbar';
import Studies from './components/Studies';
import Experience from './components/Experience';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ProjectsSection from './components/ProjectsSection';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen bg-gray-900">
			<Navbar />
			<HeroSection />
			<ProjectsSection id="featured" />
			<SkillsSection id="skills" />
			<Experience id="experience" />
			<Studies id="studies" />
			<ContactSection id="contact" />
		</main>
	);
}
