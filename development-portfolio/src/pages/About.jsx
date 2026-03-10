export default function About() {
    return (
        <div className="page-about">
            <div className="page-title">About Me</div>
            <div className="page-subtitle">// a bit about the developer behind the code</div>

            <div className="about-grid">
                <div className="about-card">
                    <h3>👤 Who I Am</h3>
                    <p>
                        I'm Yusuf Haroon, a passionate full-stack developer who loves
                        crafting beautiful, high-performance web applications. I thrive
                        at the intersection of technology and creativity.
                    </p>
                </div>
                <div className="about-card">
                    <h3>🎯 What I Do</h3>
                    <ul>
                        <li>Build full-stack web apps with React & Node.js</li>
                        <li>Design intuitive and accessible UIs</li>
                        <li>Architect scalable backend systems</li>
                        <li>Collaborate on open-source projects</li>
                    </ul>
                </div>
                <div className="about-card">
                    <h3>🌍 Beyond Code</h3>
                    <p>
                        When I'm not coding, I'm exploring new technologies, contributing
                        to open source, or brewing the perfect cup of coffee while thinking
                        about the next big project.
                    </p>
                </div>
                <div className="about-card">
                    <h3>📚 Always Learning</h3>
                    <ul>
                        <li>Cloud Architecture & DevOps</li>
                        <li>Machine Learning fundamentals</li>
                        <li>System Design patterns</li>
                        <li>Open Source contributions</li>
                    </ul>
                </div>
            </div>

            <div className="about-card" style={{ marginBottom: '20px' }}>
                <h3>💡 My Philosophy</h3>
                <p>
                    Great software is built at the intersection of <span style={{ color: '#4ec9b0' }}>elegant engineering</span>,{' '}
                    <span style={{ color: '#ff79c6' }}>thoughtful design</span>, and{' '}
                    <span style={{ color: '#f1fa8c' }}>empathy for the user</span>.
                    I believe every line of code is a chance to make the world a better experience.
                </p>
            </div>
        </div>
    )
}
