const PROJECTS = [
    {
        title: 'AI Mental Health Application',
        desc: 'Built an AI-powered mental health chatbot using Llama 3.3 with RAGs via ChromaDB, used All-mini-LM-v2 for vector embeddings from hugging face. Integrated LangSmith for observability and debugging of prompt chains, and LangGraph to structure conversational workflows like onboarding, risk assessment through Vader NLTK, and summarization.',
        tags: ['Next.js', 'Python', 'ChromaDB', 'LangGraph', 'LangSmith', 'Vader NLTK'],
    },
    {
        title: 'Driver Monitoring System',
        desc: 'Finetuned VGG-16 on a dataset of 2.3k images annotated through Roboflow to create an app using OpenCV & TensorFlow that tracks driver awareness state, taking note of irregularities in driver physical state that may cause accidents, and alerting the driver using with over 83% accuracy',
        tags: ['Python', 'OpenCV', 'TensorFlow', 'Roboflow'],
    },
    {
        title: 'MovieFinder React App',
        desc: 'Developed a MovieFinder React App using React.js and TailwindCSS that made use of the TMDB API to display the latest and tredning films. Also integrated appwrite to keep track of the most search on movies',
        tags: ['React', 'Appwrite', 'TailwindCSS',],
    },
    {
        title: 'Dummy AI Agent Simulation',
        desc: 'Simulated an AI agent using Meta-Llama-3-8B-Instruct via Hugging Face’s serverless API, showcasing structured Thought → Action → Observation → Answer reasoning. Integrated dummy too with manual observation injection to demonstrate tool-augmented LLM workflows.',
        tags: ['Python', 'Hugging Face', 'Meta-Llama-3-8B-Instruct'],
    },
    {
        title: 'Movie Recommendation System',
        desc: ' Built a content-based recommendation system on TMDB datasets. Preprocessed metadata (genres, cast, crew, etc.), engineered a unified "tags" feature, and applied Bag of Words with Cosine Similarity to return top 9 similar movies. Utilized Pandas, Scikit-learn, and NLTK for data processing and model implementation.',
        tags: ['Python', 'Pandas', 'Scikit', 'NLTK'],
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
