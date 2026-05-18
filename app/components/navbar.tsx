'use client'

import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { lenis } from '../lib/lenis'

const Navbar = () => {
  const [hide, setHide] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)

  const handleNavClick = (id: string) => {
    setHide(false)
    
    // Add glitch class to body
    document.body.classList.add('black-glitch-active')

    // Middle of the glitch -> scroll
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        // lenis scroll if possible, otherwise native
        if (lenis) {
          lenis.scrollTo(el, { immediate: true })
        } else {
          el.scrollIntoView({ behavior: 'instant' })
        }
      }
    }, 400) // 400ms half-way point

    // End of the glitch -> remove body class
    setTimeout(() => {
      document.body.classList.remove('black-glitch-active')
    }, 800)
  }

  return (
    <>

<motion.div
            key="menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
className="flex justify-between items-center px-4 md:px-[2.5%] py-5 md:py-7 bg-black text-white font-general font-medium text-sm md:text-lg relative w-full top-0 left-0 z-50 ">
      <div>Neeraj Singh</div>

      <AnimatePresence mode="wait">

        {/* MENU */}
        {!hide && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center cursor-pointer border-b-2 border-transparent hover-underline"
            onClick={() => setHide(true)}
          >
            MENU<Plus className="size-4 hover-underline" />
          </motion.div>
        )}

        {/* LINKS */}
        {hide && (
          <motion.div
            key="links"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="flex gap-4 md:gap-7 items-center"
          >
            <button onClick={() => handleNavClick('projects')} className='cursor-pointer hover-underline uppercase uppercase'>PROJECTS</button>
            <button onClick={() => handleNavClick('skills')} className='cursor-pointer hover-underline uppercase'>SKILLS</button>
            <button onClick={() => handleNavClick('contacts')} className='cursor-pointer hover-underline uppercase'>CONTACTS</button>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.div>
    </>
  )
}

export default Navbar


