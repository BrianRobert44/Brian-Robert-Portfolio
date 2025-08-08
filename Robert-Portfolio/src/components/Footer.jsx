import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-text-gradient bg-clip-text text-transparent">
              Brian Robert J.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Front-End Developer passionate about creating beautiful, 
              functional web experiences. Always learning, always building.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Let's Connect</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              robert442004@email.com<br />
              Available for freelance projects
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground flex items-center">
            © {currentYear} Brian Robert J. Made with React.js and TailwindCSS
          </p>
          <Button 
            variant="ghost" 
            onClick={scrollToTop}
            className="text-sm hover:text-primary transition-colors duration-300"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;