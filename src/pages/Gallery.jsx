import { useState } from 'react'
import './Gallery.css'

const workshops = [
  {
    src: '/photos/gallery/workshops/patri-satish-kumar.jpg',
    caption: 'Workshop with Maestro Patri Satish Kumar',
    objectPosition: 'center 30%',
  },
  {
    src: '/photos/gallery/workshops/praveen-sparsh.jpg',
    caption: 'Workshop with Vidwan Praveen Sparsh',
    objectPosition: 'center 25%',
  },
]

const concerts = [
  {
    src: '/photos/gallery/concerts/ConcertWithSangeethaKalanidhiChitravinaRavikiran_2015.JPG',
    caption: 'With Sangeeta Kalanidhi Chitravina Ravikiran (2015)',
  },
  {
    src: '/photos/gallery/concerts/ConcertWith_VeenaVirtuosoSreevidhyaChandramouliAndKaraikudiquartet_SaltLakeCity_2023.jpg',
    caption: 'With Veena Virtuoso Sreevidhya Chandramouli and Karaikudi Quartet, Salt Lake City (2023)',
  },
  {
    src: '/photos/gallery/concerts/ConcertWithSangeethaKalanidhiChitravinaRavikiran_2024.jpg',
    caption: 'With Sangeeta Kalanidhi Chitravina Ravikiran (2024)',
  },
  {
    src: '/photos/gallery/concerts/WithAkshayPadmanabhanAndLRamakrishnan_2024.jpg',
    caption: 'With Akshay Padmanabhan and L. Ramakrishnan (2024)',
  },
  {
    src: '/photos/gallery/concerts/ConcertWithBhargaviBalasubramanianAndRamanIyer_2026.png',
    caption: 'With Bhargavi Balasubramanian and Raman Iyer (2026)',
  },
  {
    src: '/photos/gallery/concerts/ConcertWithAdhithyaNarayananAndChetanaSekhar_2026.mp4',
    caption: 'With Adhithya Narayanan and Chetana Sekhar (2026)',
    type: 'video',
  },
  {
    src: '/photos/gallery/concerts/WithKanjiraLegendGaneshKumarBand.mp4',
    caption: 'With Kanjira Legend Ganesh Kumar Band',
    type: 'video',
  },
]

function GallerySection({ title, items, onOpen }) {
  if (items.length === 0) return null
  return (
    <section className="gallery-section">
      <h2 className="gallery-section-title">{title}</h2>
      <div className="gallery-grid">
        {items.map((img, i) => (
          <button key={i} className="gallery-item" onClick={() => onOpen(items, i)}>
            {img.type === 'video' ? (
              <div className="gallery-video-thumb">
                <video src={img.src} muted preload="metadata" playsInline />
                <span className="gallery-play-icon">▶</span>
              </div>
            ) : (
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                style={{ objectPosition: img.objectPosition || 'center center' }}
              />
            )}
            <div className="gallery-caption">{img.caption}</div>
          </button>
        ))}
      </div>
    </section>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null) // { items, index }

  function open(items, index) { setLightbox({ items, index }) }
  function close() { setLightbox(null) }
  function prev() { setLightbox(lb => ({ ...lb, index: (lb.index - 1 + lb.items.length) % lb.items.length })) }
  function next() { setLightbox(lb => ({ ...lb, index: (lb.index + 1) % lb.items.length })) }

  return (
    <main className="page">
      <div className="container">
        <h1 className="section-title">Gallery</h1>
        <p className="section-subtitle">Moments from workshops, concerts, and community events</p>

        <GallerySection title="Workshops" items={workshops} onOpen={open} />
        <GallerySection title="Concerts"  items={concerts}  onOpen={open} />

        <div className="gallery-insta">
          <p>Follow us on Instagram for more</p>
          <a
            href="https://www.instagram.com/jjmridangam"
            target="_blank"
            rel="noreferrer"
            className="insta-link"
          >
            @jjmridangam
          </a>
        </div>
      </div>

      {lightbox && (
        <div className="lb-backdrop" onClick={close}>
          <div className="lb-simple" onClick={e => e.stopPropagation()}>
            <button className="lb-close" onClick={close}>✕</button>
            <div className="lb-img-wrap">
              {lightbox.items[lightbox.index].type === 'video' ? (
                <video
                  key={lightbox.items[lightbox.index].src}
                  src={lightbox.items[lightbox.index].src}
                  controls
                  autoPlay
                  className="lb-video"
                />
              ) : (
                <img src={lightbox.items[lightbox.index].src} alt={lightbox.items[lightbox.index].caption} />
              )}
              {lightbox.items.length > 1 && <>
                <button className="lb-arrow lb-arrow--left"  onClick={prev}>‹</button>
                <button className="lb-arrow lb-arrow--right" onClick={next}>›</button>
              </>}
            </div>
            <p className="lb-caption">{lightbox.items[lightbox.index].caption}</p>
          </div>
        </div>
      )}
    </main>
  )
}
