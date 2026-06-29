import './Concerts.css'

const events = [
  {
    date: '2026-08-30',
    displayDate: 'August 30, 2026',
    title: 'Madhav Ganapathy — Graduation Concert',
    venue: 'TBD',
    details: 'Co-artists TBD. Join us in celebrating Madhav Ganapathy\'s graduation from the Indian Percussive Arts Center.',
  },
]

const today = new Date()
today.setHours(0, 0, 0, 0)

const upcoming = events.filter(e => new Date(e.date) >= today)
const past     = events.filter(e => new Date(e.date) <  today)

export default function Concerts() {
  return (
    <main className="page">
      <div className="container">
        <h1 className="section-title">Events</h1>
        <p className="section-subtitle">Upcoming performances and past highlights</p>

        <section className="concerts-section">
          <h2 className="concerts-heading">Upcoming</h2>
          {upcoming.length > 0 ? (
            <div className="upcoming-list">
              {upcoming.map((c, i) => (
                <div className="upcoming-card card" key={i}>
                  <div className="concert-date-block">
                    <span>{c.displayDate}</span>
                  </div>
                  <div className="concert-info">
                    <h3>{c.title}</h3>
                    <p className="concert-venue">{c.venue}</p>
                    <p className="concert-details">{c.details}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="concerts-empty">No upcoming events at this time. Check back soon.</p>
          )}
        </section>

        {past.length > 0 && (
          <>
            <div className="divider" />
            <section className="concerts-section">
              <h2 className="concerts-heading">Past Performances</h2>
              <div className="past-list">
                {past.map((c, i) => (
                  <div className="past-row" key={i}>
                    <span className="past-date tag">{c.displayDate}</span>
                    <div>
                      <span className="past-title">{c.title}</span>
                      {c.venue !== 'TBD' && <span className="past-venue">, {c.venue}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  )
}
