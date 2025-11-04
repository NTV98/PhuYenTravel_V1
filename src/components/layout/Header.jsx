import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaBars, FaTimes, FaCog, FaArrowLeft } from 'react-icons/fa'
import ThemeToggle from '../ThemeToggle'
import LanguageToggle from '../LanguageToggle'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (open || openSettings) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = original }
    }
  }, [open, openSettings])


  return (
    <>
      {/* Desktop Header */}
      <header className={`hidden md:block relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 transition-shadow ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="container-responsive flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-slate-800 dark:text-white font-bold text-lg md:text-xl">Phú Yên Travel</span>
          </Link>
          <nav className="flex items-center gap-2 flex-1 justify-center">
            <NavLink to="/" className={({ isActive }) => `nav-underline ${isActive ? 'nav-underline-active' : ''} text-slate-700 dark:text-white hover:text-accent-yellow`}>Trang chủ</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-underline ${isActive ? 'nav-underline-active' : ''} text-slate-700 dark:text-white hover:text-accent-yellow`}>Giới thiệu</NavLink>
            <NavLink to="/destinations" className={({ isActive }) => `nav-underline ${isActive ? 'nav-underline-active' : ''} text-slate-700 dark:text-white hover:text-accent-yellow`}>Điểm đến</NavLink>
            <NavLink to="/cuisine" className={({ isActive }) => `nav-underline ${isActive ? 'nav-underline-active' : ''} text-slate-700 dark:text-white hover:text-accent-yellow`}>Ẩm thực</NavLink>
            <NavLink to="/map" className={({ isActive }) => `nav-underline ${isActive ? 'nav-underline-active' : ''} text-slate-700 dark:text-white hover:text-accent-yellow`}>Bản đồ</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-underline ${isActive ? 'nav-underline-active' : ''} text-slate-700 dark:text-white hover:text-accent-yellow`}>Liên hệ</NavLink>
          </nav>
        </div>
        <div className="absolute right-0 top-0 h-16 flex items-center gap-2 pr-4">
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* <LanguageToggle /> */}
          </div>
        </div>
      </header>

      {/* Floating Menu Button - Mobile Only */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="md:hidden fixed top-4 right-4 z-[100] w-10 h-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full shadow-2xl border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center text-slate-800 dark:text-white hover:bg-slate-100/90 dark:hover:bg-slate-800/90 hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <FaBars className="h-5 w-5" />
      </button>

      {open && !openSettings && createPortal(
        <div className="md:hidden fixed inset-0 z-[9999]">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="fixed inset-0 bg-white dark:bg-slate-900 flex flex-col">
            <div className="flex items-center justify-between h-14 px-4 border-b border-slate-200 dark:border-slate-800">
              {/* <span className="text-accent-yellow font-bold text-lg">Menu</span> */}
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <nav className="px-2 py-3 overflow-y-auto flex-1">
              <div className="flex flex-col divide-y divide-slate-200 dark:divide-slate-800">
                <NavLink 
                  to="/" 
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `px-4 py-4 text-lg ${isActive ? 'text-accent-yellow font-semibold' : 'text-slate-700 dark:text-white hover:text-accent-yellow'}`}
                >
                  Trang chủ
                </NavLink>
                <NavLink 
                  to="/about" 
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `px-4 py-4 text-lg ${isActive ? 'text-accent-yellow font-semibold' : 'text-slate-700 dark:text-white hover:text-accent-yellow'}`}
                >
                  Giới thiệu
                </NavLink>
                <NavLink 
                  to="/destinations" 
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `px-4 py-4 text-lg ${isActive ? 'text-accent-yellow font-semibold' : 'text-slate-700 dark:text-white hover:text-accent-yellow'}`}
                >
                  Điểm đến
                </NavLink>
                <NavLink 
                  to="/cuisine" 
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `px-4 py-4 text-lg ${isActive ? 'text-accent-yellow font-semibold' : 'text-slate-700 dark:text-white hover:text-accent-yellow'}`}
                >
                  Ẩm thực
                </NavLink>
                <NavLink 
                  to="/map" 
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `px-4 py-4 text-lg ${isActive ? 'text-accent-yellow font-semibold' : 'text-slate-700 dark:text-white hover:text-accent-yellow'}`}
                >
                  Bản đồ
                </NavLink>
                <NavLink 
                  to="/contact" 
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `px-4 py-4 text-lg ${isActive ? 'text-accent-yellow font-semibold' : 'text-slate-700 dark:text-white hover:text-accent-yellow'}`}
                >
                  Liên hệ
                </NavLink>
                <button
                  onClick={() => {
                    setOpenSettings(true)
                  }}
                  className="px-4 py-4 text-lg text-slate-700 dark:text-white hover:text-accent-yellow flex items-center gap-3 w-full text-left"
                >
                  <FaCog className="w-5 h-5" />
                  <span>Cài đặt</span>
                </button>
              </div>
            </nav>
          </div>
        </div>,
        document.body
      )}

      {/* Settings Menu */}
      {openSettings && createPortal(
        <div className="md:hidden fixed inset-0 z-[9999]">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpenSettings(false)} />
          <div className="fixed inset-0 bg-white dark:bg-slate-900 flex flex-col">
            <div className="flex items-center justify-between h-14 px-4 border-b border-slate-200 dark:border-slate-800">
              <button 
                onClick={() => setOpenSettings(false)} 
                className="p-2 -ml-2 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Back to menu"
              >
                <FaArrowLeft className="h-5 w-5" />
              </button>
              <span className="text-accent-yellow font-bold text-lg">Cài đặt</span>
              <button 
                onClick={() => {
                  setOpenSettings(false)
                  setOpen(false)
                }} 
                aria-label="Close settings" 
                className="p-2 -mr-2 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <div className="px-4 py-6 overflow-y-auto flex-1">
              <div className="space-y-6">
                {/* Theme Setting */}
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                  <h3 className="text-slate-800 dark:text-white font-semibold text-base mb-4">Giao diện</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-300 text-sm">Chế độ sáng/tối</span>
                    <ThemeToggle />
                  </div>
                </div>

                {/* Language Setting */}
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                  <h3 className="text-slate-800 dark:text-white font-semibold text-base mb-4">Ngôn ngữ</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-300 text-sm">Tiếng Việt / English</span>
                    <LanguageToggle />
                  </div>
                </div>

                {/* Placeholder for future settings */}
                <div className="bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-4">
                  <h3 className="text-slate-800 dark:text-white font-semibold text-base mb-2">Thông báo</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Tính năng đang được phát triển</p>
                </div>

                <div className="bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-4">
                  <h3 className="text-slate-800 dark:text-white font-semibold text-base mb-2">Bảo mật</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Tính năng đang được phát triển</p>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}


