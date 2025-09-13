'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen bg-gray-900">
			<HeroSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
		</main>
	);
}
