import DestinationCard from '../components/cards/DestinationCard'
import { transports } from '../data/data'

export default function Transport() {
  return (
    <div className="container-responsive py-12">
      <h1 className="section-title">Phương tiện di chuyển</h1>
      <p className="mt-2 text-slate-600 max-w-2xl">
        Hướng dẫn di chuyển đến/đi trong Phú Yên: máy bay, tàu hỏa, xe khách, thuê xe máy/ô tô,
        gọi taxi/xe công nghệ, lịch trình gợi ý và chi phí tham khảo.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {transports.map((item, idx) => (
          <DestinationCard key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}

