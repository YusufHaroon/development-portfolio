export default function Home({ onNavigate }) {
    return (
        <div className="page-home">
            <div className="comment">// hello world !! Welcome to my portfolio</div>

            <div className="hero-name-row">
                <span className="hero-name">Yusuf</span>
                <span className="hero-name-accent">Haroon</span>
            </div>

            <div className="role-tags">
                {[
                    { label: 'Full Stack Developer', color: '#4ec9b0' },
                    { label: 'React & Node.js', color: '#f1fa8c' },
                    { label: 'UI/UX Enthusiast', color: '#ff79c6' },
                    { label: '@ Open to Work', color: '#569cd6' },
                ].map(r => (
                    <div key={r.label} className="role-tag">
                        <span className="role-tag-dot" style={{ background: r.color }} />
                        {r.label}
                    </div>
                ))}
            </div>

            <div className="tagline">Turning ideas into elegant, scalable solutions</div>

            <p className="bio">
                I live at the crossroads of <strong>full-stack engineering</strong>, clean{' '}
                <strong>UI design</strong>, and thoughtful <strong>user experience</strong>.
                I build systems that are genuinely <strong>fast, intuitive, and scalable</strong>.
            </p>

            <div className="cta-row">
                <button className="cta-btn cta-btn-primary" onClick={() => onNavigate('projects')}>
                    📁 Projects
                </button>
                <button className="cta-btn cta-btn-secondary" onClick={() => onNavigate('about')}>
                    👤 About Me
                </button>
                <button className="cta-btn cta-btn-secondary" onClick={() => onNavigate('contact')}>
                    ✉️ Contact
                </button>
            </div>

            <div className="stats-row">
                {[
                    { value: '3+', label: 'Years' },
                    { value: '10+', label: 'Projects' },
                    { value: '∞', label: 'Curiosity' },
                    { value: '↑', label: 'Always Learning' },
                ].map(s => (
                    <div key={s.label} className="stat-item">
                        <div className="stat-value">{s.value}</div>
                        <div className="stat-label">{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
