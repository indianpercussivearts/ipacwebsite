import './Contact.css'

export default function Contact() {
  return (
    <main className="page">
      <div className="container contact-single">
        <h1 className="section-title">Get in Touch</h1>

        <div className="admissions-note">
          <h2 className="admissions-title">A note on admissions</h2>
          <p>
            IPAC is intentionally small. We do not take on new students regularly.
            Every student who joins becomes part of a close-knit community that receives
            deep, focused attention over many years.
          </p>
          <p>
            Our commitment is to quality of learning, not volume of enrolment. Each new
            student is welcomed only when we are confident the relationship, the
            readiness, and the shared values are right.
          </p>
          <p>
            If you feel a genuine calling to learn mridangam and the{' '}
            <a href="#/philosophy">IPAC philosophy</a> resonates with you, we would love
            to hear from you. Please write a detailed email and tell us about yourself,
            your relationship with music, and what draws you to this path. We read every
            message carefully and will get back to you.
          </p>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <a href="mailto:indianpercussivearts@gmail.com">indianpercussivearts@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Sammamish, WA</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📸</span>
            <a href="https://www.instagram.com/jjmridangam" target="_blank" rel="noreferrer">@jjmridangam</a>
          </div>
        </div>
      </div>
    </main>
  )
}
