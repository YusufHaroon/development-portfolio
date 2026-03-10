const SKILLS = [
    {
        category: 'Frontend',
        items: ['React', 'Next.js', 'JavaScript (ES2024)', 'TypeScript', 'HTML5', 'CSS3', 'Vite', 'Redux'],
    },
    {
        category: 'Backend',
        items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'WebSockets', 'Python', 'FastAPI'],
    },
    {
        category: 'Database & Storage',
        items: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL', 'Firebase', 'Supabase'],
    },
    {
        category: 'DevOps & Tools',
        items: ['Git', 'GitHub', 'Docker', 'Nginx', 'Linux', 'CI/CD', 'Vercel', 'Railway'],
    },
    {
        category: 'Design',
        items: ['Figma', 'Responsive Design', 'UI/UX Principles', 'Design Systems', 'Accessibility'],
    },
]

const EMOJI = {
    Frontend: '🎨', Backend: '⚙️', 'Database & Storage': '🗄️', 'DevOps & Tools': '🚀', Design: '✏️'
}

export default function Skills() {
    return (
        <div className="page-skills">
            <div className="page-title">Skills</div>
            <div className="page-subtitle">// technologies I work with</div>

            {SKILLS.map(cat => (
                <div key={cat.category} className="skills-category">
                    <h3>{EMOJI[cat.category]} {cat.category}</h3>
                    <div className="skills-grid">
                        {cat.items.map(skill => (
                            <div key={skill} className="skill-chip">{skill}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
