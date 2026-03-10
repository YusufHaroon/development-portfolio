import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Placeholder — wire to backend/emailjs as needed
        setSent(true)
        setTimeout(() => setSent(false), 3000)
    }

    return (
        <div className="page-contact">
            <div className="page-title">Contact</div>
            <div className="page-subtitle">// let's build something great together</div>

            <div className="contact-links">
                <a className="contact-link" href="https://github.com/YusufHaroon" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58C20.57 21.8 24 17.31 24 12 24 5.37 18.63 0 12 0z" />
                    </svg>
                    GitHub
                </a>
                <a className="contact-link" href="mailto:your@email.com">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <polyline points="2,4 12,14 22,4" />
                    </svg>
                    Email Me
                </a>
                <a className="contact-link" href="/resume.pdf" download="YusufHaroon_Resume.pdf">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M12 3v13M7 11l5 5 5-5" />
                        <path d="M5 21h14" />
                    </svg>
                    Download Resume
                </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        className="form-input"
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        className="form-input"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <input
                        className="form-input"
                        placeholder="What's this about?"
                        value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        className="form-textarea"
                        placeholder="Tell me about your project or opportunity..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" className="form-submit">
                    {sent ? '✅ Message Sent!' : '🚀 Send Message'}
                </button>
            </form>
        </div>
    )
}
