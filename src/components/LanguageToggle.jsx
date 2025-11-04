import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  const isEnglish = language === 'en'

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-14 h-7 rounded-full overflow-hidden cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ocean-300 focus:ring-offset-2"
      aria-label="Toggle language"
      title={isEnglish ? 'Chuyển sang Tiếng Việt' : 'Switch to English'}
    >
      {/* Background with flag colors - full width */}
      <div className="absolute inset-0">
        {/* Vietnamese flag - Full (Red #DA251D) */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${isEnglish ? 'opacity-0' : 'opacity-100'} bg-[#DA251D]`} />
        
        {/* English flag - Full (Union Jack colors: blue #012169, red #C8102E, white) */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${isEnglish ? 'opacity-100' : 'opacity-0'}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Blue background */}
            <rect x="0" y="0" width="100" height="100" fill="#012169" />
            {/* White diagonal cross */}
            <path d="M 0 0 L 100 100 M 100 0 L 0 100" stroke="#FFFFFF" strokeWidth="15" strokeLinecap="round" />
            {/* Red horizontal cross */}
            <rect x="0" y="42" width="100" height="16" fill="#C8102E" />
            {/* Red vertical cross */}
            <rect x="42" y="0" width="16" height="100" fill="#C8102E" />
            {/* White horizontal stripe */}
            <rect x="0" y="45" width="100" height="10" fill="#FFFFFF" />
            {/* White vertical stripe */}
            <rect x="45" y="0" width="10" height="100" fill="#FFFFFF" />
          </svg>
        </div>
      </div>
      
      {/* Handle */}
      <div
        className={`absolute top-0.5 bottom-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isEnglish ? 'translate-x-[2.25rem]' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

