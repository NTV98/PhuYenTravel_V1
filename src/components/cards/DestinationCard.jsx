import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

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
      className="group tilt-card bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-soft hover:-translate-y-1 transition ring-1 ring-transparent hover:ring-ocean-200 dark:hover:ring-ocean-700"
    >
      <Link to={`/${basePath}/${item.slug}`} className="block">
        <div className="aspect-[16/9] sm:aspect-[4/3] overflow-hidden">
          <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover img-scale-hover" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-slate-800 dark:text-slate-200">{item.name}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 line-clamp-3">{item.description}</p>
          <span className="inline-block mt-3 text-ocean-600 dark:text-ocean-400">Xem chi tiết →</span>
        </div>
      </Link>
    </motion.div>
  )
}


