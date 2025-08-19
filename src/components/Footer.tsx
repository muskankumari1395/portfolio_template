import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, TwitterLogo, Heart } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Footer content animation
    gsap.fromTo('.footer-content', {
      opacity: 0,
      y: 60,
      filter: 'blur(5px)'
    }, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.footer-content',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });

    // Floating particles animation
    gsap.to('.footer-particle', {
      y: -20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.5
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: GithubLogo, href: '#', label: 'GitHub' },
    { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
    { icon: TwitterLogo, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="relative bg-background border-t border-border/20 overflow-hidden">
      {/* Background particles */}
      <div className="footer-particle absolute top-1/4 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
      <div className="footer-particle absolute bottom-1/3 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
      <div className="footer-particle absolute top-1/2 left-3/4 w-20 h-20 bg-primary-glow/10 rounded-full blur-lg" />
      
      <div className="footer-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-gradient-primary">
              Portfolio
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Creating exceptional digital experiences with modern technologies and innovative design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-medium text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-medium text-foreground">Connect</h4>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 glass-card flex items-center justify-center hover:scale-110 transition-all duration-300 icon-glow"
                  aria-label={social.label}
                >
                  <social.icon size={16} className="sm:size-[18px] text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2025 Portfolio. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;