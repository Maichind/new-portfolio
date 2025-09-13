export default function SkillsSection() {
	const skills = ['Angular', 'React', 'JavaScript', 'TypeScript', 'Next.js', 'TailwindCSS', 'Git'];

	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center" 
					style={{ opacity: 1, transform: 'none' }}>Skills & Technologies
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{skills.map((skill) => (
						<div
							key={skill}
							className="bg-white/5 rounded-xl p-6 text-white text-center text-lg font-semibold hover:bg-white/10 transition-colors"
						>
							{skill}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
