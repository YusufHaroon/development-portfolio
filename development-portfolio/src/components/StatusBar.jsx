const PAGE_LANG = {
    home: 'TypeScript React',
    about: 'HTML',
    projects: 'JavaScript',
    skills: 'JSON',
    experience: 'TypeScript',
    contact: 'CSS',
}

export default function StatusBar({ activePage, zoom }) {
    const now = new Date()
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
    const lang = PAGE_LANG[activePage] ?? 'Plain Text'

    return (
        <div className="status-bar">
            <div className="status-left">
                <div className="status-item">
                    <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M1 3h14v2H1zm0 4h10v2H1zm0 4h7v2H1z" />
                    </svg>
                    main
                </div>
                <div className="status-item">
                    <svg viewBox="0 0 16 16" fill="currentColor">
                        <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    0 errors, 0 warnings
                </div>
            </div>
            <div className="status-right">
                <div className="status-item">Ln 1, Col 1</div>
                <div className="status-item">{zoom}%</div>
                <div className="status-item">UTF-8</div>
                <div className="status-item">{lang}</div>
                <div className="status-item">Aahana Dark</div>
                <div className="status-item">Prettier</div>
                <div className="status-item">{time}</div>
            </div>
        </div>
    )
}
