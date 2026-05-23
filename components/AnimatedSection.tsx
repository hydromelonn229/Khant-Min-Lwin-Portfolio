'use client'

import { useRef } from 'react'
import { motion, useInView, type Variant } from 'framer-motion'

type AnimationVariant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'fadeIn' | 'scaleIn'

const variants: Record<AnimationVariant, { hidden: Variant; visible: Variant }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
}

type Props = {
  children: React.ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export default function AnimatedSection({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* Stagger container — wraps a list of items that animate in one by one */
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  once = true,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-40px 0px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* Individual stagger child */
export function StaggerItem({
  children,
  className,
  variant = 'fadeUp',
}: {
  children: React.ReactNode
  className?: string
  variant?: AnimationVariant
}) {
  return (
    <motion.div
      variants={variants[variant]}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
