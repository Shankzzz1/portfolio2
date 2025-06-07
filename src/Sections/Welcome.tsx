import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profile from "@/Images/profile.jpg"
import FadeInSection from "@/Sections/FadeInSection";

const WelcomePage = () => {
  return (
    <FadeInSection className="p-6  rounded-xl shadow-md">
    <div id='home' className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 text-left">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Hi, I'm{' '}
                  <br/>
                  <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                    Shashank Gavale
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-400 font-light">
                  Full Stack Developer
                </p>
                <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                  I create exceptional digital experiences through clean code, 
                  innovative solutions, and user-centered design.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href='#projects'>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-600 bg-white text-black hover:bg-gray-800 hover:text-white transition-all duration-300 "
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                </a>
                <a href="/resume.pdf"
                download
                >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-600 text-black hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  Download CV
                </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/Shankzzz1" 
                  className="text-gray-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/shashank-gavale-041148261" 
                  className="text-gray-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:shashankmgavale2004@gmail.com" 
                  className="text-gray-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Right Content - Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl transform rotate-6 opacity-20"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl transform rotate-3 opacity-30"></div>
                
                {/* Photo container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl">
                  {/* Placeholder for photo - replace with your actual photo */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                        <img src={profile}/>
                      <p className="text-gray-500 text-sm">Your Photo Here</p>
                    </div>
                  </div>
                  
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </FadeInSection>
  );
};

export default WelcomePage;