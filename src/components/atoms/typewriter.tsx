import React, { useState, useEffect } from "react"

/**
 * Typewriter component props.
 */
interface TypewriterProps {
  texts: string[]
  delay?: number
  infinite?: boolean
}

/**
 * Typewriter component that creates a typewriter effect for a list of strings.
 * It types out each string, pauses, deletes it, and then moves to the next string.
 * The process can be repeated infinitely if specified.
 */
const Typewriter: React.FC<TypewriterProps> = ({ texts, delay = 100, infinite = false }) => {
  // Index of the current text in the array.
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  // Number of characters of the current text currently displayed.
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  // Flag to determine whether we are typing (false) or deleting (true).
  const [isDeleting, setIsDeleting] = useState(false)

  // Get the current text from the array.
  const currentText = texts[currentTextIndex]

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && currentCharIndex < currentText.length) {
      // Typing phase: add one character.
      timeout = setTimeout(() => {
        setCurrentCharIndex(currentCharIndex + 1)
      }, delay)
    } else if (!isDeleting && currentCharIndex === currentText.length) {
      // Full text is typed: pause before starting deletion.
      if (infinite) {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, delay * 50)
      }
    } else if (isDeleting && currentCharIndex > 0) {
      // Deleting phase: remove one character.
      timeout = setTimeout(() => {
        setCurrentCharIndex(currentCharIndex - 1)
      }, delay)
    } else if (isDeleting && currentCharIndex === 0) {
      // Finished deleting the text.
      if (infinite) {
        timeout = setTimeout(() => {
          // Move to the next text in the array.
          setIsDeleting(false)
          setCurrentTextIndex((currentTextIndex + 1) % texts.length)
        }, delay * 2)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentCharIndex, isDeleting, currentText, delay, infinite, currentTextIndex, texts])

  return (
    <span>
      {currentText.slice(0, currentCharIndex)}
      <span className="blinking-cursor">|</span>
    </span>
  )
}

export default Typewriter
