export default function Sidebar({ activePanel, onPanelToggle, onFocusSearch, onOpenGitHub }) {

    const buttons = [
        {
            id: 'explorer',
            label: 'Explorer',
            onClick: () => onPanelToggle('explorer'),
            svg: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="8" height="5" rx="1" />
                    <rect x="3" y="11" width="18" height="10" rx="1" />
                    <line x1="7" y1="8" x2="7" y2="11" />
                </svg>
            ),
        },
        {
            id: 'search',
            label: 'Search',
            onClick: () => { onFocusSearch(); onPanelToggle('search') },
            svg: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
            ),
        },
        {
            id: 'sourcecontrol',
            label: 'Source Control',
            onClick: onOpenGitHub,
            svg: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="18" cy="6" r="2.5" />
                    <circle cx="6" cy="18" r="2.5" />
                    <circle cx="6" cy="6" r="2.5" />
                    <line x1="6" y1="8.5" x2="6" y2="15.5" />
                    <path d="M15.5 6 Q10 6 10 12" />
                </svg>
            ),
        },
        {
            id: 'download',
            label: 'Download Resume',
            onClick: () => {
                const a = document.createElement('a')
                a.href = '/resume.pdf'
                a.download = 'YusufHaroon_Resume.pdf'
                a.click()
            },
            svg: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 3v13M7 11l5 5 5-5" />
                    <path d="M5 21h14" />
                </svg>
            ),
        },
    ]

    const bottomButtons = [
        {
            id: 'copilot',
            label: 'Copilot (coming soon)',
            onClick: () => { },
            svg: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2C6.48 2 2 7 2 12s4.48 10 10 10 10-5 10-10S17.52 2 12 2z" />
                    <path d="M9 9h.01M15 9h.01" />
                    <path d="M9 15c.83 1.5 5.17 1.5 6 0" />
                </svg>
            ),
        },
    ]

    return (
        <div className="activity-bar">
            <div className="activity-top">
                {buttons.map(b => (
                    <div
                        key={b.id}
                        className={`activity-btn ${activePanel === b.id ? 'active' : ''}`}
                        onClick={b.onClick}
                        title={b.label}
                    >
                        {b.svg}
                        <span className="tooltip">{b.label}</span>
                    </div>
                ))}
            </div>
            <div className="activity-bottom">
                {bottomButtons.map(b => (
                    <div
                        key={b.id}
                        className="activity-btn"
                        onClick={b.onClick}
                        title={b.label}
                    >
                        {b.svg}
                        <span className="tooltip">{b.label}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
