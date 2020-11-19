import { useEffect, useRef } from 'react'

const SCROLL_CACHE = new Map<string, number>()

export const useScrollRestoration = (key: string) => {
  const scrollAreaRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const scrollArea = scrollAreaRef.current

    if (!scrollArea) return

    const handleScroll = () => SCROLL_CACHE.set(key, scrollArea.scrollTop)

    scrollArea.scrollTop = SCROLL_CACHE.get(key) || 0
    scrollArea.addEventListener('scroll', handleScroll)

    return () => {
      scrollArea.removeEventListener('scroll', handleScroll)
    }
  }, [key])

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: scrollAreaRef as any
  }
}
