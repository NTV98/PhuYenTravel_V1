import DestinationCard from '../components/cards/DestinationCard'
import { tipsArticles } from '../data/data'

export default function Tips() {
  return (
    <div className="container-responsive py-12">
      <h1 className="section-title">Kinh nghiệm du lịch</h1>
      <p className="mt-2 text-slate-600 max-w-2xl">
        Những mẹo hữu ích: đi mùa nào đẹp, lịch trình 2-3-4 ngày, chuẩn bị đồ đạc, ẩm thực nên thử,
        lưu ý an toàn, văn hóa địa phương và cách tiết kiệm chi phí.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tipsArticles.map((item, idx) => (
          <DestinationCard key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}

