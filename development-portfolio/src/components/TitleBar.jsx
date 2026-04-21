import { useState, useRef, useEffect } from 'react'

const PAGES = [
    { id: 'home', label: 'home.tsx', image: '/typescript-logo.png', lang: 'TypeScript React' },
    { id: 'about', label: 'about.html', image: '/html-logo.png', lang: 'HTML' },
    { id: 'projects', label: 'projects.js', image: '/js.png', lang: 'JavaScript' },
    { id: 'skills', label: 'skills.json', image: '/json.png', lang: 'JSON' },
    { id: 'experience', label: 'experience.ts', image: '/typescript-logo.png', lang: 'TypeScript' },
    { id: 'contact', label: 'contact.css', image: '/css-3.png', lang: 'CSS' },
]

export default function TitleBar({ activePage, onNavigate, onFocusSearch, searchRef }) {
    const [query, setQuery] = useState('')
    const [showDrop, setShowDrop] = useState(false)
    const [popup, setPopup] = useState(null)
    const dropRef = useRef(null)

    const filtered = query.trim()
        ? PAGES.filter(p =>
            p.label.toLowerCase().includes(query.toLowerCase()) ||
            p.id.toLowerCase().includes(query.toLowerCase())
        )
        : PAGES

    useEffect(() => {
        const handler = (e) => {
            if (dropRef.current && !dropRef.current.contains(e.target)) {
                setShowDrop(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    const currentPage = PAGES.find(p => p.id === activePage)

    const handleDotClick = (type) => {
        if (type === 'red') setPopup("Can't close it 😤 I worked hard on this!")
        if (type === 'yellow') setPopup("You can't minimize potential 💪")
        if (type === 'green') {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => { })
            } else {
                document.exitFullscreen().catch(() => { })
            }
        }
    }

    return (
        <>
            <div className="title-bar">
                {/* Window Controls */}
                <div className="window-controls">
                    <div className="window-dot red" onClick={() => handleDotClick('red')} title="Close">✕</div>
                    <div className="window-dot yellow" onClick={() => handleDotClick('yellow')} title="Minimize">−</div>
                    <div className="window-dot green" onClick={() => handleDotClick('green')} title="Fullscreen">⤢</div>
                </div>

                {/* Center: label + search */}
                <div className="title-bar-center">
                    <span className="title-bar-label">
                        portfolio : {currentPage?.label ?? 'portfolio'}
                    </span>

                    <div className="title-search-wrapper" ref={dropRef}>
                        <input
                            ref={searchRef}
                            className="title-search-input"
                            placeholder="🔍  Search files..."
                            value={query}
                            onChange={e => { setQuery(e.target.value); setShowDrop(true) }}
                            onFocus={() => setShowDrop(true)}
                        />
                        {showDrop && (
                            <div className="search-dropdown">
                                {filtered.length === 0 && (
                                    <div className="search-dropdown-item" style={{ opacity: 0.5 }}>No results</div>
                                )}
                                {filtered.map(p => (
                                    <div
                                        key={p.id}
                                        className={`search-dropdown-item ${p.id === activePage ? 'active' : ''}`}
                                        onMouseDown={() => {
                                            onNavigate(p.id)
                                            setShowDrop(false)
                                            setQuery('')
                                        }}
                                    >
                                        <img className="file-icon-img" src={p.image} alt="" aria-hidden="true" />
                                        {p.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Popup */}
            {popup && (
                <div className="popup-overlay" onClick={() => setPopup(null)}>
                    <div className="popup-box" onClick={e => e.stopPropagation()}>
                        <div className="popup-emoji">🖥️</div>
                        <p>{popup}</p>
                        <button className="popup-btn" onClick={() => setPopup(null)}>OK</button>
                    </div>
                </div>
            )}
        </>
    )
}
