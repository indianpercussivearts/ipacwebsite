import { useState, useEffect, useCallback } from 'react'
import './Students.css'

const graduated = [
  {
    id: 'advait',
    name: 'Advait Krishnan',
    profile: '/photos/students/advait/profile.jpeg',
    bio: 'Advait Krishnan is the youngest student to have learned mridangam, having begun his training at the age of two. He also remains the youngest student to date to present a graduation concert. In addition to his training at IPAC, Advait received advanced training from Vidwan B. Ganapathyraman in Chennai. Beyond mridangam, he is proficient in kanjira, bass guitar, and piano, making him a talented multi-instrumentalist.',
    concertPhotos: Array.from({ length: 14 }, (_, i) =>
      `/photos/students/advait/concert-${String(i + 1).padStart(2, '0')}.jpeg`
    ),
  },
  {
    id: 'mukund',
    name: 'Mukund Akella',
    profile: '/photos/students/mukund/profile.jpg',
    objectPosition: 'center top',
    bio: 'Mukund Akella has trained under Jagadeeswaran Jayaprakash since 2015, and has taken advanced lessons from Vidwan DSR Murthy in Hyderabad. He has also learned tabla at the Anindo Chatterjee Institute under Ravi Albright. His playing is marked by a natural ease in sarvalaghu and sowkyam, a quality that has made him the preferred mridangist of Grammy Award-winning violinist Sri Ganesh Rajagopalan for student performances across Seattle. Mukund was admitted directly to the University of Washington Robinson Center program after completing 10th grade.',
    concertPhotos: Array.from({ length: 5 }, (_, i) =>
      `/photos/students/mukund/concert-${String(i + 1).padStart(2, '0')}.jpg`
    ),
  },
]

const teachingAssistants = [
  {
    id: 'advait',
    name: 'Advait Krishnan',
    profile: '/photos/students/advait/profile.jpeg',
    bio: 'Advait brings exceptional depth for his age, drawing on both his IPAC training and guidance from Vidwan B. Ganapathyraman. He is proficient in mridangam, kanjira, bass guitar, and piano, which gives him a uniquely broad musical perspective as a teaching assistant.',
  },
]

export default function Students() {
  const [lightbox, setLightbox] = useState(null) // { student, photoIndex }

  const close = useCallback(() => setLightbox(null), [])

  const prev = useCallback(() =>
    setLightbox(lb => ({ ...lb, photoIndex: (lb.photoIndex - 1 + lb.student.concertPhotos.length) % lb.student.concertPhotos.length }))
  , [])

  const next = useCallback(() =>
    setLightbox(lb => ({ ...lb, photoIndex: (lb.photoIndex + 1) % lb.student.concertPhotos.length }))
  , [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, prev, next, close])

  return (
    <main className="page">
      <div className="container">

        {/* ── Graduated Students ── */}
        <section className="students-section">
          <h1 className="section-title">Graduated Students</h1>
          <p className="section-subtitle">Students who completed the graduation requirements and presented a public graduation concert</p>

          <div className="students-grid">
            {graduated.map(student => (
              <div
                key={student.id}
                className="student-card"
                onClick={() => setLightbox({ student, photoIndex: 0 })}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setLightbox({ student, photoIndex: 0 })}
                aria-label={`View ${student.name}'s graduation concert`}
              >
                <div className="student-photo-wrap" style={{ aspectRatio: student.photoAspectRatio || '4/3' }}>
                  <img src={student.profile} alt={student.name} style={{ objectPosition: student.objectPosition || 'center top' }} />
                  <div className="student-overlay">
                    <span>View Concert Photos</span>
                  </div>
                </div>
                <div className="student-info">
                  <h2 className="student-name">{student.name}</h2>
                  <p className="student-bio">{student.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ── Teaching Assistants ── */}
        <section className="students-section">
          <h2 className="section-title">Teaching Assistants</h2>
          <p className="section-subtitle">Advanced students who support the next generation of learners</p>

          <div className="students-grid">
            {teachingAssistants.map(ta => (
              <div key={ta.id} className="student-card student-card--ta">
                <div className="student-photo-wrap" style={{ aspectRatio: ta.photoAspectRatio || '4/3' }}>
                  <img src={ta.profile} alt={ta.name} style={{ objectPosition: ta.objectPosition || 'center top' }} />
                </div>
                <div className="student-info">
                  <h2 className="student-name">{ta.name}</h2>
                  <p className="student-bio">{ta.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className="lb-backdrop" onClick={close}>
          <div className="lb-modal" onClick={e => e.stopPropagation()}>
            <button className="lb-close" onClick={close} aria-label="Close">✕</button>

            <div className="lb-body">
              {/* Bio panel */}
              <div className="lb-bio-panel">
                <img
                  src={lightbox.student.profile}
                  alt={lightbox.student.name}
                  className="lb-bio-photo"
                />
                <h2 className="lb-bio-name">{lightbox.student.name}</h2>
                <p className="lb-bio-text">{lightbox.student.bio}</p>
              </div>

              {/* Photo panel */}
              <div className="lb-photo-panel">
                <div className="lb-photo-main">
                  <img
                    src={lightbox.student.concertPhotos[lightbox.photoIndex]}
                    alt={`Graduation concert photo ${lightbox.photoIndex + 1}`}
                  />
                  <button className="lb-arrow lb-arrow--left" onClick={prev} aria-label="Previous">‹</button>
                  <button className="lb-arrow lb-arrow--right" onClick={next} aria-label="Next">›</button>
                </div>
                <p className="lb-counter">
                  {lightbox.photoIndex + 1} / {lightbox.student.concertPhotos.length}
                </p>
                <div className="lb-thumbs">
                  {lightbox.student.concertPhotos.map((src, i) => (
                    <button
                      key={i}
                      className={`lb-thumb ${i === lightbox.photoIndex ? 'active' : ''}`}
                      onClick={() => setLightbox(lb => ({ ...lb, photoIndex: i }))}
                    >
                      <img src={src} alt={`Thumbnail ${i + 1}`} loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
