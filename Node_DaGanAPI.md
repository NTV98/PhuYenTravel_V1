import { useState, useEffect } from 'react'
import CuisineCard from '../components/cards/CuisineCard'
import { getCuisines } from '../services/cuisines'

export default function Cuisine() {
  const [cuisines, setCuisines] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getCuisines()
        setCuisines(data)
      } catch (err) {
        console.error('Error fetching cuisines:', err)
        setError('Không thể tải danh sách món ăn. Vui lòng thử lại sau.')
      } finally {
        setLoading(false)
      }
    }

    fetchCuisines()
  }, [])

  if (loading) {
    return (
      <div className="container-responsive py-12">
        <h1 className="section-title">Ẩm thực Phú Yên</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">Thưởng thức hương vị biển cả và đặc sản địa phương.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg animate-pulse">
              <div className="aspect-[4/3] bg-slate-300 dark:bg-slate-700" />
              <div className="p-4 md:p-5 space-y-3">
                <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-3/4" />
                <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded w-full" />
                <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container-responsive py-12">
        <h1 className="section-title">Ẩm thực Phú Yên</h1>
        <div className="mt-6 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
          <p className="text-red-600 dark:text-red-400">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Thử lại
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container-responsive py-12">
      <h1 className="section-title">Ẩm thực Phú Yên</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">Thưởng thức hương vị biển cả và đặc sản địa phương.</p>
      {cuisines.length === 0 ? (
        <div className="mt-6 p-6 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-center">
          <p className="text-slate-600 dark:text-slate-300">Chưa có món ăn nào.</p>
        </div>
      ) : (
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cuisines.map((item) => (
            <CuisineCard key={item._id || item.id} item={item} type="cuisine" />
          ))}
        </div>
      )}
    </div>
  )
}




Phần đầu trang detail
import { useMemo, useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { highlights, activities, transports, hotels, tipsArticles, reviewPosts, weatherSummaries } from '../data/data'
import { getCuisineBySlug } from '../services/cuisines'
import { FaArrowLeft, FaStar, FaRegStar, FaHeart, FaMapMarkerAlt, FaEllipsisV } from 'react-icons/fa'

export default function Detail() {
  const { type, slug } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [cuisineItem, setCuisineItem] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const inferredType = type || location.pathname.split('/')[1]

  // Fetch cuisine from API if type is cuisine
  useEffect(() => {
    if (inferredType === 'cuisine' && slug) {
      const fetchCuisine = async () => {
        try {
          setLoading(true)
          setError(null)
          const data = await getCuisineBySlug(slug)
          setCuisineItem(data)
        } catch (err) {
          console.error('Error fetching cuisine:', err)
          setError('Không thể tải thông tin món ăn. Vui lòng thử lại sau.')
        } finally {
          setLoading(false)
        }
      }
      fetchCuisine()
    }
  }, [inferredType, slug])

  const { item, backPath, title } = useMemo(() => {
    if (inferredType === 'destinations') {
      return { item: highlights.find(x => x.slug === slug), backPath: '/destinations', title: 'Điểm đến' }
    }
    if (inferredType === 'cuisine') {
      return { item: cuisineItem, backPath: '/cuisine', title: 'Ẩm thực' }
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
  }, [type, slug, location.pathname, cuisineItem, inferredType])

  // Show loading state for cuisine
  if (inferredType === 'cuisine' && loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <div className="container-responsive py-16">
          <div className="animate-pulse space-y-6">
            <div className="h-64 bg-slate-300 dark:bg-slate-700 rounded-xl" />
            <div className="space-y-3">
              <div className="h-8 bg-slate-300 dark:bg-slate-700 rounded w-3/4" />
              <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-full" />
              <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Show error state for cuisine
  if (inferredType === 'cuisine' && error) {
    return (
      <div className="container-responsive py-16">
        <button onClick={() => navigate(-1)} className="text-ocean-600 dark:text-ocean-400 hover:underline">Quay lại</button>
        <div className="mt-6 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
          <p className="text-red-600 dark:text-red-400">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Thử lại
          </button>
        </div>
      </div>
    )
  }