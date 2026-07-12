import { useState, useEffect, useCallback } from 'react'
import './Students.css'

const graduated = [
  {
    id: 'anish',
    name: 'Anish Mandyam',
    graduationDate: 'August 2023',
    profile: '/photos/students/anish/profile.jpg',
    objectPosition: 'center 25%',
    bio: 'Anish Mandyam was the first student from IPAC to present a graduation concert. He began learning mridangam in 2011 under Jagadeeswaran Jayaprakash and went on to spend several years training under Vidwan B. Ganapathyraman in Chennai. Equally accomplished on tabla, he studied under Ravi Albright in Seattle. Anish is a sought-after dance accompanist who has performed for over 20 dance arangetrams, keeping a busy performance schedule each summer during arangetram season. He is currently a junior at Embry-Riddle Aeronautical University in Florida.',
    funFact: 'Anish has a rare photographic ear for rhythm: he can listen to any korvai once and play it back perfectly on the very first attempt.',
    concertPhotos: [
      '/photos/students/anish/concert-01.jpg',
      '/photos/students/anish/concert-02.jpg',
      '/photos/students/anish/concert-03.jpg',
    ],
  },
  {
    id: 'advait',
    name: 'Advait Krishnan',
    graduationDate: 'April 2024',
    profile: '/photos/students/advait/profile.jpeg',
    bio: 'Advait Krishnan is the youngest student to have learned mridangam, having begun his training at the age of two. He also remains the youngest student to date to present a graduation concert. In addition to his training at IPAC, Advait received advanced training from Vidwan B. Ganapathyraman in Chennai. Beyond mridangam, he is proficient in kanjira, bass guitar, and piano, making him a talented multi-instrumentalist.',
    funFact: 'Advait began learning mridangam before he was potty trained.',
    concertPhotos: Array.from({ length: 14 }, (_, i) =>
      `/photos/students/advait/concert-${String(i + 1).padStart(2, '0')}.jpeg`
    ),
  },
  {
    id: 'mukund',
    name: 'Mukund Akella',
    graduationDate: 'August 2025',
    profile: '/photos/students/mukund/profile.jpg',
    objectPosition: 'center top',
    bio: 'Mukund Akella has trained under Jagadeeswaran Jayaprakash since 2015, and has taken advanced lessons from Vidwan DSR Murthy in Hyderabad. He has also learned tabla at the Anindo Chatterjee Institute under Ravi Albright. Mukund was admitted directly to the University of Washington Robinson Center program after completing 10th grade.',
    funFact: 'His playing is marked by a natural ease in sarvalaghu and sowkyam, a quality that has made him the preferred mridangist of Grammy Award-winning violinist Sri Ganesh Rajagopalan for student performances across Seattle.',
    concertPhotos: Array.from({ length: 5 }, (_, i) =>
      `/photos/students/mukund/concert-${String(i + 1).padStart(2, '0')}.jpg`
    ),
  },
  {
    id: 'anirud',
    name: 'Anirud Parthasarathy',
    graduationDate: 'September 2025',
    profile: '/photos/students/anirud/profile.png',
    objectPosition: 'center top',
    bio: 'Anirud Parthasarathy began his mridangam journey under Jagadeeswaran Jayaprakash in 2016, and since 2021 has received advanced training directly from Vidwan B. Ganapathyraman in Chennai, returning for in-person lessons across multiple summers to deepen his craft. In 2025, he made history as the first IPAC student to present a graduation concert in Chennai itself: a concert graced by the acclaimed vocalist Sikkil Gurucharan. Beyond the concert stage, Anirud is one of Seattle\'s most active mridangam accompanists in the dance arangetram circuit, having accompanied numerous performances with steadiness and artistry. Since 2026, he has also served as a teaching assistant at IPAC, bringing his stage experience to the next generation of students.',
    funFact: 'Anirud once devoted an entire summer solely to mastering the subtle gumkis in Vidwan Ganapathyraman\'s style. The dedication paid off: seasoned musicians have specifically noted his exceptional command over gumkis and the precise right/left balance on mridangam.',
    concertPhotos: [
      '/photos/students/anirud/concert-01.jpg',
      '/photos/students/anirud/concert-02.jpg',
    ],
  },
  {
    id: 'srikaran',
    name: 'Srikaran Sriperumbudur',
    graduationDate: 'May 2026',
    profile: '/photos/students/srikaran/profile.jpeg',
    objectPosition: 'center 25%',
    bio: 'Srikaran Sriperumbudur began learning mridangam at IPAC under Jagadeeswaran Jayaprakash in 2016. For advanced training he has studied under Vidwan DSR Murthy in Hyderabad over several years, with Vidwan Murthy playing a central role in preparing him for his graduation concert in May 2026.',
    funFact: 'A devoted admirer of Sangeetha Kalanidhi Trichy Sankaran, Srikaran became captivated by his signature tha-na-ki-ta dhi-na-ki-ta sarvalaghu pattern. During the COVID lockdown he spent hours each day practicing and perfecting it.',
    concertPhotos: [
      '/photos/students/srikaran/concert-01.jpeg',
      '/photos/students/srikaran/concert-02.jpeg',
    ],
  },
]

const teachingAssistants = [
  {
    id: 'anish',
    name: 'Anish Mandyam',
    profile: '/photos/students/anish/profile.jpg',
    objectPosition: 'center 25%',
    bio: 'Anish brings a wealth of experience as IPAC\'s first graduation concert student, with training under Jagadeeswaran Jayaprakash, Vidwan B. Ganapathyraman, and Ravi Albright on tabla. As an accomplished dance accompanist for over 20 arangetrams, he offers students a performer\'s perspective as a teaching assistant.',
  },
  {
    id: 'vishnu',
    name: 'Vishnu Venkatesan',
    profile: '/photos/students/vishnu/profile.jpeg',
    objectPosition: 'center top',
    bio: 'Vishnu Venkatesan is the first and longest-serving teaching assistant at IPAC, guiding younger students since 2022. Regarded as a child prodigy, he began learning mridangam under Jagadeeswaran Jayaprakash in 2014 and mastered all four talams within a single year. He quickly became a sought-after accompanist across the Seattle and Pacific Northwest performance circuit, playing for the Rhythms band and numerous dance arangetrams.',
  },
  {
    id: 'advait',
    name: 'Advait Krishnan',
    profile: '/photos/students/advait/profile.jpeg',
    bio: 'Advait brings exceptional depth for his age, drawing on both his IPAC training and guidance from Vidwan B. Ganapathyraman. He is proficient in mridangam, kanjira, bass guitar, and piano, which gives him a uniquely broad musical perspective as a teaching assistant.',
  },
  {
    id: 'srikrishna',
    name: 'Srikrishna Srikanth',
    profile: '/photos/students/srikrishna/profile.jpeg',
    objectPosition: 'center 20%',
    bio: 'Srikrishna Srikanth began learning mridangam under Jagadeeswaran Jayaprakash in 2016, and since 2021 has trained under Vidwan Palladam Ravi in Madurai, spending several summers in one-on-one sessions with him. As a teaching assistant since 2025, Srikrishna brings particular focus to the fundamentals: his patient, methodical approach has helped many younger students build a strong foundation in nam, dhin, and chapu.',
  },
  {
    id: 'anirud',
    name: 'Anirud Parthasarathy',
    profile: '/photos/students/anirud/profile.png',
    objectPosition: 'center top',
    bio: 'Anirud brings the perspective of a student who trained across two continents: refined in Seattle under Jagadeeswaran Jayaprakash and deepened in Chennai under Vidwan B. Ganapathyraman. As the first IPAC student to present a graduation concert in Chennai, and an active mridangam accompanist in the Seattle arangetram circuit, he offers students both technical depth and real-stage experience.',
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
                  {student.graduationDate && (
                    <p className="student-graduation-date">Graduated {student.graduationDate}</p>
                  )}
                  <p className="student-bio">{student.bio}</p>
                  {student.funFact && (
                    <div className="student-funfact">
                      <span className="student-funfact-label">Fun Fact</span>
                      {student.funFact}
                    </div>
                  )}
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
                {lightbox.student.graduationDate && (
                  <p className="student-graduation-date">Graduated {lightbox.student.graduationDate}</p>
                )}
                <p className="lb-bio-text">{lightbox.student.bio}</p>
                {lightbox.student.funFact && (
                  <div className="lb-funfact">
                    <span className="student-funfact-label">Fun Fact</span>
                    {lightbox.student.funFact}
                  </div>
                )}
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
