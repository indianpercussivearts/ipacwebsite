import './Concerts.css'

const events = [
  {
    date: '2026-08-30',
    displayDate: 'August 30, 2026',
    time: '10:00 AM',
    title: 'Madhav Ganapathy — Graduation Concert',
    venue: 'Carlson Theater, Bellevue, WA',
    details: ['Vocal: Smt Dharini Kalyanaraman', 'Violin: Smt Nandini Viswanathan', 'Kanjira: Sri KV Gopalakrishnan'],
  },
  {
    date: '2026-09-12',
    displayDate: 'September 12, 2026',
    title: 'Anirud Parthasarathy — Concert',
    venue: 'TBD',
    details: 'Co-artists and venue details to be announced.',
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
                    {c.time && <span className="concert-time">{c.time}</span>}
                  </div>
                  <div className="concert-info">
                    <h3>{c.title}</h3>
                    <p className="concert-venue">{c.venue}</p>
                    {Array.isArray(c.details)
                      ? <div className="concert-details">{c.details.map((line, i) => <div key={i}>{line}</div>)}</div>
                      : <p className="concert-details">{c.details}</p>
                    }
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
