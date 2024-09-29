'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    const mouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        setIsHovering(true)
      }
    }

    const mouseOut = () => {
      setIsHovering(false)
    }

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mouseover", mouseOver)
    window.addEventListener("mouseout", mouseOut)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mouseover", mouseOver)
      window.removeEventListener("mouseout", mouseOut)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: isHovering ? 1.5 : 1
    }
  }

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate="default"
      transition={{ type: "spring", stiffness: 1000, damping: 50 }}
    />
  )
}