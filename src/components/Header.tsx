import React, { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#0b0e2b99] to-transparent" data-scroll-section>
      <nav className="flex items-center justify-between w-[min(1200px,92%)] mx-auto py-3 sm:py-4 px-4 sm:px-0">
        <div className="brand font-extrabold tracking-wide text-lg sm:text-xl">Portfolio</div>
        <button className="hamburger md:hidden p-2" aria-label="Open Menu" onClick={()=>setOpen(v=>!v)}>
          <span className="block w-6 h-[2px] bg-text my-1"></span>
          <span className="block w-6 h-[2px] bg-text my-1"></span>
          <span className="block w-6 h-[2px] bg-text my-1"></span>
        </button>
        <ul className="hidden md:flex gap-5 lg:gap-6 text-muted">
          <li><a href="#home" data-scroll-to>Home</a></li>
          <li><a href="#about" data-scroll-to>About</a></li>
          <li><a href="#projects" data-scroll-to>Projects</a></li>
          <li><a href="#experience" data-scroll-to>Experience</a></li>
          <li><a href="#contact" data-scroll-to>Contact</a></li>
        </ul>
      </nav>
      <div className={`fixed inset-0 bg-[#0b0e2bdd] ${open ? 'flex' : 'hidden'} flex-col p-6 gap-4 md:hidden`}>
        <a href="#home" data-scroll-to onClick={()=>setOpen(false)}>Home</a>
        <a href="#about" data-scroll-to onClick={()=>setOpen(false)}>About</a>
        <a href="#projects" data-scroll-to onClick={()=>setOpen(false)}>Projects</a>
        <a href="#experience" data-scroll-to onClick={()=>setOpen(false)}>Experience</a>
        <a href="#contact" data-scroll-to onClick={()=>setOpen(false)}>Contact</a>
      </div>
    </header>
  )
}