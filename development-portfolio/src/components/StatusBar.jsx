import { useState, useRef, useEffect } from 'react'

const PAGE_LANG = {
    home: 'TypeScript React',
    about: 'HTML',
    projects: 'JavaScript',
    skills: 'JSON',
    experience: 'TypeScript',
    contact: 'CSS',
}

const THEMES = [
    { id: 'aahana-dark', label: 'Aahana Dark' },
    { id: 'dracula',     label: 'Dracula' },
    { id: 'monokai',     label: 'Monokai' },
    { id: 'everforest',  label: 'Everforest' },
    { id: 'github-light', label: 'GitHub Light' },
    { id: 'synthwave',   label: "Synthwave '84" },
]

export default function StatusBar({ activePage, zoom, theme, onThemeChange }) {
    const [open, setOpen] = useState(false)
    const dropRef = useRef(null)
    const now = new Date()
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
    const lang = PAGE_LANG[activePage] ?? 'Plain Text'
    const currentTheme = THEMES.find(t => t.id === theme) ?? THEMES[0]

    useEffect(() => {
        if (!open) return
        const handler = (e) => {
            if (dropRef.current && !dropRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [open])

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

                {/* Theme picker */}
                <div className="status-item status-theme-btn" ref={dropRef} style={{ position: 'relative' }} onClick={() => setOpen(o => !o)}>
                    <svg viewBox="0 0 16 16" fill="currentColor" style={{ width: 13, height: 13 }}>
                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 12.5A5.5 5.5 0 1 1 8 2.5a5.5 5.5 0 0 1 0 11zm0-9a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 8 7.5z"/>
                    </svg>
                    {currentTheme.label}
                    {open && (
                        <div className="theme-dropdown">
                            {THEMES.map(t => (
                                <div
                                    key={t.id}
                                    className={`theme-dropdown-item${t.id === theme ? ' active' : ''}`}
                                    onClick={(e) => { e.stopPropagation(); onThemeChange(t.id); setOpen(false) }}
                                >
                                    <span className="theme-dot" data-tid={t.id} />
                                    {t.label}
                                    {t.id === theme && (
                                        <svg viewBox="0 0 16 16" fill="currentColor" style={{ width: 12, height: 12, marginLeft: 'auto' }}>
                                            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/>
                                        </svg>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="status-item">Prettier</div>
                <div className="status-item">{time}</div>
            </div>
        </div>
    )
}
