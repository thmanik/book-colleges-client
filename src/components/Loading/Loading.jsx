import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F4F7FA]">
                   <FaGraduationCap className="text-6xl text-secondary animate-bounce" />
                   <p className="mt-4 text-primary font-black tracking-widest uppercase text-sm">Loading Colleges...</p>
               </div>
  )
}
