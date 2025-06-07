import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import FadeInSection from "@/Sections/FadeInSection";

interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

const experienceData: Experience[] = [
  
  {
    "id": "1",
    "position": "Full Stack Developer Intern",
    "company": "Intellicuria Private Limited",
    "location": "Remote",
    "startDate": "Sept 2024",
    "endDate": "Present",
    "type": "Internship",
    "description": "Working on WhatsApp chatbot development and backend systems to support healthcare services.",
    "responsibilities": [
      "Developed WhatsApp Chatbot to handle patient registration and manage medical history",
      "Contributed to backend development using TypeScript and Node.js"
    ],
    "achievements": ['Successfully completed 6-month internship program',
      'Contributed to 3 major client projects',
      'Received excellent performance review',
      'Quickly adapted to professional development environment'],
    "technologies": ["TypeScript", "Node.js", "WhatsApp API"]
  },
  {
    "id": "2",
    "position": "Intern",
    "company": "Chaya Enterprises",
    "location": "Nashik, India",
    "startDate": "June 2022",
    "endDate": "August 2022",
    "type": "Internship",
    "description": "Gained hands-on experience in backend development and team collaboration.",
    "responsibilities": [
      "Developed backend services using Django and Django Rest Framework",
      "Assisted in developing interactive web features",
      "Worked on improving backend performance"
    ],
    "achievements": [],
    "technologies": ["Django", "Django Rest Framework", "Python"]
  }
];



export default function ExperienceSection() {
  return (
        <FadeInSection className="p-6  rounded-xl shadow-md">
    <section className="w-full max-w-5xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-gray-400" />
          Work Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700 hidden md:block"></div>
        
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-2 top-6 w-4 h-4 bg-gray-600 rounded-full border-4 border-gray-900 hidden md:block"></div>
              
              <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20 md:ml-12">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white mb-2">
                        {exp.position}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h3 className="text-lg font-semibold text-gray-300">{exp.company}</h3>
                        <Badge variant="outline" className="border-gray-600 text-gray-400 w-fit">
                          {exp.type}
                        </Badge>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                    
                    <div className="flex flex-col gap-2 lg:items-end">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Responsibilities */}
                  <div>
                    <h4 className="text-gray-300 font-medium mb-3 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-gray-300 font-medium mb-3 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-gray-300 font-medium mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-200 hover:bg-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}