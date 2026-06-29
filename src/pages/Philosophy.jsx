import { Link } from 'react-router-dom'
import './Philosophy.css'

const coreValues = [
  {
    title: 'Every Child Can',
    body: 'Musical ability is not limited to a select few. With the right guidance, every child can develop artistic expression.',
  },
  {
    title: 'Consistency Over Talent',
    body: 'Regular, disciplined effort over time builds lasting musical ability.',
  },
  {
    title: 'The Continuum of Learning',
    body: 'Growth is continuous and cumulative, not rushed or fragmented.',
  },
  {
    title: 'Internalization Before Performance',
    body: 'Music must be deeply understood before it is performed.',
  },
  {
    title: 'Early Foundation, Lifelong Impact',
    body: 'Starting young allows music to develop naturally.',
  },
]

export default function Philosophy() {
  return (
    <main className="page">
      <div className="container">
        <p className="method-eyebrow">Teaching Philosophy</p>
        <h1 className="method-title">IPAC Continuum Method</h1>
        <p className="method-tagline">A structured pathway from early learning to artistic excellence</p>

        <div className="method-intro">
          <p>
            The IPAC Continuum Method is a long-term, discipline-driven approach to music education
            developed at the Indian Percussive Arts Center. It is founded on the belief that every
            child can grow into a confident and expressive artist through sustained guidance,
            structured progression, and consistent practice over time.
          </p>
          <p>
            Developed by Jagadeeswaran Jayaprakash after studying established Western approaches
            such as the Suzuki Method and thoughtfully adapting those principles to Indian music
            learning, this methodology has evolved over 16 years of teaching and mentoring more
            than 75 students.
          </p>
          <p>
            Unlike short-term or performance-focused training, the method emphasizes continuous
            development, where music is internalized deeply and refined gradually across years of
            learning. Students progress through a carefully designed system that integrates
            listening, recitation, technique, and musical expression.
          </p>
        </div>

        <h2 className="values-heading">Core Values</h2>
        <div className="values-grid">
          {coreValues.map(({ title, body }) => (
            <div className="value-card card" key={title}>
              <h3 className="value-title">{title}</h3>
              <p className="value-body">{body}</p>
            </div>
          ))}
        </div>

        <p className="method-summary">
          The IPAC Continuum Method develops young learners into confident performing artists
          through long-term, structured, and disciplined music training.
        </p>

        <div className="method-cta">
          <Link to="/contact" className="btn">Enquire About Lessons</Link>
        </div>
      </div>
    </main>
  )
}
