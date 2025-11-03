import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItem = (
    <>
      <NavLink to="/" className={({ isActive }) => `nav-underline ${isActive ? 'nav-underline-active' : ''}`}>Trang chủ</NavLink>
      <NavLink to="/about" className={({ isActive }) => `nav-underline ${isActive ? 'nav-underline-active' : ''}`}>Giới thiệu</NavLink>
      <NavLink to="/destinations" className={({ isActive }) => `nav-underline ${isActive ? 'nav-underline-active' : ''}`}>Điểm đến</NavLink>
      <NavLink to="/cuisine" className={({ isActive }) => `nav-underline ${isActive ? 'nav-underline-active' : ''}`}>Ẩm thực</NavLink>
      <NavLink to="/map" className={({ isActive }) => `nav-underline ${isActive ? 'nav-underline-active' : ''}`}>Bản đồ</NavLink>
      <NavLink to="/contact" className={({ isActive }) => `nav-underline ${isActive ? 'nav-underline-active' : ''}`}>Liên hệ</NavLink>
    </>
  )

  return (
    <header className={`bg-white/70 backdrop-blur sticky top-0 z-50 border-b transition-shadow ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container-responsive flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-ocean-600 font-semibold text-xl">Phú Yên Travel</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navItem}
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu">
          <FaBars className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 bg-white/95 p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-ocean-600 font-semibold text-lg">Menu</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu"><FaTimes className="h-6 w-6" /></button>
          </div>
          <div className="flex flex-col gap-2" onClick={() => setOpen(false)}>
            {navItem}
          </div>
        </div>
      )}
    </header>
  )
}


