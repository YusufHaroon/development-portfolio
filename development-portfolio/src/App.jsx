import { useState, useRef, useEffect } from 'react'
import './App.css'

import TitleBar from './components/TitleBar'
import MenuBar from './components/MenuBar'
import Sidebar from './components/Sidebar'
import FileTree from './components/FileTree'
import TabBar from './components/TabBar'
import BreadcrumbBar from './components/BreadcrumbBar'
import StatusBar from './components/StatusBar'
import GitHubModal from './components/GitHubModal'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

const PAGE_META = {
    home: { label: 'home.tsx', icon: '⚛️' },
    about: { label: 'about.html', icon: '🟠' },
    projects: { label: 'projects.js', icon: '🟡' },
    skills: { label: 'skills.json', icon: '🔵' },
    experience: { label: 'experience.ts', icon: '🟦' },
    contact: { label: 'contact.css', icon: '🟣' },
}

const ZOOM_LEVELS = [75, 90, 100, 110, 125, 150]

export default function App() {
    // Multi-tab state: array of page ids currently open
    const [openTabs, setOpenTabs] = useState(['home'])
    const [activePage, setActivePage] = useState('home')
    const [activePanel, setActivePanel] = useState('explorer') // 'explorer' | 'search' | null
    const [showGitHub, setShowGitHub] = useState(false)
    const [zoomIndex, setZoomIndex] = useState(2) // default 100%
    const searchRef = useRef(null)

    // Apply zoom to content area
    const zoom = ZOOM_LEVELS[zoomIndex]

    // Keyboard shortcut: Ctrl+F → focus search
    useEffect(() => {
        const handler = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
                e.preventDefault()
                focusSearch()
            }
        }
        document.addEventListener('keydown', handler)
        return () => document.removeEventListener('keydown', handler)
    }, [])

    const navigateTo = (pageId) => {
        if (!PAGE_META[pageId]) return
        setActivePage(pageId)
        if (!openTabs.includes(pageId)) {
            setOpenTabs(prev => [...prev, pageId])
        }
    }

    const closeTab = (pageId) => {
        const newTabs = openTabs.filter(t => t !== pageId)
        setOpenTabs(newTabs)
        if (activePage === pageId) {
            setActivePage(newTabs[newTabs.length - 1] ?? 'home')
            if (newTabs.length === 0) {
                setOpenTabs(['home'])
                setActivePage('home')
            }
        }
    }

    const focusSearch = () => {
        if (searchRef.current) {
            searchRef.current.focus()
            searchRef.current.select()
        }
        setActivePanel('search')
    }

    const togglePanel = (panelId) => {
        setActivePanel(prev => prev === panelId ? null : panelId)
    }

    // Build tab objects
    const tabs = openTabs.map(id => ({ id, ...PAGE_META[id] }))

    const renderPage = () => {
        const scaleStyle = {
            transformOrigin: 'top left',
            transform: zoom !== 100 ? `scale(${zoom / 100})` : undefined,
            width: zoom !== 100 ? `${(100 / zoom) * 100}%` : '100%',
            minHeight: zoom !== 100 ? `${(100 / zoom) * 100}%` : '100%',
        }
        const Page = (() => {
            switch (activePage) {
                case 'home': return <Home onNavigate={navigateTo} />
                case 'about': return <About />
                case 'projects': return <Projects />
                case 'skills': return <Skills />
                case 'experience': return <Experience />
                case 'contact': return <Contact />
                default: return <Home onNavigate={navigateTo} />
            }
        })()
        return <div style={scaleStyle}>{Page}</div>
    }

    return (
        <div className="vscode-app">
            {/* ── Title Bar ── */}
            <TitleBar
                activePage={activePage}
                onNavigate={navigateTo}
                onFocusSearch={focusSearch}
                searchRef={searchRef}
            />

            {/* ── Menu Bar ── */}
            <MenuBar
                onNavigate={navigateTo}
                onFocusSearch={focusSearch}
                onZoomIn={() => setZoomIndex(i => Math.min(i + 1, ZOOM_LEVELS.length - 1))}
                onZoomOut={() => setZoomIndex(i => Math.max(i - 1, 0))}
            />

            {/* ── Body (sidebar + panel + editor) ── */}
            <div className="vscode-body">

                {/* Activity Bar */}
                <Sidebar
                    activePanel={activePanel}
                    onPanelToggle={togglePanel}
                    onFocusSearch={focusSearch}
                    onOpenGitHub={() => setShowGitHub(true)}
                />

                {/* File Tree / Explorer Panel */}
                {activePanel === 'explorer' && (
                    <FileTree activePage={activePage} onNavigate={navigateTo} />
                )}
                {activePanel === 'search' && (
                    <div className="sidebar-panel">
                        <div className="sidebar-header">Search</div>
                        <div style={{ padding: '12px' }}>
                            <input
                                autoFocus
                                className="form-input"
                                style={{ width: '100%', fontSize: '12px' }}
                                placeholder="Search files..."
                                onChange={e => {
                                    if (searchRef.current) {
                                        searchRef.current.value = e.target.value
                                        searchRef.current.dispatchEvent(new Event('input', { bubbles: true }))
                                    }
                                }}
                            />
                            <p style={{ fontSize: '11px', color: '#666', marginTop: '8px' }}>
                                Use the title bar search to navigate pages.
                            </p>
                        </div>
                    </div>
                )}

                {/* Editor Area */}
                <div className="editor-area">
                    {/* Tab Bar */}
                    <TabBar
                        tabs={tabs}
                        activePage={activePage}
                        onActivate={navigateTo}
                        onClose={closeTab}
                    />

                    {/* Breadcrumb */}
                    <BreadcrumbBar activePage={activePage} />

                    {/* Content */}
                    <div className="content-area">
                        {renderPage()}
                    </div>
                </div>
            </div>

            {/* ── Status Bar ── */}
            <StatusBar activePage={activePage} zoom={zoom} />

            {/* ── GitHub Modal ── */}
            {showGitHub && <GitHubModal onClose={() => setShowGitHub(false)} />}
        </div>
    )
}
