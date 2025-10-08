import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode'

function ToggleMode() {
    const { isDark, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}
      className="relative flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 
      dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl transition-all duration-500 
        transform hover:scale-105 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 group overflow-hidden min-w-[140px]"
        aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"} >

        {/* Fond animé avec dégradé */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-400/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-700 opacity-0 group-hover:opacity-100" />
        {/* Effet de brillance au survol */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        {/* Container principal */}
        <div className="relative z-10 flex items-center gap-2">
        {isDark ? ( 
          <div className="flex items-center gap-2">
            <div className="relative">
              <Sun size={22} className="text-yellow-500 transition-all duration-700 group-hover:rotate-180 group-hover:scale-110 drop-shadow-lg transform-gpu" />
              {/* Effet de rayonnement */}
                <div className="absolute inset-0 rounded-full bg-yellow-500/20 scale-0 group-hover:scale-150 transition-transform duration-1000 opacity-0 group-hover:opacity-100 -z-10" />
            </div>
            <span className="font-medium transition-all duration-500 transform group-hover:translate-x-1">
                Mode Clair
            </span>
          </div>
        ) : (

          <div className="flex items-center gap-2">
            <div className="relative">
              <Moon size={22} className="text-indigo-600 dark:text-indigo-400 transition-all duration-700 group-hover:rotate-45 group-hover:scale-110 drop-shadow-lg transform-gpu" />
              {/* Effet d'étoiles subtiles */}
              <div className="absolute -top-1 -right-1 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" />
              <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500" />
            </div>
            <span className="font-medium transition-all duration-500 transform group-hover:translate-x-1">
              Mode Sombre
            </span>
          </div>
        )}
    </div>

  {/* Effet de bordure animée */}
  <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-1000 transform-gpu ${isDark 
      ? 'border-yellow-500/20 group-hover:border-yellow-500/40' 
      : 'border-blue-500/20 group-hover:border-blue-500/40'
       }
    group-hover:scale-105 `} />
  
  {/* Animation de particules */}
  <div className="absolute inset-0 rounded-2xl overflow-hidden">
    <div className={`absolute w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000
      ${isDark 
        ? 'bg-yellow-400/30 animate-ping' 
        : 'bg-blue-400/30 animate-ping'
      }
      top-1/4 left-1/4 `} />

    <div className={`absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300
      ${isDark 
        ? 'bg-orange-400/40 animate-ping' 
        : 'bg-purple-400/40 animate-ping'
      }
      bottom-1/3 right-1/3`} />
    </div>
</button>
  )
}

export default ToggleMode