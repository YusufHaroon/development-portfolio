export default function About() {
    return (
        <div className="page-about">
            <div className="page-title">About Me</div>
            <div className="page-subtitle">// a bit about the developer behind the code</div>

            <div className="about-grid">
                <div className="about-card">
                    <h3>👤 Who I Am</h3>
                    <p>
                        I'm <span style={{ color: '#b24ec9ff' }}>Yusuf Haroon</span>, a passionate developer who loves
                        crafting beautiful, high-performance web applications. I thrive
                        at the intersection of technology and creativity, creating beautiful user interfaces and experiences.
                    </p>
                </div>
                <div className="about-card">
                    <h3>🎯 What I Do</h3>
                    <ul>
                        <li>Build engaging and interactive web applications</li>
                        <li>Design intuitive and accessible UIs</li>
                        <li>Work on branding to ensure a consistent and professional look</li>
                        <li>Explore AI and automation to improve efficiency</li>
                    </ul>
                </div>
                <div className="about-card">
                    <h3>🌍 Beyond Code</h3>
                    <p>
                        When I'm not coding, I'm exploring new technologies, checking out
                        new AI tools, or looking at the latest design trends at Behance
                    </p>
                </div>
                <div className="about-card">
                    <h3>📚 Always Learning</h3>
                    <ul>
                        <li>AI Tools & Technologies</li>
                        <li>Machine Learning fundamentals</li>
                        <li>Latest Design Trends</li>
                        <li>Interactive Website Designs</li>
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
