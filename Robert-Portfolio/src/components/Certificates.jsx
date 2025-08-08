import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Certificates = () => {
  const certificates = [
    {
      title: 'HTML5 Certification',
      issuer: 'LetsUpgrade',
      date: '2024',
      description: 'Comprehensive certification in HTML5 fundamentals, semantic markup, forms, multimedia integration, and modern web standards.',
      skills: ['HTML5', 'Semantic Web', 'Accessibility', 'Web Standards'],
      credentialId: 'LUEHTMLSEP1241609',
      verified: true
    },
    {
      title: 'JavaScript Certification',
      issuer: 'LetsUpgrade', 
      date: '2025',
      description: 'Advanced JavaScript certification covering ES6+, DOM manipulation, asynchronous programming, and modern JavaScript frameworks.',
      skills: ['JavaScript ES6+', 'DOM Manipulation', 'Async/Await', 'API Integration'],
      credentialId: 'LUEJSJAN1251937',
      verified: true
    },
    {
      title: 'React.js Certification',
      issuer: 'simpli Learn | skillup',
      date: '2025',
      description: 'Specialized React.js certification focusing on component architecture, state management, hooks, and modern React patterns.',
      skills: ['React.js', 'Component Architecture', 'Hooks', 'State Management'],
      credentialId: '7856545',
      verified: true
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">Certificates</span> & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses that validate my expertise 
            and commitment to continuous learning in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="group bg-card-gradient shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 border-0 relative overflow-hidden"
            >
              {cert.verified && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-green-500 text-white">
                    <Award className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 mb-2">
                      {cert.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="font-medium">{cert.issuer}</span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-xs bg-skill-gradient text-primary border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">ID: </span>
                    <span className="font-mono">{cert.credentialId}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary-foreground hover:bg-primary"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Verify
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificate Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Certificates Earned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1+</div>
            <div className="text-sm text-muted-foreground">Years Learning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Skills Validated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Commitment</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;