import DestinationCard from '../components/cards/DestinationCard'
import { reviewPosts } from '../data/data'

export default function Reviews() {
  return (
    <div className="container-responsive py-12">
      <h1 className="section-title">Review du lịch</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
        Tổng hợp các bài review hay từ cộng đồng: lịch trình mẫu, chi phí thực tế, lưu ý từng điểm đến,
        tips chụp ảnh đẹp và trải nghiệm "best of Phú Yên".
      </p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewPosts.map((item, idx) => (
          <DestinationCard key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}

