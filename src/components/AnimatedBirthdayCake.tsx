import { motion } from 'framer-motion'

export default function AnimatedBirthdayCake() {
  return (
    <div className="relative w-48 h-48 mx-auto">
      {/* Cake Base - Bottom Layer */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-16 bg-gradient-to-br from-pink-pastel-400 to-pink-pastel-500 rounded-lg"
        initial={{ scale: 0, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        {/* Frosting decoration */}
        <div className="absolute -top-2 left-0 right-0 flex justify-around">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-4 bg-pink-pastel-300 rounded-full"
            />
          ))}
        </div>
        {/* Dots decoration */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-around px-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-pink-pastel-200 rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {/* Cake Base - Middle Layer */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-32 h-12 bg-gradient-to-br from-pink-pastel-500 to-jjk-purple rounded-lg"
        initial={{ scale: 0, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
      >
        {/* Frosting decoration */}
        <div className="absolute -top-2 left-0 right-0 flex justify-around">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-4 bg-pink-pastel-400 rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {/* Cake Base - Top Layer */}
      <motion.div
        className="absolute bottom-28 left-1/2 -translate-x-1/2 w-24 h-10 bg-gradient-to-br from-jjk-purple to-pink-pastel-600 rounded-lg"
        initial={{ scale: 0, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      >
        {/* Frosting decoration */}
        <div className="absolute -top-2 left-0 right-0 flex justify-around">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-5 h-3 bg-pink-pastel-500 rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {/* Candles */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 flex gap-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
          >
            {/* Candle stick */}
            <div className="w-2 h-8 bg-gradient-to-b from-pink-pastel-300 to-pink-pastel-400 rounded-full" />

            {/* Wick */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-gray-700" />

            {/* Flame */}
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2"
              animate={{
                scale: [1, 1.1, 1],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              {/* Outer glow */}
              <div className="absolute inset-0 w-6 h-8 bg-yellow-300 opacity-30 blur-md rounded-full" />

              {/* Flame shape */}
              <svg
                width="20"
                height="24"
                viewBox="0 0 20 24"
                className="relative z-10"
              >
                <motion.path
                  d="M10 0C10 0 6 6 6 12C6 15.3137 7.79086 18 10 18C12.2091 18 14 15.3137 14 12C14 6 10 0 10 0Z"
                  fill="url(#flameGradient)"
                  animate={{
                    d: [
                      "M10 0C10 0 6 6 6 12C6 15.3137 7.79086 18 10 18C12.2091 18 14 15.3137 14 12C14 6 10 0 10 0Z",
                      "M10 0C10 0 5.5 6 5.5 12C5.5 15.3137 7.79086 18 10 18C12.2091 18 14.5 15.3137 14.5 12C14.5 6 10 0 10 0Z",
                      "M10 0C10 0 6 6 6 12C6 15.3137 7.79086 18 10 18C12.2091 18 14 15.3137 14 12C14 6 10 0 10 0Z",
                    ],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <defs>
                  <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FEF08A" />
                    <stop offset="50%" stopColor="#FDE047" />
                    <stop offset="100%" stopColor="#F97316" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Inner bright spot */}
              <motion.div
                className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-yellow-100 rounded-full blur-sm"
                animate={{
                  opacity: [0.8, 1, 0.8],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Sparkles around the cake */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-400 text-xl"
          style={{
            top: `${20 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
            left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 6)}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  )
}
