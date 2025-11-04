import DestinationCard from '../components/cards/DestinationCard'
import { activities } from '../data/data'

export default function Activities() {
  return (
    <div className="container-responsive py-12">
      <h1 className="section-title">Hoạt động vui chơi hấp dẫn</h1>
      <p className="mt-2 text-slate-600 max-w-2xl">
        Gợi ý các trải nghiệm và hoạt động thú vị tại Phú Yên: lặn ngắm san hô, trekking, chèo SUP,
        tour ngắm bình minh/hoàng hôn, trải nghiệm làng nghề, và nhiều hơn nữa.
      </p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((item, idx) => (
          <DestinationCard key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}

