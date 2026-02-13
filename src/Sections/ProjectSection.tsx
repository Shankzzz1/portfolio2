import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FolderOpen, ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';
import Goggin from "@/Images/Goggin.png"
import productivepals from "@/Images/productivepals.png"
import comsa from "@/Images/comsa.png"
import portfolio from "@/Images/portfolio.png"
import Bidweb from "@/Images/Bidweb.png"
import cashflow from "@/Images/cashflow.png"
import FadeInSection from "@/Sections/FadeInSection";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: any;
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
  "id": "1",
  "title": "Productive Pals",
  "description": "A collaborative Pomodoro timer that helps teams stay focused and productive together in real time.",
  "longDescription": "Productive Pals is a real-time collaborative Pomodoro application built with Socket.IO for synchronized timers, allowing friends, study groups, and teams to focus together. It includes features like shared focus sessions, task management, and productivity stats to encourage accountability and teamwork.",
  "image": productivepals,
  "technologies": ["React", "TypeScript", "Node.js", "Socket.IO", "Tailwind CSS", "Vite"],
  "category": "Full Stack",
  "status": "Completed",
  "featured": true,
  "links": {
    "live": "https://productivepals.vercel.app",
    "github": "https://github.com/Shankzzz1/Productive-Pals",
    "demo": "https://demo.productivepals.vercel.app"
  },
  "stats": {
    "stars": 50,
    "contributors": 1,
    "users": "200+"
  },
  "completedDate": "December 2025",
  "duration": "2 months (ongoing)"
},

{
  "id": "2",
  "title": "Goggins Journal",
  "description": "A digital journal inspired by David Goggins to track discipline, goals, and mental resilience.",
  "longDescription": "Goggins Journal is a self-improvement platform that enables users to log daily habits, track physical and mental goals, and build resilience inspired by David Goggins' philosophy. Built using a modern full-stack setup with rich UI, daily prompts, progress tracking, and motivational analytics.",
  "image": Goggin,
  "technologies": ["React", "TypeScript", "Django", "Tailwind CSS", "Vite", "PostgreSQL"],
  "category": "Full Stack",
  "status": "Completed",
  "featured": true,
  "links": {
    "live": "https://goggins-journal.vercel.app",
    "github": "https://github.com/Shankzzz1/Goggin-s-Journal",
    "demo": "https://demo.goggins-journal.vercel.app"
  },
  "stats": {
    "stars": 35,
    "contributors": 1,
    "users": "80+"
  },
  "completedDate": "August 2025",
  "duration": "2 months (ongoing)"
}
,

  {
  "id": "3",
  "title": "BidWeb",
  "description": "An online bidding platform enabling users to list and bid on products in real-time.",
  "longDescription": "BidWeb is a web-based auction platform where users can register, list items for auction, and place bids in real-time. The system handles user authentication, bid validation, auction timers, and winner selection. Designed to simulate competitive online bidding environments.",
  "image": Bidweb,
  "technologies": ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Socket.IO"],
  "category": "Full Stack",
  "status": "In Progress",
  "featured": true,
  "links": {
    "live": "https://bidweb.vercel.app",
    "github": "https://github.com/Shankzzz1/BidWeb",
    "demo": "https://bidweb.vercel.app"
  },
  "stats": {
    "stars": 25,
    "contributors": 1,
    "users": "150+"
  },
  "completedDate": "March 2024",
  "duration": "1.5 months"
},
  {
  "id": "4",
  "title": "COMSA Portal",
  "description": "A student-teacher interaction platform for material sharing and collaboration.",
  "longDescription": "Built using the MERN stack and Django, the COMSA Portal facilitates seamless interaction between students and teachers. It supports sharing study material, allocating projects, and collaborating in forums. SQLite is used for backend data handling.",
  "image": comsa,
  "technologies": ["React", "Node.js", "Django", "SQLite"],
  "category": "Full Stack",
  "status": "Completed",
  "featured": false,
  "links": {
    "live": "https://comsa-portal.vercel.app",
    "github": "https://github.com/Shankzzz1/COMSA_Portal",
    "demo": "https://comsa-portal.vercel.app"
  },
  "stats": {
    "stars": 50,
    "contributors": 2,
    "users": "100+"
  },
  "completedDate": "Jan 2024",
  "duration": "2 months"
},
  {
  "id": "5",
  "title": "Portfolio",
  "description": "Personal portfolio website showcasing my skills, projects, and contact info.",
  "longDescription": "A responsive and elegant personal portfolio built with the MERN stack. It includes sections for about, projects, skills, and contact. Tailwind CSS ensures consistent design and responsiveness across devices.",
  "image": portfolio,
  "technologies": ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
  "category": "Frontend",
  "status": "Completed",
  "featured": false,
  "links": {
    "live": "https://portfolio-shashank.vercel.app",
    "github": "https://github.com/Shankzzz1/Portfolio",
    "demo": "https://portfolio-shashank.vercel.app"
  },
  "stats": {
    "stars": 40,
    "contributors": 1,
    "users": "100+"
  },
  "completedDate": "April 2024",
  "duration": "1 month"
},
  {
  "id": "6",
  "title": "Cashflow",
  "description": "A finance tracking app to monitor expenses and get insights.",
  "longDescription": "Cashflow is a personal finance tracker that allows users to log income and expenses, visualize spending patterns through charts, and set savings goals. Built with the MERN stack and deployed on Render.",
  "image": cashflow,
  "technologies": ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
  "category": "Full Stack",
  "status": "Completed",
  "featured": false,
  "links": {
    "live": "https://cashflow-render.vercel.app",
    "github": "https://github.com/Shankzzz1/Cashflow-main",
    "demo": "https://cashflow-render.vercel.app"
  },
  "stats": {
    "stars": 30,
    "contributors": 1,
    "users": "200+"
  },
  "completedDate": "May 2024",
  "duration": "1 month"
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
        <FadeInSection className="p-6  rounded-xl shadow-md">
    <section id='projects' className="w-full max-w-7xl mx-auto p-6">
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
                    className="border-gray-600 text-black hover:bg-gray-800"
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
                    <Button variant="outline" size="sm" className="border-gray-600 text-black hover:bg-gray-800 hover:text-white flex-1" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" size="sm" className="border-gray-600 text-black hover:bg-gray-800 hover:text-white flex-1" asChild>
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
    </FadeInSection>
  );
}