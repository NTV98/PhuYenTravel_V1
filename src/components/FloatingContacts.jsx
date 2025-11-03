import { FaPhoneAlt, FaFacebook, FaArrowUp } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { SiZalo } from 'react-icons/si'

export default function FloatingContacts() {
  const [showTop, setShowTop] = useState(false)
  const phoneRaw = '0123456789'
  const phoneHref = `tel:+84${phoneRaw.replace(/\D/g, '').replace(/^0/, '')}`
  const zaloHref = `https://zalo.me/${phoneRaw}`
  const facebookHref = 'https://facebook.com/PhuYenTravel'

  const baseBtn = 'h-10 w-10 rounded-full flex items-center justify-center text-white shadow-soft hover:scale-110 transition'

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed z-[60] bottom-3 right-3 flex flex-col items-end gap-2">
      {showTop && (
        <button onClick={scrollToTop} aria-label="Lên đầu trang" className={`${baseBtn} bg-slate-700 hover:bg-slate-800`}>
          <FaArrowUp className="h-4 w-4" />
        </button>
      )}
      <a href={phoneHref} aria-label="Gọi điện" className={`${baseBtn} bg-green-500 hover:bg-green-600`}>
        <FaPhoneAlt className="h-4 w-4" />
      </a>
      <a href={zaloHref} aria-label="Zalo" target="_blank" rel="noopener noreferrer" className={`${baseBtn} bg-sky-500 hover:bg-sky-600`}>
        <SiZalo className="h-4 w-4" />
      </a>
      <a href={facebookHref} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className={`${baseBtn} bg-blue-600 hover:bg-blue-700`}>
        <FaFacebook className="h-4 w-4" />
      </a>
    </div>
  )
}


