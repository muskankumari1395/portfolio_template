import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate headline
    tl.fromTo(
      '.hero-headline',
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }
    );

    // Animate subtitle
    tl.fromTo(
      '.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    );

    // Animate CTAs
    tl.fromTo(
      '.hero-ctas',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    );

    // Animate Spline container
    tl.fromTo(
      '.spline-hero',
      { opacity: 0, x: 100 },
      { opacity: 0.8, x: 0, duration: 1.5, ease: 'power2.out' },
      '-=1'
    );

    // Floating animations for orbs
    gsap.to('.floating-orb-1', { y: -20, duration: 3, repeat: -1, yoyo: true, ease: 'power1.inOut' });
    gsap.to('.floating-orb-2', { y: -15, duration: 4, repeat: -1, yoyo: true, ease: 'power1.inOut', delay: 1 });
    gsap.to('.floating-orb-3', { y: -25, duration: 5, repeat: -1, yoyo: true, ease: 'power1.inOut', delay: 2 });
  }, []);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) contactElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-bg" />

      {/* Floating orbs */}
      <div className="floating-orb-1 absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="floating-orb-2 absolute bottom-1/3 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
      <div className="floating-orb-3 absolute top-1/2 left-1/2 w-32 h-32 bg-primary-glow/10 rounded-full blur-xl" />

      {/* Spline 3D Model */}
      <div className="spline-hero absolute top-0 right-0 w-full md:w-3/5 h-full opacity-0 hidden md:block">
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-0vxfBgqLk4q22te7iiHMrR93/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="pointer-events-none"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:max-w-2xl">
          <h1 className="hero-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-6 opacity-0">
            <span className="text-foreground">Hi, I'm a</span>
            <br />
            <span className="text-gradient-primary">Web Developer</span>
          </h1>

          <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl opacity-0">
            Creating immersive digital experiences with cutting-edge technology and beautiful design.
          </p>

          <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0">
            <Button size="lg" onClick={scrollToContact} className="neon-glow text-base sm:text-lg px-6 sm:px-8 py-3 hover:scale-105 transition-transform">
              Hire Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-base sm:text-lg px-6 sm:px-8 py-3 border-primary/30 hover:border-primary hover:scale-105 transition-all"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;