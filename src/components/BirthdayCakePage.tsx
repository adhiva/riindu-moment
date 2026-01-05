import { motion } from 'framer-motion'
import AnimatedBirthdayCake from './AnimatedBirthdayCake'
import { useLanguage } from '~/contexts/LanguageContext'

interface BirthdayCakePageProps {
  onContinue: () => void
}

export default function BirthdayCakePage({ onContinue }: BirthdayCakePageProps) {
  const { t } = useLanguage()

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-pastel-100 via-pink-pastel-50 to-purple-100 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating confetti particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            initial={{
              x: `${Math.random() * 100}vw`,
              y: -20,
              rotate: 0,
            }}
            animate={{
              y: '110vh',
              rotate: 360,
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {['🎉', '🎊', '✨', '💖', '🌸', '🎈'][Math.floor(Math.random() * 6)]}
          </motion.div>
        ))}
      </div>

      <div className="text-center relative z-10 px-4">
        {/* Birthday message */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-pastel-500 to-jjk-purple bg-clip-text text-transparent mb-4">
            {t.birthdayCake.title}
          </h1>
          <p className="text-xl md:text-2xl text-pink-pastel-600 font-medium mb-8">
            {t.birthdayCake.subtitle}
          </p>
        </motion.div>

        {/* Animated Birthday Cake */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
        >
          <AnimatedBirthdayCake />
        </motion.div>

        {/* Birthday wish message */}
        <motion.div
          className="max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-lg md:text-xl text-pink-pastel-700 leading-relaxed">
            {t.birthdayCake.message}
          </p>
        </motion.div>

        {/* Continue button */}
        <motion.button
          onClick={onContinue}
          className="glass-effect px-8 py-4 rounded-full text-pink-pastel-700 font-semibold text-lg hover:scale-110 transition-transform shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.birthdayCake.continueButton}
        </motion.button>

        {/* Sparkles around the page */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
