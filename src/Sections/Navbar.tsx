import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

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
              Shankzzz
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </a>
            <a href="#education" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Education
            </a>
            <a href="#skills" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-900">
                <a href="https://github.com/Shankzzz1" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-900">
                <a href="https://www.linkedin.com/in/shashank-gavale-041148261" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-900">
                <a href="mailto:shashankmgavale2004@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <a href="#contact">
            <Button className="bg-white text-black hover:bg-gray-200 ml-4">
              Hire Me
            </Button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white hover:bg-gray-900"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-3 pt-4 pb-3 space-y-2 bg-black">
              {/* Navigation Links */}
              {[
                { href: "#about", label: "About" },
                { href: "#education", label: "Education" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-md text-sm font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {/* Social Icons */}
              <div className="flex items-center space-x-2 mt-4">
                <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-900">
                  <a href="https://github.com/Shankzzz1" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-900">
                  <a href="https://www.linkedin.com/in/shashank-gavale-041148261" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-900">
                  <a href="mailto:shashankmgavale2004@gmail.com">
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
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
