const PAGE_META = {
    home: { label: 'home.tsx', lang: 'TypeScript React' },
    about: { label: 'about.html', lang: 'HTML' },
    projects: { label: 'projects.js', lang: 'JavaScript' },
    skills: { label: 'skills.json', lang: 'JSON' },
    experience: { label: 'experience.ts', lang: 'TypeScript' },
    contact: { label: 'contact.css', lang: 'CSS' },
}

export default function BreadcrumbBar({ activePage }) {
    const meta = PAGE_META[activePage] ?? { label: activePage, lang: '' }
    return (
        <div className="breadcrumb-bar">
            <span>portfolio</span>
            <span className="sep">›</span>
            <span>src</span>
            <span className="sep">›</span>
            <span className="crumb">{meta.label}</span>
        </div>
    )
}
