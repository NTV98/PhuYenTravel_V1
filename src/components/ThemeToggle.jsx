import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleTheme()
      }}
      className="relative w-16 h-8 rounded-full overflow-hidden cursor-pointer transition-all duration-300 outline-none focus:outline-none border-0 focus:ring-0 active:outline-none z-10"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
      type="button"
    >
      {/* Background with day/night scenes - full width */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light Mood Scene - Full */}
        <div className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${isDark ? 'opacity-0' : 'opacity-100'}`}>
          <svg viewBox="0 0 100 50" className="w-full h-full">
            {/* Sky */}
            <rect x="0" y="0" width="100" height="30" fill="#87CEEB" />
            {/* Sun */}
            <circle cx="20" cy="15" r="8" fill="#FFE4B5" />
            {/* Stars/Light specks */}
            <circle cx="35" cy="10" r="1.5" fill="#FFFFFF" />
            <circle cx="45" cy="12" r="1" fill="#FFFFFF" />
            <circle cx="50" cy="8" r="1.2" fill="#FFFFFF" />
            {/* Hills */}
            <path d="M 0 30 Q 25 20 50 30 T 100 30 L 100 50 L 0 50 Z" fill="#90EE90" />
          </svg>
        </div>
        
        {/* Dark Mood Scene - Full */}
        <div className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${isDark ? 'opacity-100' : 'opacity-0'}`}>
          <svg viewBox="0 0 100 50" className="w-full h-full">
            {/* Sky */}
            <rect x="0" y="0" width="100" height="30" fill="#1a1a2e" />
            {/* Moon */}
            <circle cx="75" cy="15" r="6" fill="#FFD700" />
            {/* Stars */}
            <circle cx="25" cy="10" r="0.8" fill="#FFFFFF" />
            <circle cx="35" cy="8" r="0.6" fill="#FFFFFF" />
            <circle cx="45" cy="12" r="0.7" fill="#FFFFFF" />
            <circle cx="55" cy="9" r="0.8" fill="#FFFFFF" />
            <circle cx="65" cy="11" r="0.6" fill="#FFFFFF" />
            <circle cx="85" cy="8" r="0.7" fill="#FFFFFF" />
            <circle cx="90" cy="12" r="0.6" fill="#FFFFFF" />
            {/* Hills */}
            <path d="M 0 30 Q 25 20 50 30 T 100 30 L 100 50 L 0 50 Z" fill="#006400" />
            {/* Tree */}
            <path d="M 60 30 L 60 40 L 65 40 L 65 30 Z" fill="#8B4513" />
            <path d="M 58 30 Q 60 25 62 30 Q 64 25 66 30 Q 62 25 60 30 Z" fill="#228B22" />
          </svg>
        </div>
      </div>
      
      {/* Handle */}
      <div
        className={`absolute top-0.5 bottom-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out pointer-events-none ${
          isDark ? 'translate-x-[2.5rem]' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

