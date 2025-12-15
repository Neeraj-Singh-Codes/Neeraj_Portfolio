'use client'

import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [hide, setHide] = useState(false)

  return (
    
<motion.div
            key="menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
className="flex justify-between items-center px-[2.5%] py-7 bg-black text-white font-general font-medium text-lg relative w-full top-0 left-0 z-50 ">
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
            className="flex gap-7"
            onClick={() => setHide(false)}
          >
            <a className=' cursor-pointer hover-underline'>PROJECTS</a>
            <a className=' cursor-pointer hover-underline'>SKILLS</a>
            <a className=' cursor-pointer hover-underline'>CONTACTS</a>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar


