import { useEffect, useState } from 'react'

export const useScrollPosition = ({ sections }: {sections: Array<string>}) => {
  const [scrollYPosition, setScrollYPosition] = useState(0)
  const [newSections, setNewSections] = useState<{ name: string; yPosition: number; }[]>([])

  // Set the y position of the scrollbar on each render
  // distance from the top of the viewport to the scrollbar top border.
  useEffect(() => {
    const onScroll = () => {
      const { scrollY } = window
      // the multiplier helps get a more reliable position
      // add a relative offset, so the scrollBar is alligned with the section displacement
      // (which is not pixel by pixel) when enters the viewport
      setScrollYPosition(scrollY * 1.1)
    }
    // add event listener to window
    window.addEventListener('scroll', onScroll, true)

    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll, false)
    }
  }, [])

  // Get and set the position of the sections relative to the document
  useEffect(() => {
    const sectionsPositions = sections.map((section) => {
      const element = document.getElementById(section.toLowerCase())
      const newSectionObj = {
        name: section,
        yPosition: element ? (element?.getBoundingClientRect().top + window.scrollY) : 0
      }

      return newSectionObj
    })
    setNewSections(sectionsPositions)
  }, [setNewSections, sections]) // This effect runs only once, after the initial render

  // Determine if the section is on the viewport and aligned with the scrollBar position
  const sectionIsOnScrollView = (scrollYPosition: number, sectionIndex: number) => {
    const maxSections = newSections.length - 1

    if (sectionIndex === maxSections) {
      return scrollYPosition >= newSections[sectionIndex]?.yPosition
    } else {
      return scrollYPosition > newSections[sectionIndex]?.yPosition && scrollYPosition < newSections[sectionIndex + 1]?.yPosition
    }
  }

  return {
    sectionIsOnScrollView,
    scrollYPosition,
    newSections
  }
}
