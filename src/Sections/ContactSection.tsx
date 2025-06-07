import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Github, 
  Linkedin, 
  Twitter, 
  Globe, 
  Calendar,
  Download,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { useState } from 'react';
import FadeInSection from "@/Sections/FadeInSection";

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  timezone: string;
  availability: string;
}

interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
  username: string;
  followers?: string;
}

const contactInfo: ContactInfo = {
  email: 'shashankmgavale2004@gmail.com',
  phone: '+91 9834431768',
  location: 'Pune, India',
  timezone: '(GMT+5:30)',
  availability: 'Available for freelance & full-time opportunities'
};

const socialLinks: SocialLink[] = [
  {
    id: '1',
    name: 'GitHub',
    url: 'https://github.com/shankzzz1',
    icon: <Github className="w-5 h-5" />,
    username: '@shankzzz1',
    followers: '11'
  },
  {
    id: '2',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/shashank-gavale-041148261',
    icon: <Linkedin className="w-5 h-5" />,
    username: '',
    followers: '331'
  },
  {
    id: '3',
    name: 'Twitter',
    url: 'https://twitter.com/1_Shankzzz',
    icon: <Twitter className="w-5 h-5" />,
    username: '@1_Shankzzz',
    followers: '10'
  },
  {
    id: '4',
    name: 'Portfolio',
    url: 'https://shashankGavale.dev',
    icon: <Globe className="w-5 h-5" />,
    username: 'ShashankGavale.dev',
  }
];

const quickActions = [
  
  {
    id: '2',
    title: 'Download Resume',
    description: 'Get my latest CV (PDF)',
    icon: <Download className="w-5 h-5" />,
    url: '/resume.pdf',
    primary: false
  },
  {
    id: '3',
    title: 'View Portfolio',
    description: 'Explore my work samples',
    icon: <ExternalLink className="w-5 h-5" />,
    url: 'https://portfolio.johndoe.dev',
    primary: false
  }
];

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    });
  };

  return (
        <FadeInSection className="p-6  rounded-xl shadow-md">
    <section id='contact' className="w-full max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <MessageCircle className="w-8 h-8 text-gray-400" />
          Let's Connect
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg">
          I'm always interested in new opportunities and exciting projects. Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Primary Contact */}
          <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-3">
                <Mail className="w-6 h-6 text-gray-400" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <p className="text-gray-400 text-sm">{contactInfo.email}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(contactInfo.email, 'email')}
                  className="text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-gray-300 font-medium">Phone</p>
                    <p className="text-gray-400 text-sm">{contactInfo.phone}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                  className="text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  {copiedPhone ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>

              {/* Location & Timezone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-gray-300 font-medium">Location</p>
                    <p className="text-gray-400 text-sm">{contactInfo.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-gray-300 font-medium">Timezone</p>
                    <p className="text-gray-400 text-sm">{contactInfo.timezone}</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="p-4 bg-green-900/20 border border-green-800 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-green-300 font-medium">Currently Available</p>
                </div>
                <p className="text-gray-400 text-sm">{contactInfo.availability}</p>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl text-white">Social & Professional Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-gray-400 group-hover:text-white transition-colors">
                        {social.icon}
                      </div>
                      <div>
                        <p className="text-gray-300 font-medium group-hover:text-white transition-colors">
                          {social.name}
                        </p>
                        <p className="text-gray-400 text-sm">{social.username}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {social.followers && (
                        <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                          {social.followers}
                        </Badge>
                      )}
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions Sidebar */}
        <div className="space-y-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-lg text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickActions.map((action) => (
                <a
                  key={action.id}
                  href={action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant={action.primary ? "default" : "outline"}
                    className={`w-full justify-start h-auto p-4 ${
                      action.primary 
                        ? "bg-gray-700 hover:bg-gray-600 " 
                        : "border-gray-600 text-black hover:bg-gray-800 hover:text-white "
                    }`}
                  >
                    <div className="flex items-center gap-3 w-full">
                      {action.icon}
                      <div className="text-left">
                        <p className="font-medium">{action.title}</p>
                        <p className="text-xs opacity-75">{action.description}</p>
                      </div>
                    </div>
                  </Button>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Response Time */}
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-white font-medium">Quick Response</h3>
                <p className="text-gray-400 text-sm">
                  I typically respond to emails within 24 hours
                </p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 text-sm font-medium">Active Now</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preferred Contact Method */}
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <div className="text-center space-y-3">
                <Mail className="w-8 h-8 text-gray-400 mx-auto" />
                <h3 className="text-white font-medium">Preferred Contact</h3>
                <p className="text-gray-400 text-sm">
                  Email is the best way to reach me for detailed discussions
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gray-600 text-black hover:bg-gray-800 hover:text-white"
                  asChild
                >
                  <a href={`mailto:${contactInfo.email}`}>
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}