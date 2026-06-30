import { Link } from 'react-router-dom'
import founderPhoto from '/photos/MyPhoto.jpeg'
import './Home.css'

const collagePhotos = [
  { src: '/photos/homepage/cipa-concert.jpg',   alt: 'Students performing at CIPA concert',  objectPosition: 'center center' },
  { src: '/photos/homepage/group-2025.jpg',     alt: 'IPAC student community 2025',           objectPosition: 'center 25%' },
  { src: '/photos/homepage/home-lesson.jpg',    alt: 'Home lesson with students',             objectPosition: 'center center' },
  { src: '/photos/homepage/swarayoga-2025.jpg', alt: 'Students performing at Swarayoga 2025', objectPosition: 'center 65%' },
]

export default function Home() {
  return (
    <main className="page">

      {/* ── School intro ── */}
      <section className="home-hero container">
        <div className="home-intro">
          <p className="home-eyebrow">Sammamish, WA</p>
          <h1 className="home-title">Indian Percussive<br />Arts Center</h1>
          <p className="home-tagline">
            Where ancient rhythm becomes living expression.
          </p>
          <p className="home-description">
            Founded by Jagadeeswaran Jayaprakash, a celebrated Indian percussionist, collaborator, and
            teacher based in the Pacific Northwest, IPAC is the avant-garde of Carnatic percussion in the
            Pacific Northwest.
          </p>
          <p className="home-description">
            The school centers on the mridangam, the foundational voice of South Indian classical music,
            while holding a vision that reaches beyond Carnatic percussion into the wider world of rhythm,
            where cultures meet and connect.
          </p>
          <p className="home-description">
            Through the IPAC Continuum Method, students progress from their very first lesson to the
            graduation stage, building deep artistry and a lifelong connection to a tradition that is
            very much alive and growing.
          </p>
          <div className="home-actions">
            <Link to="/philosophy" className="btn">Our Teaching Method</Link>
            <Link to="/contact" className="btn btn-outline">Enquire About Lessons</Link>
          </div>
        </div>
      </section>

      {/* ── Photos ── */}
      <section className="home-photos container">
        <div className="photo-grid">
          {collagePhotos.map((photo, i) => (
            <div className="photo-item" key={i}>
              <img src={photo.src} alt={photo.alt} style={{ objectPosition: photo.objectPosition }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="home-stats container">
        <div className="stat-row">
          <div className="stat">
            <span className="stat-number">75+</span>
            <span className="stat-label">Students Trained</span>
          </div>
          <div className="stat">
            <span className="stat-number">16+</span>
            <span className="stat-label">Years Teaching</span>
          </div>
        </div>
      </section>

      {/* ── Founder bio ── */}
      <section className="home-founder container">
        <div className="founder-grid">
          <div className="founder-photo-col">
            <img
              src={founderPhoto}
              alt="Jagadeeswaran Jayaprakash performing mridangam"
              className="founder-photo"
            />
          </div>
          <div className="founder-bio-col">
            <p className="home-eyebrow">Founder &amp; Director</p>
            <h2 className="founder-name">Jagadeeswaran<br />Jayaprakash</h2>
            <p>
              Jagadeeswaran Jayaprakash has played a pivotal role in the Seattle mridangam scene,
              training over 75 students since 2009 and building a vibrant percussion community.
              His students have performed widely in the U.S. and India, winning several awards,
              notably at the Cleveland Aradhana.
            </p>
            <p>
              Trained by Smt Sukkanya Ramgopal, Sri B Ganapathyraman and
              Dr. Trichy Sankaran, he continues to shape the region's music culture through
              performances, collaborations, and teaching.
            </p>
            <p>
              Not restricted to just the traditional repertoire, Jagadeeswaran actively composes
              and creates new work, considering the percussion language as an extension of human
              expression, and weaving social themes and messages into his compositions.
            </p>
            <p>
              Honored with the title "Laya Shiromani" by Samskriti Kala Kendra in 2023, he also
              serves on the board of the Chamber of Indian Performing Arts and leads the Indian
              Percussive Arts Center.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
