import { useState } from 'react'

const PROJECTS = [
    {
        title: 'AI Mental Health Application',
        desc: 'Built an AI-powered mental health chatbot using Llama 3.3 with RAGs via ChromaDB, used All-mini-LM-v2 for vector embeddings from hugging face. Integrated LangSmith for observability and debugging of prompt chains, and LangGraph to structure conversational workflows like onboarding, risk assessment through Vader NLTK, and summarization.',
        github: 'https://github.com/YusufHaroon/AI-Mental-Health-Application',
        liveLink: null,
        tags: ['Next.js', 'Python', 'ChromaDB', 'LangGraph', 'LangSmith', 'Vader NLTK'],
    },
    {
        title: 'Driver Monitoring System',
        desc: 'Finetuned VGG-16 on a dataset of 2.3k images annotated through Roboflow to create an app using OpenCV & TensorFlow that tracks driver awareness state, taking note of irregularities in driver physical state that may cause accidents, and alerting the driver using with over 83% accuracy.',
        github: 'https://github.com/YusufHaroon/Driver-Monitoring-System',
        liveLink: null,
        tags: ['Python', 'OpenCV', 'TensorFlow', 'Roboflow'],
    },
    {
        title: 'MovieFinder React App',
        desc: 'Developed a MovieFinder React App using React.js and TailwindCSS that made use of the TMDB API to display the latest and trending films. Also integrated Appwrite to keep track of the most searched movies.',
        github: 'https://github.com/YusufHaroon/MovieFinder',
        liveLink: null,
        tags: ['React', 'Appwrite', 'TailwindCSS'],
    },
    {
        title: 'Dummy AI Agent Simulation',
        desc: "Simulated an AI agent using Meta-Llama-3-8B-Instruct via Hugging Face's serverless API, showcasing structured Thought → Action → Observation → Answer reasoning. Integrated dummy tools with manual observation injection to demonstrate tool-augmented LLM workflows.",
        github: 'https://github.com/YusufHaroon/Dummy-AI-Agent-Simulation',
        liveLink: null,
        tags: ['Python', 'Hugging Face', 'Meta-Llama-3-8B-Instruct'],
    },
    {
        title: 'Movie Recommendation System',
        desc: 'Built a content-based recommendation system on TMDB datasets. Preprocessed metadata (genres, cast, crew, etc.), engineered a unified "tags" feature, and applied Bag of Words with Cosine Similarity to return top 9 similar movies. Utilized Pandas, Scikit-learn, and NLTK for data processing and model implementation.',
        github: 'https://github.com/YusufHaroon/Movie-Recommendation-System',
        liveLink: null,
        tags: ['Python', 'Pandas', 'Scikit', 'NLTK'],
    },
]

function GitHubIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58C20.57 21.8 24 17.31 24 12 24 5.37 18.63 0 12 0z" />
        </svg>
    )
}

function ExternalLinkIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    )
}

function ProjectModal({ project, onClose }) {
    return (
        <div className="proj-modal-overlay" onClick={onClose}>
            <div className="proj-modal-box" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="proj-modal-header">
                    <div className="proj-modal-title">{project.title}</div>
                    <button className="modal-close-btn" onClick={onClose}>×</button>
                </div>

                {/* Body */}
                <div className="proj-modal-body">
                    {/* Description */}
                    <p className="proj-modal-desc">{project.desc}</p>

                    {/* Links */}
                    <div className="proj-modal-links">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="proj-modal-link proj-modal-link--github"
                            >
                                <GitHubIcon />
                                GitHub
                            </a>
                        )}
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="proj-modal-link proj-modal-link--live"
                            >
                                <ExternalLinkIcon />
                                Live Demo
                            </a>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="proj-modal-divider" />

                    {/* Technologies */}
                    <div className="proj-modal-tech-section">
                        <div className="proj-modal-tech-label">// technologies &amp; languages</div>
                        <div className="proj-modal-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="proj-modal-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <div className="page-projects">
            <div className="page-title">Projects</div>
            <div className="page-subtitle">// things I've built that I'm proud of</div>

            <div className="projects-grid">
                {PROJECTS.map(p => (
                    <div
                        key={p.title}
                        className="project-card"
                        onClick={() => setSelectedProject(p)}
                    >
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

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    )
}
