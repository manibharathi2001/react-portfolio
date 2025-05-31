
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';

const Portfolio = () => {
  const { user } = useAuth();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates",
      image: "/placeholder.svg",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    "React", "TypeScript", "JavaScript", "Node.js", "Python",
    "UI/UX Design", "Figma", "Adobe XD", "HTML/CSS", "Tailwind CSS",
    "MongoDB", "PostgreSQL", "Firebase", "AWS", "Git"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome back, <span className="text-yellow-500">{user?.name}</span>! 🎉
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Here's your complete portfolio showcase
            </p>
          </div>

          {/* About Section */}
          <section id="about" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              About Me
            </h2>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                      UI/UX Designer & Developer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      I'm a passionate designer and developer with over 5 years of experience 
                      creating beautiful, functional, and user-centered digital experiences. 
                      I specialize in React development and modern UI/UX design principles.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <Mail className="w-4 h-4" />
                        <span>anish@example.com</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <Phone className="w-4 h-4" />
                        <span>+91 98765 43210</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span>Mumbai, India</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-yellow-400">
                      <img
                        src="/lovable-uploads/e9865199-85cc-4d64-9e1a-836941f19143.png"
                        alt="Anish Kumar Sinha"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Skills & Technologies
            </h2>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-3 justify-center">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-video bg-gradient-to-br from-yellow-400 to-orange-500 rounded-t-lg"></div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <a 
                          href={project.github}
                          className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm">Code</span>
                        </a>
                        <a 
                          href={project.live}
                          className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Get In Touch
            </h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I'm always interested in new opportunities and collaborations. 
                  Whether you have a project in mind or just want to chat about design and development, 
                  feel free to reach out!
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="mailto:anish@example.com"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email</span>
                  </a>
                  <a 
                    href="tel:+919876543210"
                    className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-yellow-400 hover:text-yellow-500 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Me</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
