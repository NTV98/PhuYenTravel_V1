import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function DestinationCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group tilt-card bg-white rounded-xl overflow-hidden shadow-soft hover:-translate-y-1 transition ring-1 ring-transparent hover:ring-ocean-200"
    >
      <Link to={`/destinations/${item.slug}`} className="block">
        <div className="aspect-[16/9] sm:aspect-[4/3] overflow-hidden">
          <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-slate-800">{item.name}</h3>
          <p className="text-sm text-slate-600 mt-1 line-clamp-3">{item.description}</p>
          <span className="inline-block mt-3 text-ocean-600">Xem chi tiết →</span>
        </div>
      </Link>
    </motion.div>
  )
}


