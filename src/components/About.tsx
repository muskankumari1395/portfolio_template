import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Palette, 
  DeviceMobile, 
  Lightning, 
  Database, 
  GitBranch,
  PaintBrush,
  Globe
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useEffect(() => {
    // Section animation
    gsap.fromTo('.about-section', {
      opacity: 0,
      y: 60,
      filter: 'blur(10px)'
    }, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Profile image animation
    gsap.fromTo('.profile-image', {
      opacity: 0,
      x: -60,
      scale: 0.8
    }, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.profile-image',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });

    // Skills animation with stagger
    gsap.fromTo('.skill-icon', {
      opacity: 0,
      y: 30,
      scale: 0.8
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: 'back.out(1.7)',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });

    // Bio text animation
    gsap.fromTo('.bio-text', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.bio-text',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  const skills = [
    { icon: Code, label: 'Frontend', color: 'text-primary' },
    { icon: Database, label: 'Backend', color: 'text-accent' },
    { icon: DeviceMobile, label: 'Mobile', color: 'text-primary-glow' },
    { icon: Palette, label: 'UI/UX', color: 'text-accent' },
    { icon: Lightning, label: 'Performance', color: 'text-primary' },
    { icon: GitBranch, label: 'Version Control', color: 'text-primary-glow' },
    { icon: PaintBrush, label: 'Design Tools', color: 'text-accent' },
    { icon: Globe, label: 'Web APIs', color: 'text-primary' }
  ];

  return (
    <section id="about" className="about-section py-24 bg-background-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="profile-image relative flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/50 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616c2e5aece?w=400&h=400&fit=crop&crop=face&auto=format&q=80" 
                  alt="Developer Profile" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="bio-text space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
                <span className="text-foreground">About</span>
                <span className="text-gradient-primary"> Me</span>
              </h2>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I'm a passionate web developer with expertise in creating immersive digital experiences. 
                I specialize in modern frontend technologies, with a focus on performance, accessibility, 
                and beautiful user interfaces.
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or designing the next generation of web experiences.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="skills-grid">
              <h3 className="text-xl sm:text-2xl font-medium text-foreground mb-6">Core Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.label}
                    className="skill-icon glass-card p-3 sm:p-4 text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <skill.icon 
                      size={28} 
                      className={`${skill.color} mx-auto mb-2 group-hover:scale-110 transition-transform icon-glow`} 
                      weight="light"
                    />
                    <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;