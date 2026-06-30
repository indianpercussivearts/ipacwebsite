import './Contact.css'

export default function Contact() {
  return (
    <main className="page">
      <div className="container contact-single">
        <h1 className="section-title">Get in Touch</h1>

        <div className="admissions-note">
          <h2 className="admissions-title">Joining the IPAC Community</h2>
          <p>
            IPAC practices selective admission — not as a barrier, but as a reflection of
            the deep commitment this path requires. Every student who joins becomes part of
            a close-knit community built around a shared, futuristic vision for the artform.
          </p>
          <p>
            We value dedication, curiosity, and a willingness to grow over the long term.
            Our goal is to instill in every student the music knowledge, confidence, and
            experience to become a responsible ambassador of this artform in the future.
          </p>
          <p>
            If the <a href="#/philosophy">IPAC philosophy</a> resonates with you, we would
            love to hear from you. Write to us and tell us about yourself, your relationship
            with music, and what draws you to this path. We read every message carefully
            and will get back to you.
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
