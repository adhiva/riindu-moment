import { motion } from 'framer-motion'
import { useLanguage } from '~/contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.div
      className="fixed top-6 right-6 z-50 glass-effect rounded-full p-2 flex gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-full font-medium transition-all ${
          language === 'en'
            ? 'bg-gradient-to-r from-pink-pastel-400 to-jjk-purple text-white'
            : 'text-pink-pastel-600 hover:bg-pink-pastel-100'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('id')}
        className={`px-4 py-2 rounded-full font-medium transition-all ${
          language === 'id'
            ? 'bg-gradient-to-r from-pink-pastel-400 to-jjk-purple text-white'
            : 'text-pink-pastel-600 hover:bg-pink-pastel-100'
        }`}
        aria-label="Switch to Bahasa Indonesia"
      >
        ID
      </button>
    </motion.div>
  )
}
