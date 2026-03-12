const SKILLS = [
    {
        category: 'Languages',
        items: ['Python', 'C#', 'C++', 'Golang'],
    },
    {
        category: 'Web Development',
        items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Three.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'WordPress', 'Shopify'],
    },
    {
        category: 'Database & Storage',
        items: ['MongoDB', 'MySQL', 'Firebase', 'Supabase', 'ChromaDB', 'Appwrite'],
    },
    {
        category: 'Libraries',
        items: ['Numpy', 'Pandas', 'Scikit', 'NLTK', 'Tensorflow', 'PyTorch', 'LangChain', 'smolagents', 'Llamaindex', 'Langgraph',],
    },
    {
        category: 'Design',
        items: ['Figma', 'Canva', 'Adobe Illustrator', 'Adobe Photoshop', 'Framer'],
    },
]


const EMOJI = {
    'Languages': '💬', 'Web Development': '🌐', 'Database & Storage': '🗄️', 'Libraries': '📚', 'Design': '🎨'
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
