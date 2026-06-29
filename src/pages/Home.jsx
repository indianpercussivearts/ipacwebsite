import { Link } from 'react-router-dom'
import photo from '/photos/MyPhoto.jpeg'
import './Home.css'

export default function Home() {
  return (
    <main className="page">
      <section className="founder container">
        <div className="founder-photo-col">
          <img
            src={photo}
            alt="Jagadeeswaran Jayaprakash performing mridangam"
            className="founder-photo"
          />
        </div>

        <div className="founder-bio-col">
          <p className="founder-eyebrow">Founder &amp; Director</p>
          <h1 className="founder-name">Jagadeeswaran<br />Jayaprakash</h1>
          <p>
            Jagadeeswaran Jayaprakash has played a pivotal role in the Seattle mridangam scene,
            training over 75 students since 2009 and building a vibrant percussion community.
            His students have performed widely in the U.S. and India, winning several awards,
            notably at the Cleveland Aradhana.
          </p>
          <p>
            Trained by renowned gurus Smt Sukkanya Ramgopal, Sri B Ganapathyraman and
            Dr. Trichy Sankaran, he continues to shape the region's music culture through
            performances, collaborations, and teaching.
          </p>
          <p>
            Honored with the title "Laya Shiromani" by Samskriti Kala Kendra in 2023, he also serves on the board of
            the Chamber of Indian Performing Arts and leads the Indian Percussive Arts Center.
          </p>

          <div className="founder-stats">
            <div className="stat">
              <span className="stat-number">75+</span>
              <span className="stat-label">Students Trained</span>
            </div>
            <div className="stat">
              <span className="stat-number">16</span>
              <span className="stat-label">Years Teaching</span>
            </div>
          </div>

          <div className="founder-actions">
            <Link to="/philosophy" className="btn">Our Teaching Method</Link>
            <Link to="/contact" className="btn btn-outline">Enquire About Lessons</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
