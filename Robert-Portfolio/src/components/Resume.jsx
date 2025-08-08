import { Download, FileText, User, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const handleDownload = () => {
    // In a real application, this would download the actual resume PDF
    const link = document.createElement('a');
    link.href = './src/assets/Brian Robert Resume.pdf'; // This would be the actual PDF path
    link.download = 'Brian_ Robert_J_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resumeHighlights = [
    {
      icon: <User className="h-6 w-6" />,
      title: 'Profile',
      content: 'Front-End Developer specializing in React.js with full-stack aspirations'
    },
    
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Education',
      content: 'HTML5/JavaScript Bootcamp at Lamda Tech Softics '
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Certifications',
      content: 'HTML5, JavaScript, React.js certifications + ongoing learning'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-text-gradient bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my complete resume to learn more about my experience, 
            skills, and professional journey in web development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Download Card */}
          <Card className="mb-12 bg-hero-gradient text-white shadow-strong border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <FileText className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Professional Resume</h3>
              <p className=" mb-6 max-w-md mx-auto text-black">
                Get a detailed overview of my skills, experience, projects, and achievements 
                in a professionally formatted PDF document.
              </p>
              <Button 
                size="lg"
                onClick={handleDownload}
                className="bg-white text-primary hover:bg-white/90 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume PDF
              </Button>
            </CardContent>
          </Card>

          {/* Resume Highlights */}
          <div className="grid md:grid-cols-2 gap-6">
            {resumeHighlights.map((item, index) => (
              <Card 
                key={index}
                className="group bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 border-0"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="text-primary">
                        {item.icon}
                      </div>
                    </div>
                    <span className="group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Summary */}
          <Card className="mt-12 bg-skill-gradient border-primary/20 border">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Quick Summary</h3>
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;