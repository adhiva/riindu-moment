import { useState, useEffect } from 'react'
import { checkAccess } from '~/utils/accessControl'
import GiftBoxIntro from '~/components/GiftBoxIntro'
import BirthdayCakePage from '~/components/BirthdayCakePage'
import LanguageSwitcher from '~/components/LanguageSwitcher'
import Timeline from '~/components/Timeline'
import ClosingSection from '~/components/ClosingSection'
import AccessDenied from '~/components/AccessDenied'

export default function App() {
  const [accessGranted, setAccessGranted] = useState(false)
  const [accessMessage, setAccessMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [giftOpened, setGiftOpened] = useState(false)

  useEffect(() => {
    const { reason } = checkAccess()
    setAccessGranted(accessGranted => accessGranted || !reason)
    // setAccessGranted(true)
    if (reason) {
      setAccessMessage(reason)
    }
    setLoading(false)

    // Reset scroll position on load
    window.scrollTo({ top: 0 })
  }, [])

  const handleGiftOpen = () => {
    setGiftOpened(true)
    // Scroll to top after gift opens
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-pink-pastel-400 text-xl">
          Loading...
        </div>
      </div>
    )
  }

  if (!accessGranted) {
    return <AccessDenied message={accessMessage} />
  }

  const scrollToTimeline = () => {
    const timelineSection = document.querySelector('#timeline-section')
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <LanguageSwitcher />
      {!giftOpened && <GiftBoxIntro onOpen={handleGiftOpen} />}
      {giftOpened && (
        <div className="min-h-screen">
          <BirthdayCakePage onContinue={scrollToTimeline} />
          <div id="timeline-section">
            <Timeline />
          </div>
          <ClosingSection />
        </div>
      )}
    </>
  )
}
