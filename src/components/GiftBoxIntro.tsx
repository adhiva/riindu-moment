import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedBirthdayCake from './AnimatedBirthdayCake'
import { useLanguage } from '~/contexts/LanguageContext'

interface GiftBoxIntroProps {
  onOpen: () => void
}

export default function GiftBoxIntro({ onOpen }: GiftBoxIntroProps) {
  const { t } = useLanguage()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isOpened, setIsOpened] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      // Calculate scroll progress (0 to 100)
      const scrollY = scrollContainer.scrollTop
      const progress = Math.min(scrollY / 200, 1) // Open after scrolling 200px
      setScrollProgress(progress)

      if (progress >= 1 && !isOpened) {
        setIsOpened(true)
        setTimeout(() => {
          onOpen()
        }, 1500) // Wait for opening animation to complete
      }
    }

    scrollContainer.addEventListener('scroll', handleScroll)
    return () => scrollContainer.removeEventListener('scroll', handleScroll)
  }, [isOpened, onOpen])

  // Calculate lid position based on scroll
  const lidY = scrollProgress * -150 // Lift the lid up
  const lidRotate = scrollProgress * -15 // Tilt the lid
  const ribbonScale = 1 - scrollProgress // Shrink the ribbon

  return (
    <AnimatePresence>
      {!isOpened && (
        <div
          ref={scrollContainerRef}
          className="fixed inset-0 z-50 overflow-y-scroll bg-gradient-to-br from-pink-pastel-100 via-pink-pastel-50 to-purple-100 scrollbar-hide"
          style={{
            height: '100vh',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <motion.div
            className="relative"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ minHeight: '300vh' }}
          >
            <div className="sticky top-0 h-screen flex items-center justify-center">
          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: scrollProgress < 0.1 ? 1 : 0, y: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="text-pink-pastel-600 font-medium mb-2">
              {t.giftBox.scrollHint}
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg
                className="w-6 h-6 mx-auto text-pink-pastel-400"
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
          </motion.div>

          {/* Gift Box */}
          <div className="relative">
            {/* Sparkles around the box */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
                style={{
                  top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                  left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                ✨
              </motion.div>
            ))}

            {/* Box Container */}
            <motion.div
              className="relative w-64 h-64"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              {/* Box Lid */}
              <motion.div
                className="absolute inset-x-0 top-0 h-20 bg-gradient-to-br from-pink-pastel-400 to-pink-pastel-500 rounded-t-2xl shadow-lg"
                style={{
                  y: lidY,
                  rotate: lidRotate,
                  transformOrigin: "center bottom",
                }}
              >
                {/* Lid decoration */}
                <div className="absolute inset-0 bg-pink-pastel-600 opacity-20 rounded-t-2xl">
                  <div className="absolute inset-x-0 top-1/2 h-2 bg-pink-pastel-600 opacity-30"></div>
                </div>
              </motion.div>

              {/* Ribbon Bow */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ scale: ribbonScale }}
              >
                <div className="text-6xl">🎀</div>
              </motion.div>

              {/* Ribbon Vertical */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-gradient-to-b from-jjk-purple to-pink-pastel-500 shadow-md"
                style={{ scaleY: ribbonScale }}
              />

              {/* Box Body */}
              <div className="absolute inset-x-0 top-20 bottom-0 bg-gradient-to-br from-pink-pastel-300 to-pink-pastel-400 rounded-b-2xl shadow-2xl overflow-hidden">
                {/* Box pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-pink-pastel-500" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)',
                  }}></div>
                </div>

                {/* Glowing content inside (visible when opening) */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    opacity: scrollProgress > 0.5 ? scrollProgress : 0,
                  }}
                >
                  <div className="scale-75">
                    <AnimatedBirthdayCake />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-200 to-yellow-100 opacity-50 blur-xl"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Opening Text */}
            <motion.div
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
              animate={{
                opacity: scrollProgress > 0 ? 1 : 0,
                scale: scrollProgress > 0 ? 1 : 0.8,
              }}
            >
              <p className="text-pink-pastel-600 font-semibold text-lg">
                {scrollProgress < 1 ? t.giftBox.keepScrolling : t.giftBox.opening}
              </p>
            </motion.div>
          </div>

          {/* Confetti particles when opening */}
          {scrollProgress > 0.7 && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl"
                  initial={{
                    x: '50vw',
                    y: '50vh',
                    opacity: 1,
                  }}
                  animate={{
                    x: `${Math.random() * 100}vw`,
                    y: `${Math.random() * 100}vh`,
                    opacity: 0,
                    rotate: Math.random() * 360,
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                  }}
                >
                  {['🎉', '🎊', '✨', '💖', '🌸'][Math.floor(Math.random() * 5)]}
                </motion.div>
              ))}
            </div>
          )}
            </div>
          </motion.div>
        </div>
      )}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </AnimatePresence>
  )
}
