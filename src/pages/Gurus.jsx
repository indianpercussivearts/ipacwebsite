import './Gurus.css'

const gurus = [
  {
    name: '[ Guru Name ]',
    era: '[ Years Active ]',
    lineage: '[ Lineage / Gharana ]',
    bio: 'Add a paragraph about this guru: their background, contribution to the art of mridangam, and your personal connection to them.',
  },
  {
    name: '[ Guru Name ]',
    era: '[ Years Active ]',
    lineage: '[ Lineage / Gharana ]',
    bio: 'Add a paragraph about this guru: their background, contribution to the art of mridangam, and your personal connection to them.',
  },
  {
    name: '[ Guru Name ]',
    era: '[ Years Active ]',
    lineage: '[ Lineage / Gharana ]',
    bio: 'Add a paragraph about this guru: their background, contribution to the art of mridangam, and your personal connection to them.',
  },
]

export default function Gurus() {
  return (
    <main className="page">
      <div className="container">
        <h1 className="section-title">My Gurus</h1>
        <p className="section-subtitle">The masters who shaped my understanding of Mridangam</p>

        <div className="gurus-list">
          {gurus.map((guru, i) => (
            <div className="guru-card card" key={i}>
              <div className="guru-photo-placeholder">
                <div className="guru-photo-box">Photo</div>
              </div>
              <div className="guru-info">
                <h2 className="guru-name">{guru.name}</h2>
                <div className="guru-meta">
                  <span className="tag">{guru.lineage}</span>
                  <span className="guru-era">{guru.era}</span>
                </div>
                <p className="guru-bio">{guru.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
