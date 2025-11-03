import { useMemo } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { cuisines, highlights, activities, transports, hotels, tipsArticles, reviewPosts, weatherSummaries } from '../data/data'
import { FaArrowLeft, FaStar, FaRegStar } from 'react-icons/fa'

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
        <button onClick={() => navigate(-1)} className="text-ocean-600 hover:underline">Quay lại</button>
        <h1 className="mt-6 text-2xl font-semibold text-slate-800">Không tìm thấy nội dung</h1>
        <p className="mt-2 text-slate-600">Vui lòng thử lại sau.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Hero 图 */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-0" />
        <img src={item.image} alt={item.name} className="h-[50vh] w-full object-cover" />
        <div className="absolute inset-0 z-10 flex items-end">
          <div className="container-responsive pb-8 text-white">
            <button onClick={() => navigate(backPath)} className="inline-flex items-center gap-2 text-white/90 hover:text-white">
              <FaArrowLeft />
              <span>Quay lại {title}</span>
            </button>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold drop-shadow">{item.name}</h1>
            {item.description && (
              <p className="mt-2 max-w-3xl text-white/90">{item.description}</p>
            )}
            {(typeof item.rating === 'number' || typeof item.votes === 'number') && (
              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center">
                  {[0,1,2,3,4].map(i => (
                    (item.rating || 0) > i + 0.5 ? (
                      <FaStar key={i} className="text-yellow-400 drop-shadow" />
                    ) : (
                      <FaRegStar key={i} className="text-yellow-400 drop-shadow" />
                    )
                  ))}
                </div>
                <span className="text-white/90 text-sm">{(item.rating || 0).toFixed(1)} / 5</span>
                {typeof item.votes === 'number' && (
                  <span className="text-white/80 text-sm">({item.votes.toLocaleString()} lượt)</span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Nội dung chi tiết */}
      <section className="container-responsive py-10 grid lg:grid-cols-[1fr_340px] gap-10">
        <article className="prose prose-slate max-w-none">
          <h2 className="text-xl font-semibold text-slate-800">Giới thiệu</h2>
          <p className="text-slate-700">{item.longDescription || item.description || 'Đang cập nhật nội dung chi tiết.'}</p>

          {Array.isArray(item.gallery) && item.gallery.length > 0 && (
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {item.gallery.map((src, i) => (
                <img key={i} src={src} alt={`${item.name} ${i+1}`} className="rounded-xl shadow-soft object-cover w-full h-64" />
              ))}
            </div>
          )}

          {(item.review || (Array.isArray(item.tips) && item.tips.length > 0)) && (
            <div className="mt-8 not-prose">
              {item.review && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-semibold text-slate-800">Trải nghiệm thực tế</h3>
                  <p className="mt-1 text-slate-700">{item.review}</p>
                </div>
              )}

              {Array.isArray(item.tips) && item.tips.length > 0 && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <h3 className="text-base font-semibold text-emerald-900">Lưu ý khi đi</h3>
                  <ul className="mt-2 list-disc list-inside text-emerald-900/90">
                    {item.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </article>

        <aside>
          <div className="p-5 rounded-xl border bg-white shadow-soft">
            <h3 className="font-semibold text-slate-800">Thông tin nhanh</h3>
            <ul className="mt-3 space-y-2 text-slate-600 text-sm">
              <li>Danh mục: {title}</li>
              {(typeof item.rating === 'number' || typeof item.votes === 'number') && (
                <li className="flex items-center gap-2">
                  <span className="inline-flex items-center">
                    {[0,1,2,3,4].map(i => (
                      (item.rating || 0) > i + 0.5 ? (
                        <FaStar key={i} className="text-yellow-400" />
                      ) : (
                        <FaRegStar key={i} className="text-yellow-400" />
                      )
                    ))}
                  </span>
                  <span>{(item.rating || 0).toFixed(1)}</span>
                  {typeof item.votes === 'number' && <span className="text-slate-500">({item.votes.toLocaleString()} lượt)</span>}
                </li>
              )}
              {Array.isArray(item.info) && item.info.map((it, idx) => (
                <li key={idx}><strong>{it.label}:</strong> {it.value}</li>
              ))}
              {item.link && (
                <li className="truncate">Tham khảo: <a className="text-ocean-600 hover:underline" href={item.link} target="_blank" rel="noreferrer">{item.link}</a></li>
              )}
            </ul>
            <button onClick={() => navigate(-1)} className="btn-primary mt-4 w-full justify-center">Quay lại</button>
          </div>
        </aside>
      </section>
    </div>
  )
}


