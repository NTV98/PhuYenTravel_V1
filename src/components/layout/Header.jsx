import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from '../ThemeToggle'
import LanguageToggle from '../LanguageToggle'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (open) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = original }
    }
  }, [open])

  const DesktopNav = (
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
    <header className={`relative bg-white/70 dark:bg-slate-900/70 backdrop-blur sticky top-0 z-50 border-b border-slate-200 dark:border-slate-700 transition-shadow ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container-responsive flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-ocean-600 font-semibold text-xl">Phú Yên Travel</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2 flex-1 justify-center">
          {DesktopNav}
        </nav>
      </div>
      <div className="absolute right-0 top-0 h-16 flex items-center gap-2 pr-4">
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          {/* <LanguageToggle /> */}
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu">
          <FaBars className="h-6 w-6" />
        </button>
      </div>

      {open && createPortal(
        <div className="md:hidden fixed inset-0 z-[9999]">
          <div className="absolute inset-0 bg-slate-900/60" onClick={() => setOpen(false)} />
          <div className="fixed inset-0 bg-white flex flex-col">
            <div className="flex items-center justify-between h-14 px-4 border-b shadow-sm">
              <span className="text-ocean-600 font-semibold text-lg">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <nav className="px-2 py-3 overflow-y-auto flex-1">
              <div className="flex flex-col divide-y divide-slate-100" onClick={() => setOpen(false)}>
                <NavLink to="/" className={({ isActive }) => `px-4 py-4 text-lg ${isActive ? 'text-ocean-700 font-semibold' : 'text-slate-700 hover:text-ocean-600'}`}>Trang chủ</NavLink>
                <NavLink to="/about" className={({ isActive }) => `px-4 py-4 text-lg ${isActive ? 'text-ocean-700 font-semibold' : 'text-slate-700 hover:text-ocean-600'}`}>Giới thiệu</NavLink>
                <NavLink to="/destinations" className={({ isActive }) => `px-4 py-4 text-lg ${isActive ? 'text-ocean-700 font-semibold' : 'text-slate-700 hover:text-ocean-600'}`}>Điểm đến</NavLink>
                <NavLink to="/cuisine" className={({ isActive }) => `px-4 py-4 text-lg ${isActive ? 'text-ocean-700 font-semibold' : 'text-slate-700 hover:text-ocean-600'}`}>Ẩm thực</NavLink>
                <NavLink to="/map" className={({ isActive }) => `px-4 py-4 text-lg ${isActive ? 'text-ocean-700 font-semibold' : 'text-slate-700 hover:text-ocean-600'}`}>Bản đồ</NavLink>
                <NavLink to="/contact" className={({ isActive }) => `px-4 py-4 text-lg ${isActive ? 'text-ocean-700 font-semibold' : 'text-slate-700 hover:text-ocean-600'}`}>Liên hệ</NavLink>
              </div>
            </nav>
          </div>
        </div>,
        document.body
      )}
    </header>
  )
}


