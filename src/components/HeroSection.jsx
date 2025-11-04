import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0)
  useEffect(() => {
    // Disable parallax on mobile to prevent flickering
    const isMobile = window.innerWidth < 768
    if (isMobile) return
    
    const onScroll = () => setOffsetY(window.scrollY * 0.2)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/60 to-ocean-800/40 z-0" />
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
        alt="Biển Phú Yên"
        className="h-[60vh] sm:h-[60vh] md:h-[70vh] w-full object-cover"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      />
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container-responsive text-white">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-3xl sm:text-5xl font-bold"
          >
            Khám phá Phú Yên
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="mt-3 max-w-2xl text-white/90"
          >
            Xứ hoa vàng cỏ xanh với biển xanh, cát trắng, nắng vàng và con người thân thiện.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-6"
          >
            <a href="#highlights" className="inline-flex items-center gap-2 rounded-xl bg-accent-yellow text-black px-6 py-3.5 font-semibold shadow-lg hover:bg-accent-yellow-dark transition-colors">
              Khám phá ngay
            </a>
          </motion.div>
        </div>
      </div>
      {/* 波浪分隔 */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-[80px]">
          <path fill="#fff" d="M0,64L80,58.7C160,53,320,43,480,58.7C640,75,800,117,960,117.3C1120,117,1280,75,1360,53.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div> */}
    </section>
  )
}


