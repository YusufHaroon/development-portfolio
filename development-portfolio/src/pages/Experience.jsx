const TIMELINE = [
    {
        company: 'Data Pulse Technologies',
        role: 'Brand Developer',
        period: 'Dec 2024 – Present',
        bullets: [
            'Building VS Code-themed portfolio showcasing full-stack capabilities',
            'Contributing to open-source React and Node.js projects',
            'Exploring cloud-native architectures with AWS and Docker',
        ],
    },
    {
        company: 'RAISC',
        role: 'Co-Founder',
        period: '2024 – 2026',
        bullets: [
            'Developed responsive web applications for multiple clients using React, Next.js',
            'Improved performance by 40% through code-splitting and lazy loading strategies',
            'Collaborated directly with clients to translate designs into production-ready UI',
        ],
    },
    {
        company: 'Sports Media Inc.',
        role: 'AI Intern',
        period: '2022 – 2024',
        bullets: [
            'Built and deployed several full-stack apps including e-commerce platforms and dashboards',
            'Implemented REST APIs and real-time features with Socket.io and Express.js',
            'Practiced CI/CD pipelines using GitHub Actions, Docker, and Vercel',
        ],
    },
]

export default function Experience() {
    return (
        <div className="page-experience">
            <div className="page-title">Experience</div>
            <div className="page-subtitle">// the journey so far</div>

            <div className="timeline">
                {TIMELINE.map((item, i) => (
                    <div key={i} className="timeline-item">
                        <div className="timeline-dot" />
                        <div className="company">{item.company}</div>
                        <h3>{item.role}</h3>
                        <div className="period">{item.period}</div>
                        <ul>
                            {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}
