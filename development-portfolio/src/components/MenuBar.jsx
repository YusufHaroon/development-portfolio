import { useState, useEffect, useRef } from 'react'

const PAGES = [
    { id: 'home', label: 'Home', file: 'home.tsx' },
    { id: 'about', label: 'About', file: 'about.html' },
    { id: 'projects', label: 'Projects', file: 'projects.js' },
    { id: 'skills', label: 'Skills', file: 'skills.json' },
    { id: 'experience', label: 'Experience', file: 'experience.ts' },
    { id: 'contact', label: 'Contact', file: 'contact.css' },
]

export default function MenuBar({ onNavigate, onFocusSearch, onZoomIn, onZoomOut }) {
    const [open, setOpen] = useState(null)
    const ref = useRef(null)

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(null)
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    const toggle = (menu) => setOpen(v => v === menu ? null : menu)

    const handleNav = (pageId) => {
        onNavigate(pageId)
        setOpen(null)
    }

    const handleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => { })
        } else {
            document.exitFullscreen().catch(() => { })
        }
        setOpen(null)
    }

    const menus = {
        File: (
            <div className="menu-dropdown">
                <div className="menu-dropdown-item" style={{ opacity: 0.5, cursor: 'default', fontSize: '11px', paddingBottom: '2px' }}>OPEN FILE</div>
                {PAGES.map(p => (
                    <div key={p.id} className="menu-dropdown-item" onMouseDown={() => handleNav(p.id)}>
                        <span>{p.file}</span>
                    </div>
                ))}
                <div className="menu-dropdown-separator" />
                <div className="menu-dropdown-item" onMouseDown={() => { window.open('/resume.pdf', '_blank'); setOpen(null) }}>
                    <span>📄 Download Resume</span>
                    <span className="menu-shortcut">Ctrl+Shift+S</span>
                </div>
            </div>
        ),
        Edit: (
            <div className="menu-dropdown">
                <div className="menu-dropdown-item" onMouseDown={() => { onFocusSearch(); setOpen(null) }}>
                    <span>🔍 Find</span>
                    <span className="menu-shortcut">Ctrl+F</span>
                </div>
            </div>
        ),
        View: (
            <div className="menu-dropdown">
                <div className="menu-dropdown-item" onMouseDown={handleFullscreen}>
                    <span>⤢ Toggle Fullscreen</span>
                    <span className="menu-shortcut">F11</span>
                </div>
                <div className="menu-dropdown-separator" />
                <div className="menu-dropdown-item" onMouseDown={() => { onZoomIn(); setOpen(null) }}>
                    <span>🔍 Zoom In</span>
                    <span className="menu-shortcut">Ctrl++</span>
                </div>
                <div className="menu-dropdown-item" onMouseDown={() => { onZoomOut(); setOpen(null) }}>
                    <span>🔍 Zoom Out</span>
                    <span className="menu-shortcut">Ctrl+−</span>
                </div>
            </div>
        ),
        Go: (
            <div className="menu-dropdown">
                <div className="menu-dropdown-item" style={{ opacity: 0.5, cursor: 'default', fontSize: '11px', paddingBottom: '2px' }}>GO TO FILE</div>
                {PAGES.map(p => (
                    <div key={p.id} className="menu-dropdown-item" onMouseDown={() => handleNav(p.id)}>
                        <span>{p.file}</span>
                    </div>
                ))}
            </div>
        ),
        Run: null,
        Terminal: null,
        Help: null,
        Copilot: null,
    }

    return (
        <div className="menu-bar" ref={ref}>
            {Object.keys(menus).map(name => (
                <div key={name} className={`menu-item ${open === name ? 'open' : ''}`}>
                    <button
                        className="menu-item-btn"
                        onMouseDown={() => menus[name] ? toggle(name) : undefined}
                    >
                        {name}
                    </button>
                    {open === name && menus[name]}
                </div>
            ))}
        </div>
    )
}
