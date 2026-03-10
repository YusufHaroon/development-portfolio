const PROJECTS = [
    {
        title: 'Portfolio OS',
        desc: 'A VS Code-themed developer portfolio built with React. Pixel-perfect VS Code UI replica with full interactivity.',
        tags: ['React', 'Vite', 'CSS', 'JavaScript'],
    },
    {
        title: 'E-Commerce Platform',
        desc: 'Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
        title: 'Task Management App',
        desc: 'Collaborative project management tool with drag-and-drop kanban boards, real-time updates and team features.',
        tags: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    },
    {
        title: 'Weather Dashboard',
        desc: 'Beautiful weather visualization dashboard with animated charts, forecasts, and location-based tracking.',
        tags: ['React', 'D3.js', 'OpenWeather API'],
    },
    {
        title: 'API Gateway Service',
        desc: 'Microservices-ready API gateway with rate limiting, authentication middleware, and request routing.',
        tags: ['Node.js', 'Express', 'Redis', 'Docker'],
    },
    {
        title: 'Chat Application',
        desc: 'Real-time messaging app with WebSocket support, end-to-end encryption and file sharing capabilities.',
        tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    },
]

export default function Projects() {
    return (
        <div className="page-projects">
            <div className="page-title">Projects</div>
            <div className="page-subtitle">// things I've built that I'm proud of</div>

            <div className="projects-grid">
                {PROJECTS.map(p => (
                    <div key={p.title} className="project-card">
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        <div className="project-tags">
                            {p.tags.map(t => (
                                <span key={t} className="project-tag">{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
