export default function GitHubModal({ onClose }) {
    const username = 'YusufHaroon'

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 6, verticalAlign: 'middle' }}>
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58C20.57 21.8 24 17.31 24 12 24 5.37 18.63 0 12 0z" />
                        </svg>
                        GitHub Contributions — {username}
                    </h3>
                    <button className="modal-close-btn" onClick={onClose}>×</button>
                </div>
                <div className="modal-body">
                    <img
                        src={`https://ghchart.rshah.org/007acc/${username}`}
                        alt="GitHub Contribution Chart"
                        onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
                    />
                    <p style={{ display: 'none', color: '#888', fontSize: '12px' }}>
                        Could not load contribution graph. Check your internet connection.
                    </p>
                    <img
                        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=252526&title_color=007acc&icon_color=4ec9b0&text_color=cccccc`}
                        alt="GitHub Stats"
                    />
                    <p>
                        🔗{' '}
                        <a
                            href={`https://github.com/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#4fc1ff' }}
                        >
                            github.com/{username}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
