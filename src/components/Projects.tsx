import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowSquareOut, GithubLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  useEffect(() => {
    // Title animation
    gsap.fromTo('.projects-title', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.projects-title',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    // Project cards animation with stagger
    gsap.fromTo('.project-card', {
      opacity: 0,
      y: 60,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      image: '/placeholder.svg',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and intuitive design.',
      image: '/placeholder.svg',
      techStack: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with interactive charts and real-time analytics.',
      image: '/placeholder.svg',
      techStack: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media App',
      description: 'Modern social platform with real-time messaging and content sharing.',
      image: '/placeholder.svg',
      techStack: ['Next.js', 'GraphQL', 'Prisma', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="projects-title text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
            <span className="text-foreground">Featured</span>
            <span className="text-gradient-primary"> Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card glass-card p-4 sm:p-6 group hover:scale-[1.02] transition-all duration-300 opacity-0"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6 bg-muted/50 h-40 sm:h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 sm:gap-4 pt-4">
                  <Button 
                    size="sm" 
                    className="neon-glow flex items-center gap-2"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ArrowSquareOut size={16} weight="light" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 border-primary/30 hover:border-primary"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <GithubLogo size={16} weight="light" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:border-primary hover:scale-105 transition-all text-base sm:text-lg px-6 sm:px-8 py-3"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;