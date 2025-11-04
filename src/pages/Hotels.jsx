import DestinationCard from '../components/cards/DestinationCard'
import { hotels } from '../data/data'

export default function Hotels() {
  return (
    <div className="container-responsive py-12">
      <h1 className="section-title">Khách sạn</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
        Danh sách khách sạn, resort, homestay theo khu vực và nhu cầu. Đi kèm gợi ý đặt phòng theo mùa,
        bí quyết săn giá tốt, và tiện nghi phù hợp gia đình/cặp đôi.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((item, idx) => (
          <DestinationCard key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}

