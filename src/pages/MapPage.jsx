import { useMemo, useState } from 'react'
import { mapMarkers } from '../data/data'

export default function MapPage() {
  const [selectedIdx, setSelectedIdx] = useState(null)

  const mapSrc = useMemo(() => {
    if (selectedIdx === null) {
      // View toàn tỉnh Phú Yên
      return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1005963.405535826!2d108.52!3d13.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170f6b5a1d3a9cf%3A0x1c6f0d5ec7b9b9f!2zUGjDuiBZw6puLCBWaWV0bmFt!5e0!3m2!1svi!2s!4v1700000000001'
    }
    const m = mapMarkers[selectedIdx]
    // Trung tâm vào toạ độ đã chọn
    return `https://www.google.com/maps?q=${m.lat},${m.lng}&z=12&hl=vi&output=embed`
  }, [selectedIdx])

  return (
    <div className="container-responsive py-12 grid lg:grid-cols-[1fr_380px] gap-8">
      <div className="rounded-xl overflow-hidden shadow-soft">
        <iframe
          title="Bản đồ Phú Yên"
          src={mapSrc}
          width="100%"
          height="520"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <aside>
        <h2 className="section-title">Các điểm tham quan</h2>
        <ul className="mt-4 space-y-3">
          {mapMarkers.map((m, idx) => {
            const isActive = selectedIdx === idx
            return (
              <li
                key={idx}
                className={`p-3 rounded-lg border transition cursor-pointer ${isActive ? 'border-ocean-400 bg-ocean-50/60 dark:bg-slate-700/50' : 'hover:border-ocean-300'}`}
                onClick={() => setSelectedIdx(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedIdx(idx)
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
              >
                <div className="font-medium text-slate-800 dark:text-slate-200">{m.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Lat: {m.lat}, Lng: {m.lng}</div>
              </li>
            )
          })}
        </ul>
      </aside>
    </div>
  )
}


