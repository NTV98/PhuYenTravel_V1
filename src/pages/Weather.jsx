import DestinationCard from '../components/cards/DestinationCard'
import { weatherSummaries } from '../data/data'

export default function Weather() {
  return (
    <div className="container-responsive py-12">
      <h1 className="section-title">Thông tin thời tiết</h1>
      <p className="mt-2 text-slate-600 max-w-2xl">
        Tóm tắt thời tiết theo mùa tại Phú Yên, gợi ý thời điểm lý tưởng để đi biển, leo núi,
        và các lưu ý khi có mưa bão. Sắp có bảng dự báo ngắn hạn.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {weatherSummaries.map((item, idx) => (
          <DestinationCard key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}

