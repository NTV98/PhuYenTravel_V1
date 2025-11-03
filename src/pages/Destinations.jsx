import DestinationCard from '../components/cards/DestinationCard'
import { highlights } from '../data/data'

export default function Destinations() {
  return (
    <div className="container-responsive py-12">
      <h1 className="section-title">Điểm đến nổi bật</h1>
      <p className="mt-2 text-slate-600 max-w-2xl">Những thắng cảnh không thể bỏ lỡ khi đến Phú Yên.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((item, idx) => (
          <DestinationCard key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}


