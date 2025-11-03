import CuisineCard from '../components/cards/CuisineCard'
import { cuisines } from '../data/data'

export default function Cuisine() {
  return (
    <div className="container-responsive py-12">
      <h1 className="section-title">Ẩm thực Phú Yên</h1>
      <p className="mt-2 text-slate-600 max-w-2xl">Thưởng thức hương vị biển cả và đặc sản địa phương.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cuisines.map((item, idx) => (
          <CuisineCard key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}


