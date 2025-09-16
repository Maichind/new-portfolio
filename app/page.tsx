'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Experience from './components/Experience';
import Studies from './components/Studies';
import ContactSection from './components/ContactSection';

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
