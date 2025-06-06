import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Portfolio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate full-stack developer creating digital solutions that make a difference. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">
                Projects
              </a>
              <a href="#services" className="text-gray-400 hover:text-white text-sm transition-colors">
                Services
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-900 p-2">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-900 p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-900 p-2">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-gray-400 text-sm">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Portfolio. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of coffee.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;