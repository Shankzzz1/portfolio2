import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              className="text-white font-bold text-xl hover:text-gray-300 transition-colors"
            >
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#education"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Education
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-900"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-900"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-900"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
            <Button className="bg-white text-black hover:bg-gray-200 ml-4">
              Hire Me
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white hover:bg-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-md"
              >
                About
              </a>

              {/* Projects Submenu */}
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">Projects</div>
                <div className="pl-4 space-y-1">
                  <a
                    href="#web-apps"
                    className="block px-3 py-1 text-sm text-gray-400 hover:text-gray-300 hover:bg-gray-900 rounded-md"
                  >
                    Web Applications
                  </a>
                  <a
                    href="#mobile"
                    className="block px-3 py-1 text-sm text-gray-400 hover:text-gray-300 hover:bg-gray-900 rounded-md"
                  >
                    Mobile Apps
                  </a>
                  <a
                    href="#open-source"
                    className="block px-3 py-1 text-sm text-gray-400 hover:text-gray-300 hover:bg-gray-900 rounded-md"
                  >
                    Open Source
                  </a>
                </div>
              </div>

              {/* Services Submenu */}
              <div className="px-3 py-2">
                <div className="text-gray-300 font-medium mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  <a
                    href="#frontend"
                    className="block px-3 py-1 text-sm text-gray-400 hover:text-gray-300 hover:bg-gray-900 rounded-md"
                  >
                    Frontend Development
                  </a>
                  <a
                    href="#backend"
                    className="block px-3 py-1 text-sm text-gray-400 hover:text-gray-300 hover:bg-gray-900 rounded-md"
                  >
                    Backend Development
                  </a>
                  <a
                    href="#consulting"
                    className="block px-3 py-1 text-sm text-gray-400 hover:text-gray-300 hover:bg-gray-900 rounded-md"
                  >
                    Consulting
                  </a>
                </div>
              </div>

              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-md"
              >
                Contact
              </a>

              <div className="flex items-center space-x-2 px-3 py-2">
                {/* GitHub */}
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-900"
                >
                  <a
                    href="https://github.com/Shankzzz1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </Button>

                {/* LinkedIn */}
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-900"
                >
                  <a
                    href="https://www.linkedin.com/in/shashank-gavale-041148261"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>

                {/* Email */}
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-900"
                >
                  <a href="mailto:shashankmgavale2004@gmail.com">
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              <div className="px-3 py-2">
                <Button className="w-full bg-white text-black hover:bg-gray-200">
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
