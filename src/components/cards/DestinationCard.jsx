import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { FaStar, FaHeart, FaMapMarkerAlt } from 'react-icons/fa'

export default function DestinationCard({ item, type }) {
  const location = useLocation()
  // Auto-detect type from current path if not provided
  const routeType = type || location.pathname.split('/')[1] || 'destinations'
  
  // Map route types to correct paths
  const routeMap = {
    'destinations': 'destinations',
    'cuisine': 'cuisine',
    'activities': 'activities',
    'transport': 'transport',
    'hotels': 'hotels',
    'tips': 'tips',
    'reviews': 'reviews',
    'weather': 'weather'
  }
  
  const basePath = routeMap[routeType] || 'destinations'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
    >
      <Link to={`/${basePath}/${item.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            loading="lazy" 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Rating Badge */}
          {typeof item.rating === 'number' && (
            <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
              <FaStar className="text-accent-yellow text-xs" />
              <span className="text-white text-xs font-semibold">{(item.rating || 0).toFixed(1)}</span>
            </div>
          )}
          
          {/* Favorite Button */}
          <button 
            className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors z-10"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            <FaHeart className="w-4 h-4" />
          </button>
        </div>
        
        <div className="p-4 md:p-5">
          {/* Location */}
          <div className="flex items-center gap-1.5 mb-2">
            <FaMapMarkerAlt className="text-slate-500 dark:text-slate-400 text-xs" />
            <span className="text-slate-500 dark:text-slate-400 text-xs">{routeType === 'destinations' ? 'Điểm đến' : routeType}</span>
          </div>
          
          {/* Title */}
          <h3 className="font-bold text-slate-800 dark:text-white text-lg md:text-xl mb-2 line-clamp-1">{item.name}</h3>
          
          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-2">{item.description}</p>
          
          {/* Action Button */}
          <div className="flex items-center justify-between">
            <span className="text-accent-yellow text-sm font-medium">Xem chi tiết</span>
            <div className="w-8 h-8 rounded-full bg-accent-yellow/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}


