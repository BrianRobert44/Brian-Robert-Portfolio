import { Calendar, MapPin, GraduationCap, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const timeline = [
    
    {
      year: '2020-21',
      title: 'SFS Matriculation Hr. Sec. School',
      description: 'Completed my School with 84% ',
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      year: '2021-2025',
      title: 'Sri vidya college of Engineering & Technology',
      description: 'Pursued Bachelors in Electronics and communication Engineering with a CGPA of 7.9',
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      year: '2024-25',
      title: 'Full-Stack Journey',
      description: 'Expanded skills in frontend & backend technologies, databases at Lamda Tech Softics',
      icon: <Code className="h-5 w-5" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-text-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate front-end developer with a strong foundation in modern web technologies. 
            Currently expanding my expertise into full-stack development while creating beautiful, 
            user-centric digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <Card className="p-6 bg-card-gradient shadow-soft border-0">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My development journey began at <strong className="text-primary">Lamda Tech Softics</strong>, 
                  where I completed an intensive HTML5 and JavaScript bootcamp. This foundation sparked my 
                  passion for creating dynamic, interactive web experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I've since specialized in React.js, building responsive applications with modern design principles. 
                 
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently, I'm expanding into full-stack development, learning backend technologies 
                  like Python, Django, and database management to become a well-rounded developer.
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Based in India</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                
               
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Learning Timeline</h3>
            {timeline.map((item, index) => (
              <Card 
                key={index} 
                className="p-4 bg-skill-gradient hover:shadow-medium transition-all duration-300 hover:scale-105 border-0 group"
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="text-primary">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;