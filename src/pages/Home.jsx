import HeroSection from '../components/HeroSection'
import DestinationCard from '../components/cards/DestinationCard'
import CuisineCard from '../components/cards/CuisineCard'
import { highlights, cuisines, activities, transports, hotels, tipsArticles, reviewPosts, weatherSummaries } from '../data/data'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <HeroSection />

      <section id="intro" className="container-responsive py-12">
        <h2 className="section-title">Giới thiệu Phú Yên</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">
          Phú Yên – miền đất hiền hòa thuộc duyên hải Nam Trung Bộ, nổi tiếng với biển xanh, cát trắng,
          những ghềnh đá kỳ thú và nền ẩm thực phong phú. Đây là điểm đến lý tưởng cho những ai yêu thiên nhiên,
          thích khám phá và trải nghiệm văn hóa bản địa.
        </p>
      </section>

      <section id="highlights" className="container-responsive py-12">
        <div className="flex items-center justify-between gap-4">
          <h2 className="section-title">Địa điểm nổi bật</h2>
          <Link to="/destinations" className="text-ocean-600 dark:text-ocean-400 hover:underline whitespace-nowrap">Xem tất cả</Link>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {highlights.slice(0,6).map((item, idx) => (
            <DestinationCard key={idx} item={item} />
          ))}
        </div>
      </section>

      <section className="container-responsive py-12">
        <div className="flex items-center justify-between gap-4">
          <h2 className="section-title">Ẩm thực Phú Yên</h2>
          <Link to="/cuisine" className="text-ocean-600 dark:text-ocean-400 hover:underline whitespace-nowrap">Xem tất cả</Link>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cuisines.slice(0,6).map((item, idx) => (
            <DestinationCard key={idx} item={item} type="cuisine" />
          ))}
        </div>
      </section>

      <section className="container-responsive py-12">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Hoạt động vui chơi hấp dẫn</h2>
        </div>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">Gợi ý trải nghiệm tiêu biểu: lặn ngắm san hô, trekking, chèo SUP…</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {activities.slice(0,6).map((it, i) => (
            <DestinationCard key={i} item={it} type="activities" />
          ))}
        </div>
      </section>
          
      <section className="container-responsive py-12">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Phương tiện di chuyển</h2>
        </div>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">Cách đến Phú Yên và đi lại thuận tiện, tiết kiệm.</p>
        <div className="mt-6 grid sm:grid-cols-3 gap-5 sm:gap-6">
          {transports.slice(0,4).map((it, i) => (
           <DestinationCard key={i} item={it} type="transport" />
          ))}
        </div>
      </section>

      <section className="container-responsive py-12">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Khách sạn</h2>
        </div>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">Gợi ý nơi lưu trú theo ngân sách và vị trí.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {hotels.slice(0,6).map((it, i) => (
            <DestinationCard key={i} item={it} type="hotels" />
          ))}
        </div>
      </section>

      <section className="container-responsive py-12">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Kinh nghiệm du lịch</h2>
        </div>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">Lịch trình, mẹo hay và lưu ý quan trọng.</p>
        <div className="mt-6 grid sm:grid-cols-3 gap-5 sm:gap-6">
          {tipsArticles.slice(0,4).map((it, i) => (
           <DestinationCard key={i} item={it} type="tips" />
          ))}
        </div>
      </section>

      <section className="container-responsive py-12">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Review du lịch</h2>
        </div>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">Tổng hợp các bài review chất lượng.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviewPosts.slice(0,6).map((it, i) => (
           <DestinationCard key={i} item={it} type="reviews" />
          ))}
        </div>
      </section>

      <section className="container-responsive py-12">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Thông tin thời tiết</h2>
        </div>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">Tóm tắt thời tiết theo mùa và dự báo ngắn hạn.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {weatherSummaries.slice(0,6).map((it, i) => (
           <DestinationCard key={i} item={it} type="weather" />
          ))}
        </div>
      </section>
    </div>
  )
}


