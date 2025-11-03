import HeroSection from '../components/HeroSection'
import DestinationCard from '../components/cards/DestinationCard'
import CuisineCard from '../components/cards/CuisineCard'
import { highlights, cuisines } from '../data/data'

export default function Home() {
  return (
    <div>
      <HeroSection />

      <section id="intro" className="container-responsive py-12">
        <h2 className="section-title">Giới thiệu Phú Yên</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">
          Phú Yên – miền đất hiền hòa thuộc duyên hải Nam Trung Bộ, nổi tiếng với biển xanh, cát trắng,
          những ghềnh đá kỳ thú và nền ẩm thực phong phú. Đây là điểm đến lý tưởng cho những ai yêu thiên nhiên,
          thích khám phá và trải nghiệm văn hóa bản địa.
        </p>
      </section>

      <section id="highlights" className="container-responsive py-12">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Địa điểm nổi bật</h2>
          <a href="/destinations" className="text-ocean-600 hover:underline">Xem tất cả</a>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.slice(0,6).map((item, idx) => (
            <DestinationCard key={idx} item={item} />
          ))}
        </div>
      </section>

      <section className="container-responsive py-12">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Ẩm thực Phú Yên</h2>
          <a href="/cuisine" className="text-ocean-600 hover:underline">Xem tất cả</a>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cuisines.slice(0,6).map((item, idx) => (
            <CuisineCard key={idx} item={item} />
          ))}
        </div>
      </section>
    </div>
  )
}


