import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Front-End Developer',
    'React Enthusiast', 
    'Full-Stack Learner',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
              
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-text-gradient bg-clip-text text-transparent bg-[length:200%_auto] animate-text-gradient">
              Brian Robert J.
            </span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold mb-8 h-16 flex items-center justify-center">
            <span className="text-muted-foreground">I'm a </span>
            <span className="ml-2 text-primary font-bold transition-all duration-500 transform">
              {roles[currentRole]}
            </span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web experiences. 
            Currently expanding my skills from front-end to full-stack development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:shadow-strong hover:scale-105"
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-18 left-1/2 transform -translate-x-1/2  animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="rounded-full hover:bg-primary/10"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-16 h-16 bg-primary-glow/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/6 w-8 h-8 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;