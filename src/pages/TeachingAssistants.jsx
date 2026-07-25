import './Students.css'

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
    profile: '/photos/students/anirud/profile.jpeg',
    objectPosition: 'center 65%',
    photoScale: 1.5,
    bio: 'Anirud brings the perspective of a student who trained across two continents: refined in Seattle under Jagadeeswaran Jayaprakash and deepened in Chennai under Vidwan B. Ganapathyraman. As the first IPAC student to present a graduation concert in Chennai, and an active mridangam accompanist in the Seattle arangetram circuit, he offers students both technical depth and real-stage experience.',
  },
]

export default function TeachingAssistants() {
  return (
    <main className="page">
      <div className="container">

        <section className="students-section">
          <h1 className="section-title">Teaching Assistants</h1>
          <p className="section-subtitle">Advanced students who support the next generation of learners</p>

          <div className="students-grid">
            {teachingAssistants.map(ta => (
              <div key={ta.id} className="student-card student-card--ta">
                <div className="student-photo-wrap" style={{ aspectRatio: ta.photoAspectRatio || '4/3' }}>
                  <img src={ta.profile} alt={ta.name} style={{ objectPosition: ta.objectPosition || 'center top', transform: ta.photoScale ? `scale(${ta.photoScale})` : undefined }} />
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
    </main>
  )
}
