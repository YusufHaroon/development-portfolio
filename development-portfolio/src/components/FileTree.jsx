const FILES = [
    { id: 'home', label: 'home.tsx', icon: '⚛️', image: '/typescript-logo.png' },
    { id: 'about', label: 'about.html', icon: '🟠', image: '/html-logo.png' },
    { id: 'projects', label: 'projects.js', icon: '🟡', image: '/js.png' },
    { id: 'skills', label: 'skills.json', icon: '🔵', image: '/json.png' },
    { id: 'experience', label: 'experience.ts', icon: '🟦', image: '/typescript-logo.png' },
    { id: 'contact', label: 'contact.css', icon: '🟣', image: 'css-3.png' },
    { id: 'readme', label: 'README.md', icon: '📄', image: '/document.png' },
]

export default function FileTree({ activePage, onNavigate }) {
    return (
        <div className="sidebar-panel">
            <div className="sidebar-header">Portfolio</div>
            <div className="sidebar-section-title">
                <svg viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                SRC
            </div>
            <div className="file-tree">
                {FILES.map(f => (
                    <div
                        key={f.id}
                        className={`file-tree-item ${f.id === activePage ? 'active' : ''}`}
                        onClick={() => f.id !== 'readme' && onNavigate(f.id)}
                        style={f.id === 'readme' ? { opacity: 0.6, cursor: 'default' } : {}}
                    >
                        <img src={f.image} alt={f.icon} className="file-emoji" style={{ objectFit: 'contain' }} />
                        <span className="file-label">{f.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
