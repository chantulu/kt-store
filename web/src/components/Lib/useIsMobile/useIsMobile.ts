import { useEffect, useState } from 'react'

export default function useIsMobile(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  const [windowSize, setWindowSize] = useState({
    width: 993
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize.width < 992
}
