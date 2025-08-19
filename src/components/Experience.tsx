import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (!gsap.core.globals().ScrollTrigger) gsap.registerPlugin(ScrollTrigger)

// Professional Work Experience Timeline
// - Glassmorphic vertical timeline with glowing accents
// - Company, role, period, highlights

const jobs = [
  {
    company: 'QuantumSoft',
    role: 'Senior Frontend Engineer',
    period: '2023 — Present',
    highlights: [
      'Led migration to React 18 + GSAP animations, boosting engagement by 34%',
      'Built design system with glassmorphism and accessibility baked-in',
      'Integrated WebGL/Spline visuals with smooth performance optimizations'
    ],
    tech: ['React', 'GSAP', 'Vite']
  },
  {
    company: 'Nebula Labs',
    role: 'Frontend Developer',
    period: '2021 — 2023',
    highlights: [
      'Implemented ScrollTrigger parallax narratives across product pages',
      'Drove Lighthouse performance to 95+ on key landing experiences',
      'Shipped bento-style projects module with reusable animation hooks'
    ],
    tech: ['Next.js', 'TypeScript', 'Framer Motion']
  },
  {
    company: 'Aurora Tech',
    role: 'Junior Web Developer',
    period: '2019 — 2021',
    highlights: [
      'Delivered responsive UI kits and component libraries',
      'Collaborated with designers to prototype interactions rapidly',
      'Maintained CI builds and wrote unit tests for UI components'
    ],
    tech: ['React', 'Jest', 'Sass']
  }
]

export default function Experience(){
  useEffect(()=>{
    gsap.utils.toArray('.exp-item').forEach((el, i)=>{
      gsap.fromTo(el, {opacity:0, y:20, filter:'blur(6px)'}, {opacity:1, y:0, filter:'blur(0px)', duration:0.6, ease:'power2.out', delay:i*0.08, 
        scrollTrigger:{ trigger: el, start:'top 85%', scroller:'[data-scroll-container]' }
      })
    })
  }, [])

  return (
    <section id="experience" className="py-24" data-scroll-section>
      <div className="w-[min(1100px,92%)] mx-auto">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="relative pl-6">
          <div className="absolute left-[10px] top-0 bottom-0 w-[2px]" style={{background:'linear-gradient(#00e5ff, transparent)'}}></div>
          {jobs.map((j, idx)=> (
            <article className="exp-item relative mb-5" key={idx}>
              <div className="absolute left-[2px] top-[10px] w-4 h-4 rounded-full" style={{background:'radial-gradient(circle,#00e5ff,transparent 70%)', boxShadow:'0 0 18px #00e5ff'}} />
              <div className="glass ml-6 p-4 shadow-[0_8px_28px_#00000044]">
                <header className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-semibold">{j.role}</h3>
                  <span className="text-muted">{j.company}</span>
                  <span className="ml-auto text-muted">{j.period}</span>
                </header>
                <ul className="list-disc ml-6 my-2">
                  {j.highlights.map((h, i)=> <li key={i}>{h}</li>)}
                </ul>
                <div>
                  {j.tech.map((t, i)=> <span key={i} className="inline-block px-2.5 py-1 rounded-full bg-[#10143dcc] border border-white/10 text-xs mr-2">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}