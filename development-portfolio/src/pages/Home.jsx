import { useEffect, useMemo, useState } from 'react'

function useTypeOnce(text, { startDelayMs = 0, typeMs = 80 } = {}) {
    const [out, setOut] = useState('')

    useEffect(() => {
        let cancelled = false
        let timeoutId

        const start = () => {
            let i = 0
            const tick = () => {
                if (cancelled) return
                i += 1
                setOut(text.slice(0, i))
                if (i < text.length) timeoutId = setTimeout(tick, typeMs)
            }
            tick()
        }

        timeoutId = setTimeout(start, startDelayMs)

        return () => {
            cancelled = true
            clearTimeout(timeoutId)
        }
    }, [startDelayMs, text, typeMs])

    return out
}

function useTypeCycle(
    phrases,
    { typeMs = 55, deleteMs = 30, holdMs = 2200, betweenMs = 450 } = {}
) {
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [charCount, setCharCount] = useState(0)
    const [mode, setMode] = useState('typing') // 'typing' | 'holding' | 'deleting' | 'between'

    const phrase = phrases[phraseIndex] ?? ''
    const out = phrase.slice(0, charCount)

    useEffect(() => {
        let timeoutId

        if (!phrases?.length) return

        if (mode === 'typing') {
            if (charCount < phrase.length) {
                timeoutId = setTimeout(() => setCharCount(c => c + 1), typeMs)
            } else {
                timeoutId = setTimeout(() => setMode('holding'), holdMs)
            }
        } else if (mode === 'holding') {
            timeoutId = setTimeout(() => setMode('deleting'), 0)
        } else if (mode === 'deleting') {
            if (charCount > 0) {
                timeoutId = setTimeout(() => setCharCount(c => c - 1), deleteMs)
            } else {
                timeoutId = setTimeout(() => setMode('between'), betweenMs)
            }
        } else if (mode === 'between') {
            setPhraseIndex(i => (i + 1) % phrases.length)
            setMode('typing')
            setCharCount(0)
        }

        return () => clearTimeout(timeoutId)
    }, [betweenMs, charCount, deleteMs, holdMs, mode, phrase.length, phrases, typeMs])

    return { text: out, isDeleting: mode === 'deleting' }
}

export default function Home({ onNavigate }) {
    const taglines = useMemo(
        () => [
            'Turning ideas into elegant, scalable solutions',
            'Building fast, accessible web experiences',
            'Blending AI with clean, modern UI',
            'Designing products users actually enjoy',
        ],
        []
    )

    const typedFullName = useTypeOnce('Yusuf Haroon', { startDelayMs: 120, typeMs: 85 })
    const { text: typedTagline } = useTypeCycle(taglines, {
        typeMs: 45,
        deleteMs: 26,
        holdMs: 2400,
        betweenMs: 520,
    })

    const firstName = 'Yusuf'
    const lastName = 'Haroon'
    const firstTyped = typedFullName.slice(0, firstName.length)
    const lastTyped = typedFullName.startsWith(`${firstName} `)
        ? typedFullName.slice(firstName.length + 1, firstName.length + 1 + lastName.length)
        : ''
    const nameDone = typedFullName.length >= `${firstName} ${lastName}`.length
    const nameCursorOnFirst = !nameDone && typedFullName.length <= firstName.length + 1
    const nameCursorOnLast = !nameDone && typedFullName.length > firstName.length + 1

    return (
        <div className="page-home">
            <div className="comment">//hello world!! Welcome to my portfolio</div>

            <div className="hero-name-row">
                <span className="hero-name">
                    {firstTyped}
                    {nameCursorOnFirst ? <span className="type-cursor" aria-hidden="true" /> : null}
                </span>
                <span className="hero-name-accent">
                    {lastTyped}
                    {nameCursorOnLast ? (
                        <span className="type-cursor type-cursor-accent" aria-hidden="true" />
                    ) : null}
                </span>
            </div>

            <div className="role-tags">
                {[
                    { label: 'Web & AI Developer', color: '#4ec9b0' },
                    { label: 'Branding Expert', color: '#f1fa8c' },
                    { label: 'UI/UX Enthusiast', color: '#ff79c6' },
                    { label: 'Open to Work', color: '#569cd6' },
                ].map(r => (
                    <div key={r.label} className="role-tag">
                        <span className="role-tag-dot" style={{ background: r.color }} />
                        {r.label}
                    </div>
                ))}
            </div>

            <div className="tagline">
                {typedTagline}
                <span className="type-cursor" aria-hidden="true" />
            </div>

            <p className="bio">
                I live at the crossroads of <strong>web & AI development</strong>, clean{' '}
                <strong>UI design</strong>, and thoughtful <strong>user experience</strong>.
                I build systems that are genuinely <strong>fast, intuitive, and scalable</strong>.
            </p>

            <div className="cta-row">
                <button className="cta-btn cta-btn-primary" onClick={() => onNavigate('projects')}>
                    <img className="cta-icon" src="/js.png" alt="" aria-hidden="true" />
                    Projects
                </button>
                <button className="cta-btn cta-btn-secondary" onClick={() => onNavigate('about')}>
                    <img className="cta-icon" src="/html-logo.png" alt="" aria-hidden="true" />
                    About Me
                </button>
                <button className="cta-btn cta-btn-secondary" onClick={() => onNavigate('contact')}>
                    <img className="cta-icon" src="/css-3.png" alt="" aria-hidden="true" />
                    Contact
                </button>
            </div>

            <div className="stats-row">
                {[
                    { value: '2+', label: 'Years' },
                    { value: '5+', label: 'Projects' },
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
