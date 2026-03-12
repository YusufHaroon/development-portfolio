const TIMELINE = [
    {
        company: 'Data Pulse Technologies',
        role: 'Brand Developer',
        period: 'Dec 2024 – Present',
        bullets: [
            'Developed and maintained digital brand systems, ensuring consistency across web applications, dashboards, and marketing platforms.',
            'Collaborated on front-end focused projects involving UI implementation, design-to-code handoff, and optimization of visual components.',
            'Built and managed digital assets and workflows for internal tools and client-facing platforms.',
            'Assisted in automating internal workflows using n8n, improving content publishing, lead handling, and operational efficiency',
        ],
    },
    {
        company: 'RAISC',
        role: 'Co-Founder',
        period: 'April 2025 – Feb 2026',
        bullets: [
            'Co-founded a tech startup focused on developing an AI-powered mental health platform',
            'Designed and implemented core AI infrastructure for RAISC, supporting therapist workflows and patient interactions',
            'Built and integrated LLM-driven conversational pipelines, including onboarding flows, risk assessment, and session summarization.',
            'Collaborated closely with psychologists to translate clinical requirements into functional AI features and system logic.',
        ],
    },
    {
        company: 'Sports Media Inc.',
        role: 'AI Intern',
        period: 'Aug 2024 – Oct2024',
        bullets: [
            'Contributed to the Phone AI Project, supporting the development of a voice-assisted chatbot',
            'Integrated structured company data into a Vector Database (ChromaDB) to enable accurate, real-time responses to over 1,000+ user queries per week',
            'Worked with tools such as Python, LangChain, and OpenAI APIs',
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
