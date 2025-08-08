import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-End',
      skills: [
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 88, icon: '⚡' },
        { name: 'React.js', level: 85, icon: '⚛️' },
        { name: 'Tailwind CSS', level: 90, icon: '💨' }
      ]
    },
    {
      title: 'Back-End',
      skills: [
        { name: 'Django', level: 65, icon: '🐍' },
        { name: 'Python', level: 75, icon: '🐍' },
        { name: 'MySQL', level: 70, icon: '🗄️' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Vercel', level: 85, icon: '▲' },
        { name: 'Git', level: 85, icon: '📝' },
        { name: 'GitHub', level: 88, icon: '🐙' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-text-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications, 
            from beautiful user interfaces to robust backend systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="p-6 bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 border-0 group"
            >
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6 text-center text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000 ease-out transform origin-left"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `skillProgress 1.5s ease-out ${skillIndex * 0.1}s both`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['TypeScript', 'MongoDB', 'AWS'].map((tech, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-skill-gradient rounded-full text-sm font-medium text-primary border border-primary/20 hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;