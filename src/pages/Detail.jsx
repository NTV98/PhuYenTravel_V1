import { useMemo } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { cuisines, highlights, activities, transports, hotels, tipsArticles, reviewPosts, weatherSummaries } from '../data/data'
import { FaArrowLeft, FaStar, FaRegStar, FaHeart, FaMapMarkerAlt, FaEllipsisV } from 'react-icons/fa'

export default function Detail() {
  const { type, slug } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  
  const { item, backPath, title } = useMemo(() => {
    const inferredType = type || location.pathname.split('/')[1]
    if (inferredType === 'destinations') {
      return { item: highlights.find(x => x.slug === slug), backPath: '/destinations', title: 'Điểm đến' }
    }
    if (inferredType === 'cuisine') {
      return { item: cuisines.find(x => x.slug === slug), backPath: '/cuisine', title: 'Ẩm thực' }
    }
    if (inferredType === 'activities') {
      return { item: activities.find(x => x.slug === slug), backPath: '/activities', title: 'Hoạt động' }
    }
    if (inferredType === 'transport') {
      return { item: transports.find(x => x.slug === slug), backPath: '/transport', title: 'Phương tiện' }
    }
    if (inferredType === 'hotels') {
      return { item: hotels.find(x => x.slug === slug), backPath: '/hotels', title: 'Khách sạn' }
    }
    if (inferredType === 'tips') {
      return { item: tipsArticles.find(x => x.slug === slug), backPath: '/tips', title: 'Kinh nghiệm' }
    }
    if (inferredType === 'reviews') {
      return { item: reviewPosts.find(x => x.slug === slug), backPath: '/reviews', title: 'Review' }
    }
    if (inferredType === 'weather') {
      return { item: weatherSummaries.find(x => x.slug === slug), backPath: '/weather', title: 'Thời tiết' }
    }
    return { item: null, backPath: '/', title: '' }
  }, [type, slug, location.pathname])

  if (!item) {
    return (
      <div className="container-responsive py-16">
        <button onClick={() => navigate(-1)} className="text-ocean-600 dark:text-ocean-400 hover:underline">Quay lại</button>
        <h1 className="mt-6 text-2xl font-semibold text-slate-800 dark:text-slate-200">Không tìm thấy nội dung</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Vui lòng thử lại sau.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Mobile Header - Fixed */}
      <div className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 md:hidden">
        <div className="flex items-center justify-between px-4 h-14">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 -ml-2 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-slate-800 dark:text-white font-semibold text-base">Chi tiết</h1>
          <button className="p-2 -mr-2 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <FaEllipsisV className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Hero Image - Full Screen on Mobile */}
      <section className="relative">
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
          
          {/* Mobile Overlay Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <FaMapMarkerAlt className="text-slate-300 text-sm" />
              <span className="text-slate-300 text-sm">{title}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{item.name}</h1>
            {typeof item.price === 'number' && (
              <p className="text-lg font-semibold text-white mb-3">
                ${item.price.toLocaleString()} /đêm
              </p>
            )}
            {(typeof item.rating === 'number') && (
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <FaStar className="text-accent-yellow mr-1" />
                  <span className="font-semibold text-sm">{(item.rating || 0).toFixed(1)}</span>
                </div>
                {typeof item.votes === 'number' && (
                  <span className="text-slate-300 text-sm">({item.votes.toLocaleString()} lượt đánh giá)</span>
                )}
              </div>
            )}
          </div>

          {/* Favorite Button - Top Right */}
          <button className="absolute top-4 right-4 p-3 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-black/60 transition-colors">
            <FaHeart className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="container-responsive py-6 md:py-10">
        <div className="grid lg:grid-cols-[1fr_340px] gap-6 md:gap-10">
          {/* Main Content */}
          <article className="space-y-6">
            {/* Quick Info Cards - Mobile */}
            <div className="grid grid-cols-3 gap-3 md:hidden">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-center">
                <div className="text-accent-yellow text-xs mb-1">Ticket</div>
                <div className="text-slate-800 dark:text-white text-xs font-medium">Có sẵn</div>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-center">
                <div className="text-accent-yellow text-xs mb-1">Hotel</div>
                <div className="text-slate-800 dark:text-white text-xs font-medium">Đặt phòng</div>
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-center">
                <div className="text-accent-yellow text-xs mb-1">Meal</div>
                <div className="text-slate-800 dark:text-white text-xs font-medium">Bao gồm</div>
              </div>
            </div>

            {/* Schedule Overview */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-4">Tổng quan</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                {item.longDescription || item.description || 'Đang cập nhật nội dung chi tiết.'}
              </p>
            </div>

            {/* Gallery */}
            {Array.isArray(item.gallery) && item.gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {item.gallery.map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-square">
                    <img 
                      src={src} 
                      alt={`${item.name} ${i+1}`} 
                      loading="lazy" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Reviews & Tips */}
            {(item.review || (Array.isArray(item.tips) && item.tips.length > 0)) && (
              <div className="space-y-4">
                {item.review && (
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 md:p-6">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Trải nghiệm thực tế</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">{item.review}</p>
                  </div>
                )}

                {Array.isArray(item.tips) && item.tips.length > 0 && (
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 md:p-6">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Lưu ý khi đi</h3>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm md:text-base">
                      {item.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent-yellow mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </article>

          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Thông tin nhanh</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Danh mục:</span>
                  <span className="text-slate-800 dark:text-white font-medium">{title}</span>
                </li>
                {(typeof item.rating === 'number' || typeof item.votes === 'number') && (
                  <li className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Đánh giá:</span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[0,1,2,3,4].map(i => (
                          <FaStar 
                            key={i} 
                            className={`w-4 h-4 ${(item.rating || 0) > i + 0.5 ? 'text-accent-yellow' : 'text-slate-400 dark:text-slate-600'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-slate-800 dark:text-white font-medium">{(item.rating || 0).toFixed(1)}</span>
                    </div>
                  </li>
                )}
                {Array.isArray(item.info) && item.info.map((it, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400">{it.label}:</span>
                    <span className="text-slate-800 dark:text-white font-medium">{it.value}</span>
                  </li>
                ))}
                {item.link && (
                  <li className="pt-3 border-t border-slate-200 dark:border-slate-700">
                    <a 
                      className="text-accent-yellow hover:underline text-xs break-all" 
                      href={item.link} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      {item.link}
                    </a>
                  </li>
                )}
              </ul>
              <button 
                onClick={() => navigate(-1)} 
                className="mt-6 w-full bg-accent-yellow text-black font-semibold py-3 rounded-xl hover:bg-accent-yellow-dark transition-colors"
              >
                Quay lại
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* Mobile Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 md:hidden z-40">
        <div className="flex items-center gap-3">
          <button className="p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
          <button 
            onClick={() => {
              // Handle booking action - có thể thêm logic booking ở đây
              console.log('Đặt ngay clicked')
            }}
            className="flex-1 bg-accent-yellow text-black font-semibold py-3.5 rounded-xl hover:bg-accent-yellow-dark transition-colors text-center"
          >
            Đặt ngay
          </button>
        </div>
      </div>
      <div className="h-20 md:h-0" /> {/* Spacer for mobile bottom bar */}
    </div>
  )
}


