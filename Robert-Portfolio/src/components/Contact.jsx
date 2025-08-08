import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name.",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Validation Error", 
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter a message.",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'robert442004@gmail.com',
      href: 'robert442004@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone', 
      value: '+91 8825887511',
      href: 'tel:+918825887511'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      href: 'https://github.com/BrianRobert44',
      username: 'BrianRobert44'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/brian-robert-931819290/',
      username: 'Brian Robert J'
    },
    
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-text-gradient bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start a project or just want to chat about web development? 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card-gradient shadow-soft border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold flex items-center space-x-2">
                <Send className="h-6 w-6 text-primary" />
                <span>Send Me a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-background border-border focus:border-primary resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 shadow-medium hover:shadow-strong transition-all duration-300"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-card-gradient shadow-soft border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-skill-gradient transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.label}</div>
                      <div className="text-sm text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card-gradient shadow-soft border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Connect on Social</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-skill-gradient transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="text-primary">
                        {social.icon}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{social.label}</div>
                      <div className="text-sm text-muted-foreground">{social.username}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="bg-skill-gradient border-primary/20 border">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground mb-2">Quick Response Promise</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond to messages within 24 hours. 
                  Looking forward to hearing from you!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;