const TIMELINE = [
    {
        company: 'Open to Opportunities',
        role: 'Full Stack Developer',
        period: '2026 – Present',
        bullets: [
            'Building VS Code-themed portfolio showcasing full-stack capabilities',
            'Contributing to open-source React and Node.js projects',
            'Exploring cloud-native architectures with AWS and Docker',
        ],
    },
    {
        company: 'Freelance',
        role: 'Frontend Developer',
        period: '2024 – 2026',
        bullets: [
            'Developed responsive web applications for multiple clients using React, Next.js',
            'Improved performance by 40% through code-splitting and lazy loading strategies',
            'Collaborated directly with clients to translate designs into production-ready UI',
        ],
    },
    {
        company: 'Personal Projects',
        role: 'Full Stack Engineer',
        period: '2022 – 2024',
        bullets: [
            'Built and deployed several full-stack apps including e-commerce platforms and dashboards',
            'Implemented REST APIs and real-time features with Socket.io and Express.js',
            'Practiced CI/CD pipelines using GitHub Actions, Docker, and Vercel',
        ],
    },
    {
        company: 'Self-Taught Journey',
        role: 'Student Developer',
        period: '2021 – 2022',
        bullets: [
            'Mastered JavaScript fundamentals, React, and Node.js through structured self-study',
            'Completed 500+ coding challenges on LeetCode and HackerRank',
            'Built first full-stack project: a task management app with auth and CRUD',
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
