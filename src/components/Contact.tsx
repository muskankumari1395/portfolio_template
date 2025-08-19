import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Section animation
    gsap.fromTo('.contact-section', {
      opacity: 0,
      y: 60
    }, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    // Form inputs animation with stagger
    gsap.fromTo('.contact-input', {
      opacity: 0,
      x: -30
    }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });

    // Social icons animation
    gsap.fromTo('.social-icon', {
      opacity: 0,
      scale: 0.8
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'back.out(1.7)',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.social-icons',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add submit animation
    gsap.to('.submit-button', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    });

    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: GithubLogo, href: '#', label: 'GitHub' },
    { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
    { icon: TwitterLogo, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="contact-section py-24 bg-background-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
            <span className="text-foreground">Get In</span>
            <span className="text-gradient-primary"> Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Contact Form */}
          <div className="contact-form space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="contact-input">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-input border-input-border focus:border-input-focus transition-colors h-12"
                />
              </div>
              
              <div className="contact-input">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-input border-input-border focus:border-input-focus transition-colors h-12"
                />
              </div>
              
              <div className="contact-input">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-input border-input-border focus:border-input-focus transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="submit-button w-full neon-glow hover:scale-105 transition-transform text-base sm:text-lg py-3"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-medium text-foreground mb-6">Let's Connect</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and design.
              </p>
              
              {/* Social Icons */}
              <div className="social-icons flex gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon w-10 h-10 sm:w-12 sm:h-12 glass-card flex items-center justify-center hover:scale-110 transition-all duration-300 icon-glow"
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="sm:size-5 text-primary" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8">
              <h4 className="text-base sm:text-lg font-medium text-foreground mb-4">Quick Response</h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                I typically respond to messages within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;