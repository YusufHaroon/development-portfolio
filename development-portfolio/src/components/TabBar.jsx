export default function TabBar({ tabs, activePage, onActivate, onClose }) {
    return (
        <div className="tab-bar">
            {tabs.map(tab => (
                <div
                    key={tab.id}
                    className={`tab ${tab.id === activePage ? 'active' : ''}`}
                    onClick={() => onActivate(tab.id)}
                >
                    <span className="tab-icon">
                        <img className="tab-icon-img" src={tab.image} alt="" aria-hidden="true" />
                    </span>
                    <span className="tab-label">{tab.label}</span>
                    <span
                        className="tab-close"
                        onClick={e => { e.stopPropagation(); onClose(tab.id) }}
                        title="Close"
                    >
                        ×
                    </span>
                </div>
            ))}
        </div>
    )
}
