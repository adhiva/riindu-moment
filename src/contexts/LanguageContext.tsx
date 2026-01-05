import { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'en' | 'id'

interface Translations {
  giftBox: {
    scrollHint: string
    keepScrolling: string
    opening: string
  }
  birthdayCake: {
    title: string
    subtitle: string
    message: string
    continueButton: string
  }
  timeline: {
    title: string
    subtitle: string
    previous: string
    next: string
  }
  timelineCard: {
    showMap: string
    hideMap: string
    previousMedia: string
    nextMedia: string
    goToMedia: string
    videoNotSupported: string
  }
  closing: {
    title: string
    paragraph1: string
    paragraph2: string
    paragraph3: string
    quote: string
    signOff: string
    footer: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    giftBox: {
      scrollHint: 'Scroll down to unwrap your gift',
      keepScrolling: 'Keep scrolling...',
      opening: 'Opening...',
    },
    birthdayCake: {
      title: 'Happy Birthday!',
      subtitle: 'Selamat Ulang Tahun!',
      message: 'Make a wish and blow out the candles!',
      continueButton: 'Continue to Memories',
    },
    timeline: {
      title: 'Our Journey Together',
      subtitle: 'Swipe through the moments we shared',
      previous: 'Previous moment',
      next: 'Next moment',
    },
    timelineCard: {
      showMap: 'Show map',
      hideMap: 'Hide map',
      previousMedia: 'Previous media',
      nextMedia: 'Next media',
      goToMedia: 'Go to media',
      videoNotSupported: 'Your browser does not support the video tag.',
    },
    closing: {
      title: 'Thank You, Karina',
      paragraph1: 'Thank you for being part of my story. Every moment we shared, from the first meeting at Ennichisai to our last coffee together, has been a gift I\'ll always cherish.',
      paragraph2: 'Congratulations on graduating with a Bachelor of Public Health with cum laude honors. I\'m really proud of you, Riin. Your dedication and hard work have truly paid off.',
      paragraph3: 'I hope the days ahead treat you kindly. May you find joy in the little things, success in your endeavors, and peace in your journey forward.',
      quote: 'Like Gojo\'s unwavering strength and warmth, may you always find your own infinite power within.',
      signOff: 'With warmth and gratitude 💫',
      footer: 'Made with care for a special someone 💕',
    },
  },
  id: {
    giftBox: {
      scrollHint: 'Gulir ke bawah untuk membuka hadiahmu',
      keepScrolling: 'Terus gulir...',
      opening: 'Membuka...',
    },
    birthdayCake: {
      title: 'Selamat Ulang Tahun!',
      subtitle: 'Happy Birthday!',
      message: 'Tutup matamu, ucapkan permintaan, dan tiup lilinnya!',
      continueButton: 'Lanjut ke Kenangan',
    },
    timeline: {
      title: 'Perjalanan Kita Bersama',
      subtitle: 'Geser untuk melihat momen-momen yang kita lewati',
      previous: 'Momen sebelumnya',
      next: 'Momen selanjutnya',
    },
    timelineCard: {
      showMap: 'Tampilkan peta',
      hideMap: 'Sembunyikan peta',
      previousMedia: 'Media sebelumnya',
      nextMedia: 'Media selanjutnya',
      goToMedia: 'Pergi ke media',
      videoNotSupported: 'Browser Anda tidak mendukung tag video.',
    },
    closing: {
      title: 'Terima Kasih, Karina',
      paragraph1: 'Terima kasih telah menjadi bagian dari ceritaku. Setiap momen yang kita bagikan, dari pertemuan pertama di Ennichisai hingga kopi terakhir kita bersama, adalah hadiah yang akan selalu kusimpan.',
      paragraph2: 'Selamat atas kelulusanmu dengan gelar Sarjana Kesehatan Masyarakat dengan predikat cum laude. Aku sangat bangga padamu, Riin. Dedikasi dan kerja kerasmu benar-benar membuahkan hasil.',
      paragraph3: 'Aku berharap hari-hari ke depan memperlakukanmu dengan baik. Semoga kamu menemukan kebahagiaan dalam hal-hal kecil, kesuksesan dalam usahamu, dan kedamaian dalam perjalananmu ke depan.',
      quote: 'Seperti kekuatan dan kehangatan Gojo yang tak tergoyahkan, semoga kamu selalu menemukan kekuatan tak terbatasmu sendiri di dalam dirimu.',
      signOff: 'Dengan kehangatan dan rasa syukur 💫',
      footer: 'Dibuat dengan penuh perhatian untuk seseorang yang istimewa 💕',
    },
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    return (saved as Language) || 'en'
  })

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
