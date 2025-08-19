import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Hide preloader after animation
        gsap.to('.preloader', {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: 'power2.out',
          onComplete: () => {
            onComplete();
          }
        });
      }
    });

    // Animate progress bar
    tl.to({}, {
      duration: 2.5,
      ease: 'power2.out',
      onUpdate: function() {
        const progressValue = Math.round(this.progress() * 100);
        setProgress(progressValue);
        
        // Update progress bar width
        gsap.to('.progress-fill', {
          width: `${progressValue}%`,
          duration: 0.1,
          ease: 'none'
        });
      }
    });

    // Animate loading text
    tl.from('.loading-text', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, 0);

    // Animate logo
    tl.from('.loading-logo', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'back.out(1.7)'
    }, 0.2);

  }, [onComplete]);

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-bg opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl float-animation" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl float-animation-delayed" />
      
      <div className="relative z-10 text-center">
        {/* Logo/Name */}
        <div className="loading-logo mb-8">
          <h1 className="text-6xl md:text-8xl font-light text-gradient-primary mb-4">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground">Web Developer</p>
        </div>
        
        {/* Progress bar */}
        <div className="w-80 max-w-sm mx-auto mb-6">
          <div className="relative h-1 bg-muted rounded-full overflow-hidden">
            <div className="progress-fill absolute left-0 top-0 h-full loading-bar rounded-full" 
                 style={{ width: '0%' }} />
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Loading... {progress}%
          </div>
        </div>
        
        {/* Loading text */}
        <div className="loading-text">
          <p className="text-primary font-medium">Preparing experience</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;