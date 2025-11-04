import HeroSection from '../components/HeroSection'
import DestinationCard from '../components/cards/DestinationCard'
import CuisineCard from '../components/cards/CuisineCard'
import { highlights, cuisines, activities, transports, hotels, tipsArticles, reviewPosts, weatherSummaries } from '../data/data'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      <HeroSection />

      <section id="intro" className="container-responsive py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">Giới thiệu Phú Yên</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Phú Yên – miền đất hiền hòa thuộc duyên hải Nam Trung Bộ, nổi tiếng với biển xanh, cát trắng,
          những ghềnh đá kỳ thú và nền ẩm thực phong phú. Đây là điểm đến lý tưởng cho những ai yêu thiên nhiên,
          thích khám phá và trải nghiệm văn hóa bản địa.
        </p>
      </section>

      <section id="highlights" className="container-responsive py-8 md:py-12">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">Địa điểm nổi bật</h2>
          <Link to="/destinations" className="text-accent-yellow hover:text-accent-yellow-light text-sm md:text-base font-medium whitespace-nowrap flex items-center gap-1">
            Xem tất cả
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {highlights.slice(0,6).map((item, idx) => (
            <DestinationCard key={idx} item={item} />
          ))}
        </div>
      </section>

      <section className="container-responsive py-8 md:py-12">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">Ẩm thực Phú Yên</h2>
          <Link to="/cuisine" className="text-accent-yellow hover:text-accent-yellow-light text-sm md:text-base font-medium whitespace-nowrap flex items-center gap-1">
            Xem tất cả
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cuisines.slice(0,6).map((item, idx) => (
            <DestinationCard key={idx} item={item} type="cuisine" />
          ))}
        </div>
      </section>

      <section className="container-responsive py-8 md:py-12">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-3">Hoạt động vui chơi hấp dẫn</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl">Gợi ý trải nghiệm tiêu biểu: lặn ngắm san hô, trekking, chèo SUP…</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {activities.slice(0,6).map((it, i) => (
            <DestinationCard key={i} item={it} type="activities" />
          ))}
        </div>
      </section>
          
      <section className="container-responsive py-8 md:py-12">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-3">Phương tiện di chuyển</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl">Cách đến Phú Yên và đi lại thuận tiện, tiết kiệm.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {transports.slice(0,4).map((it, i) => (
           <DestinationCard key={i} item={it} type="transport" />
          ))}
        </div>
      </section>

      <section className="container-responsive py-8 md:py-12">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-3">Khách sạn</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl">Gợi ý nơi lưu trú theo ngân sách và vị trí.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {hotels.slice(0,6).map((it, i) => (
            <DestinationCard key={i} item={it} type="hotels" />
          ))}
        </div>
      </section>

      <section className="container-responsive py-8 md:py-12">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-3">Kinh nghiệm du lịch</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl">Lịch trình, mẹo hay và lưu ý quan trọng.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {tipsArticles.slice(0,4).map((it, i) => (
           <DestinationCard key={i} item={it} type="tips" />
          ))}
        </div>
      </section>

      <section className="container-responsive py-8 md:py-12">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-3">Review du lịch</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl">Tổng hợp các bài review chất lượng.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviewPosts.slice(0,6).map((it, i) => (
           <DestinationCard key={i} item={it} type="reviews" />
          ))}
        </div>
      </section>

      <section className="container-responsive py-8 md:py-12">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-3">Thông tin thời tiết</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl">Tóm tắt thời tiết theo mùa và dự báo ngắn hạn.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {weatherSummaries.slice(0,6).map((it, i) => (
           <DestinationCard key={i} item={it} type="weather" />
          ))}
        </div>
      </section>
    </div>
  )
}


