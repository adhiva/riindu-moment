import { motion } from 'framer-motion'

export default function LandingPage() {
  const scrollToTimeline = () => {
    const timelineSection = document.querySelector('section:nth-of-type(2)')
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* JJK-inspired decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-jjk-blue opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-jjk-purple opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Birthday Cake Animation */}
        <motion.div
          className="mb-8 relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1
          }}
        >
          {/* Glowing effect behind cake */}
          <motion.div
            className="absolute inset-0 blur-2xl opacity-40"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-pastel-300 to-jjk-purple rounded-full"></div>
          </motion.div>

          {/* Cake with floating animation */}
          <motion.div
            className="text-8xl mb-4 inline-block relative z-10"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🎂
          </motion.div>

          {/* Candle sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xl"
              style={{
                top: `${20 + Math.random() * 20}%`,
                left: `${30 + Math.random() * 40}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut"
              }}
            >
              ✨
            </motion.div>
          ))}

          {/* Floating hearts */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`heart-${i}`}
              className="absolute text-2xl"
              style={{
                bottom: '10%',
                left: `${20 + i * 30}%`,
              }}
              animate={{
                y: [-10, -80],
                x: [0, (i - 1) * 20],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeOut"
              }}
            >
              💕
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-pastel-500 to-jjk-purple bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Happy Birthday, Riin-du
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-pink-pastel-700 leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            This is a small timeline of moments I once kept quietly — and wanted to share today.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="justify-self-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <button
              onClick={scrollToTimeline}
              className="flex flex-col items-center gap-2 cursor-pointer hover:scale-110 transition-transform duration-300 group"
              aria-label="Scroll to timeline"
            >
              <span className="text-sm text-pink-pastel-500 font-medium group-hover:text-pink-pastel-600 transition-colors">
                Scroll to explore
              </span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg
                  className="w-6 h-6 text-pink-pastel-400 group-hover:text-pink-pastel-500 transition-colors"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </motion.div>
            </button>
          </motion.div>
        </motion.div>

        {/* Subtle JJK reference */}
        <motion.div
          className="mt-6 text-xs text-pink-pastel-400 opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Like Gojo's Infinity, some moments are limitless ✨
        </motion.div>
      </div>
    </section>
  )
}
