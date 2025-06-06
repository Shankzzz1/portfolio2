import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FolderOpen, ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  status: 'Completed' | 'In Progress' | 'Maintenance';
  featured: boolean;
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  stats?: {
    stars?: number;
    contributors?: number;
    users?: string;
  };
  completedDate: string;
  duration: string;
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and an admin dashboard for inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe API', 'Tailwind CSS', 'AWS'],
    category: 'Full Stack',
    status: 'Completed',
    featured: true,
    links: {
      live: 'https://ecommerce-demo.com',
      github: 'https://github.com/username/ecommerce-platform',
      demo: 'https://demo.ecommerce-platform.com'
    },
    stats: {
      stars: 124,
      contributors: 3,
      users: '1.2k+'
    },
    completedDate: 'March 2024',
    duration: '4 months'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, team workspaces, and project tracking.',
    longDescription: 'A modern task management solution designed for teams. Includes features like drag-and-drop task boards, real-time collaboration, time tracking, file attachments, and comprehensive project analytics.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'MongoDB', 'Vercel'],
    category: 'Web App',
    status: 'Completed',
    featured: true,
    links: {
      live: 'https://taskflow-app.com',
      github: 'https://github.com/username/task-manager'
    },
    stats: {
      stars: 89,
      contributors: 2,
      users: '800+'
    },
    completedDate: 'January 2024',
    duration: '3 months'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
    longDescription: 'A comprehensive weather dashboard featuring current conditions, 7-day forecasts, weather maps, severe weather alerts, and historical data visualization. Built with performance and user experience in mind.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop',
    technologies: ['React', 'JavaScript', 'OpenWeather API', 'Chart.js', 'CSS3'],
    category: 'Frontend',
    status: 'Maintenance',
    featured: false,
    links: {
      live: 'https://weather-dash.netlify.app',
      github: 'https://github.com/username/weather-dashboard'
    },
    stats: {
      stars: 45,
      users: '500+'
    },
    completedDate: 'November 2023',
    duration: '2 months'
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics with data visualization and automated reporting.',
    longDescription: 'A powerful analytics platform that aggregates data from multiple social media platforms. Features include customizable dashboards, automated reports, competitor analysis, and AI-powered insights.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
    technologies: ['Vue.js', 'Python', 'Django', 'D3.js', 'PostgreSQL', 'Docker'],
    category: 'Full Stack',
    status: 'In Progress',
    featured: true,
    links: {
      github: 'https://github.com/username/social-analytics',
      demo: 'https://analytics-demo.com'
    },
    stats: {
      stars: 67,
      contributors: 4
    },
    completedDate: 'Expected May 2024',
    duration: '6 months'
  },
  {
    id: '5',
    title: 'Mobile Fitness Tracker',
    description: 'Cross-platform mobile app for fitness tracking with workout plans and progress visualization.',
    longDescription: 'A comprehensive fitness tracking application built with React Native. Features include workout logging, progress tracking, custom workout plans, social features, and integration with wearable devices.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop',
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'TypeScript'],
    category: 'Mobile',
    status: 'Completed',
    featured: false,
    links: {
      github: 'https://github.com/username/fitness-tracker',
      demo: 'https://fitness-app-demo.com'
    },
    stats: {
      stars: 156,
      users: '2k+'
    },
    completedDate: 'September 2023',
    duration: '5 months'
  },
  {
    id: '6',
    title: 'Code Snippet Manager',
    description: 'Developer tool for organizing and sharing code snippets with syntax highlighting and tagging.',
    longDescription: 'A productivity tool for developers to store, organize, and share code snippets. Features include syntax highlighting for 50+ languages, tagging system, search functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Prism.js'],
    category: 'Web App',
    status: 'Completed',
    featured: false,
    links: {
      live: 'https://snippetbox.dev',
      github: 'https://github.com/username/snippet-manager'
    },
    stats: {
      stars: 78,
      users: '600+'
    },
    completedDate: 'August 2023',
    duration: '3 months'
  }
];

const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-900 text-green-300 border-green-700';
    case 'In Progress':
      return 'bg-blue-900 text-blue-300 border-blue-700';
    case 'Maintenance':
      return 'bg-yellow-900 text-yellow-300 border-yellow-700';
    default:
      return 'bg-gray-800 text-gray-300 border-gray-600';
  }
};

export default function ProjectsSection() {
  const featuredProjects = projectsData.filter(project => project.featured);
  const otherProjects = projectsData.filter(project => !project.featured);

  return (
    <section className="w-full max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <FolderOpen className="w-8 h-8 text-gray-400" />
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
      </div>

      {/* Featured Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {featuredProjects.map((project) => (
          <Card key={project.id} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20 overflow-hidden">
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className={`${getStatusColor(project.status)} font-medium`}>
                  {project.status}
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-gray-800/80 text-gray-200">
                  {project.category}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-white mb-2">{project.title}</CardTitle>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.longDescription}</p>
              
              {/* Project Stats */}
              {project.stats && (
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  {project.stats.stars && (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stats.stars}</span>
                    </div>
                  )}
                  {project.stats.contributors && (
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{project.stats.contributors}</span>
                    </div>
                  )}
                  {project.stats.users && (
                    <div className="flex items-center gap-1">
                      <span className="text-xs">👥</span>
                      <span>{project.stats.users} users</span>
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{project.completedDate}</span>
                </div>
                <span>•</span>
                <span>{project.duration}</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Technologies */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.links.live && (
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="bg-gray-700 hover:bg-gray-600 text-white"
                    asChild
                  >
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.links.github && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                )}
                {project.links.demo && !project.links.live && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Other Projects */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-6">Other Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card key={project.id} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20 overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Badge className={`${getStatusColor(project.status)} text-xs`}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-200 text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="bg-gray-800 text-gray-200 text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  {project.links.live && (
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800 flex-1" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800 flex-1" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}