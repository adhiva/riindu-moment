import { motion } from 'framer-motion'
import { useState } from 'react'
import MapComponent from './MapComponent'
import type { Moment } from '~/types/timeline'
import { useLanguage } from '~/contexts/LanguageContext'

interface TimelineCardProps {
  moment: Moment
  index: number
}

export default function TimelineCard({ moment, index }: TimelineCardProps) {
  const { t } = useLanguage()
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [showMap, setShowMap] = useState(false)

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % moment.media.length)
  }

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + moment.media.length) % moment.media.length)
  }

  return (
    <motion.div
      className="glass-effect rounded-3xl p-4 md:p-6 max-w-4xl mx-auto shadow-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-pink-pastel-700 mb-2">
              {moment.title}
            </h3>
            <p className="text-pink-pastel-500 font-medium">{moment.date}</p>
          </div>
          <button
            onClick={() => setShowMap(!showMap)}
            className="glass-effect p-2 rounded-full hover:scale-110 transition-transform"
            aria-label={showMap ? t.timelineCard.hideMap : t.timelineCard.showMap}
          >
            <svg
              className="w-5 h-5 text-pink-pastel-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </button>
        </div>
        <p className="text-pink-pastel-600 flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          {moment.place}
        </p>
      </div>

      {/* Map Section (Collapsible) */}
      {showMap && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-4 rounded-2xl overflow-hidden"
        >
          <MapComponent location={moment.location} />
        </motion.div>
      )}

      {/* Media Section */}
      {moment.media.length > 0 && (
        <div className="mb-4 relative">
          <div className="rounded-2xl overflow-hidden bg-pink-pastel-100">
            {moment.media[currentMediaIndex].type === 'image' ? (
              <img
                src={moment.media[currentMediaIndex].src}
                alt={moment.media[currentMediaIndex].alt}
                className="w-full h-auto max-h-[400px] object-contain"
              />
            ) : (
              <video
                src={moment.media[currentMediaIndex].src}
                controls
                className="w-full h-auto max-h-[400px] object-contain"
              >
                {t.timelineCard.videoNotSupported}
              </video>
            )}
          </div>

          {/* Media Navigation */}
          {moment.media.length > 1 && (
            <>
              <button
                onClick={prevMedia}
                className="absolute left-2 top-1/2 -translate-y-1/2 glass-effect p-2 rounded-full hover:scale-110 transition-transform"
                aria-label={t.timelineCard.previousMedia}
              >
                <svg
                  className="w-5 h-5 text-pink-pastel-700"
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
              <button
                onClick={nextMedia}
                className="absolute right-2 top-1/2 -translate-y-1/2 glass-effect p-2 rounded-full hover:scale-110 transition-transform"
                aria-label={t.timelineCard.nextMedia}
              >
                <svg
                  className="w-5 h-5 text-pink-pastel-700"
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

              {/* Media Indicators */}
              <div className="flex justify-center gap-1 mt-2">
                {moment.media.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentMediaIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentMediaIndex
                        ? 'bg-pink-pastel-500 w-6'
                        : 'bg-pink-pastel-300'
                    }`}
                    aria-label={`${t.timelineCard.goToMedia} ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Description */}
      <div className="prose prose-pink max-w-none">
        <p className="text-pink-pastel-700 text-base md:text-lg leading-relaxed">
          {moment.description}
        </p>
      </div>
    </motion.div>
  )
}
