import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import timelineData from '~/data/timeline.json'
import TimelineCard from './TimelineCard'
import type { TimelineData } from '~/types/timeline'
import { useLanguage } from '~/contexts/LanguageContext'

export default function Timeline() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { moments } = timelineData as TimelineData

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      })
      setCurrentIndex(index)
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft
      const cardWidth = scrollContainerRef.current.offsetWidth
      const index = Math.round(scrollLeft / cardWidth)
      setCurrentIndex(index)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="min-h-screen py-12 px-4 relative">
      <div className="items-center max-w-7xl mx-auto">
        {/* Timeline Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-pastel-500 to-jjk-purple bg-clip-text text-transparent mb-4">
            {t.timeline.title}
          </h2>
          <p className="text-pink-pastel-600 text-lg">
            {t.timeline.subtitle}
          </p>
        </motion.div>

        {/* Instagram Stories-style Progress Bar */}
        <div className="flex gap-1 mb-6 max-w-md mx-auto">
          {moments.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className="flex-1 h-1 bg-pink-pastel-200 rounded-full overflow-hidden relative"
              aria-label={`Go to moment ${index + 1}`}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-pink-pastel-500 to-jjk-purple"
                initial={{ width: '0%' }}
                animate={{ width: currentIndex >= index ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide gap-2 pb-4"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {moments.map((moment, index) => (
            <div
              key={moment.id}
              className="flex-shrink-0 w-full snap-center"
              style={{ scrollSnapAlign: 'center' }}
            >
              <TimelineCard moment={moment} index={index} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="glass-effect p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
            aria-label={t.timeline.previous}
          >
            <svg
              className="w-6 h-6 text-pink-pastel-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <div className="glass-effect px-4 py-3 rounded-full">
            <span className="text-pink-pastel-700 font-medium">
              {currentIndex + 1} / {moments.length}
            </span>
          </div>

          <button
            onClick={() => scrollToIndex(Math.min(moments.length - 1, currentIndex + 1))}
            disabled={currentIndex === moments.length - 1}
            className="glass-effect p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-transform"
            aria-label={t.timeline.next}
          >
            <svg
              className="w-6 h-6 text-pink-pastel-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
