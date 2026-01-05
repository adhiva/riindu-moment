import { motion } from 'framer-motion'
import { useLanguage } from '~/contexts/LanguageContext'

export default function ClosingSection() {
  const { t } = useLanguage()
  return (
    <section className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-pastel-300 opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-jjk-purple opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Decorative Elements */}
          <motion.div
            className="text-6xl mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          >
            ✨
          </motion.div>

          {/* Main Message */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-pastel-500 to-jjk-purple bg-clip-text text-transparent mb-6">
              {t.closing.title}
            </h2>

            <div className="space-y-4 text-pink-pastel-700 text-base md:text-lg leading-relaxed">
              <p>
                {t.closing.paragraph1}
              </p>

              <p>
                {t.closing.paragraph2}
              </p>

              <p>
                {t.closing.paragraph3}
              </p>
            </div>

            {/* Subtle Sign-off */}
            <motion.div
              className="pt-8 border-t border-pink-pastel-200 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <p className="text-pink-pastel-600 text-sm md:text-base italic">
                {t.closing.quote}
              </p>
              <p className="text-pink-pastel-500 text-sm mt-4">
                {t.closing.signOff}
              </p>
            </motion.div>
          </motion.div>

          {/* Decorative closing */}
          <motion.div
            className="mt-12 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            {['🌸', '💝', '🌟'].map((emoji, index) => (
              <motion.span
                key={index}
                className="text-3xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="text-center mt-8 text-xs text-pink-pastel-400 opacity-70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 1 }}
        >
          <p>{t.closing.footer}</p>
          <p className="mt-1">January 6, 2026</p>
        </motion.div>
      </div>
    </section>
  )
}
