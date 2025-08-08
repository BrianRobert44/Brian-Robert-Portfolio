import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Men Style Hub',
      description: 'A modern men\'s clothing eCommerce platform with sleek design, product filtering, shopping cart, and secure checkout. Built with React and responsive design principles.',
      image: './src/assets/Screenshot 2025-07-18 151236.png',
      technologies: [ 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://menstylehub04.netlify.app/',
      githubUrl: 'https://github.com/BrianRobert44/Men-Style-Hub-Ecommerce',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio website showcasing modern design principles, smooth animations, responsive layout, and clean code architecture. Built with React and Tailwind CSS.',
      image: './src/assets/Screenshot 2025-07-29 170538.png',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Shadcn'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-text-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web development 
            technologies and user-centered design principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group overflow-hidden bg-card-gradient shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 border-0 ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="text-xs bg-skill-gradient text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <Button 
                    size="sm" 
                    className="flex items-center space-x-2 bg-primary hover:bg-primary/90"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center space-x-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;