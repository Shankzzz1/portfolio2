import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, Linkedin, Mail, User, Code, Coffee, MapPin } from 'lucide-react';

// Shared Background Component
const PortfolioBackground = ({ children }) => {
  return (
    <div className="relative">
      {/* Fixed Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Floating particles */}
        <div className="absolute w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{
          top: '20%',
          left: '10%',
          animationDelay: '0s',
          animationDuration: '3s'
        }}></div>
        <div className="absolute w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{
          top: '60%',
          left: '80%',
          animationDelay: '1s',
          animationDuration: '4s'
        }}></div>
        <div className="absolute w-3 h-3 bg-gray-700 rounded-full animate-bounce" style={{
          top: '80%',
          left: '20%',
          animationDelay: '2s',
          animationDuration: '5s'
        }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce" style={{
          top: '30%',
          left: '70%',
          animationDelay: '0.5s',
          animationDuration: '3.5s'
        }}></div>
        <div className="absolute w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{
          top: '50%',
          left: '90%',
          animationDelay: '1.5s',
          animationDuration: '4.5s'
        }}></div>
        <div className="absolute w-1 h-1 bg-gray-600 rounded-full animate-bounce" style={{
          top: '10%',
          left: '30%',
          animationDelay: '2.5s',
          animationDuration: '3.8s'
        }}></div>
        <div className="absolute w-2.5 h-2.5 bg-gray-700 rounded-full animate-bounce" style={{
          top: '40%',
          left: '5%',
          animationDelay: '0.8s',
          animationDuration: '4.2s'
        }}></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(156, 163, 175, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(156, 163, 175, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 bg-gray-950">
        {children}
      </div>

      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};

// Welcome Section Component


// About Section Component
const AboutSection = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 
    'PostgreSQL', 'AWS', 'Docker', 'Git', 'Next.js'
  ];

  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '25+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Coffee Cups', value: '∞' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2 mb-6">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300 text-sm">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Passionate Developer &
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"> Problem Solver</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">My Journey</h3>
                </div>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm a passionate full-stack developer with over 3 years of experience creating 
                    digital solutions that make a difference. My journey began with curiosity about 
                    how things work behind the scenes, and it has evolved into a love for crafting 
                    elegant, efficient code.
                  </p>
                  <p>
                    I specialize in modern web technologies, with expertise in React, TypeScript, 
                    and Node.js. I believe in writing clean, maintainable code and creating 
                    user experiences that are both beautiful and functional.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing 
                    to open source projects, or enjoying a good cup of coffee while planning my next project.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location & Contact */}
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Based in San Francisco, CA</span>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-400">Available for work</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats & Skills */}
          <div className="space-y-8">
            {/* Stats */}
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">By the Numbers</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Technologies I Work With</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700 px-3 py-1 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun Fact */}
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <p className="text-gray-300 text-sm">
                    "Code is like humor. When you have to explain it, it's bad." - Cory House
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Portfolio Componen

export default PortfolioBackground;