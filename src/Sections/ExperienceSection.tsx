import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

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
    id: '1',
    position: 'Full Stack Developer',
    company: 'Intellicuria Pvt. Ltd.',
    location: 'Remote',
    startDate: 'Jan 2023',
    endDate: 'Present',
    type: 'Internship',
    description: 'Leading development of scalable web applications and mentoring junior developers in modern React and Node.js technologies.',
    responsibilities: [
      'Architected and developed 5+ high-performance web applications using React, TypeScript, and Node.js',
      'Led a team of 4 developers, conducting code reviews and establishing best practices',
      'Collaborated with product managers and designers to deliver user-centric solutions',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Optimized application performance resulting in 40% faster load times'
    ],
    achievements: [
      'Promoted to Senior Developer within 18 months',
      'Delivered projects 25% faster than estimated timelines',
      'Reduced bug reports by 50% through comprehensive testing strategies',
      'Mentored 6 junior developers with 100% retention rate'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL']
  },
  {
    id: '2',
    position: 'Full Stack Developer',
    company: 'InnovateLab',
    location: 'Austin, TX',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    type: 'Full-time',
    description: 'Developed and maintained multiple client projects while contributing to internal tools and establishing development workflows.',
    responsibilities: [
      'Built responsive web applications for 10+ clients across various industries',
      'Developed RESTful APIs and integrated third-party services',
      'Collaborated in agile development cycles with cross-functional teams',
      'Maintained and enhanced existing codebases with modern practices',
      'Participated in client meetings to gather requirements and provide technical insights'
    ],
    achievements: [
      'Successfully delivered 15+ projects with 98% client satisfaction',
      'Reduced development time by 30% through reusable component libraries',
      'Implemented automated testing increasing code coverage to 85%',
      'Won "Developer of the Month" award 3 times'
    ],
    technologies: ['React', 'Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Jest', 'Git']
  },
  {
    id: '3',
    position: 'Frontend Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    startDate: 'Feb 2020',
    endDate: 'May 2021',
    type: 'Contract',
    description: 'Specialized in creating modern, responsive user interfaces and improving user experience across multiple products.',
    responsibilities: [
      'Developed pixel-perfect UI components using React and modern CSS',
      'Collaborated with UX/UI designers to implement design systems',
      'Optimized applications for performance and accessibility',
      'Integrated frontend applications with backend APIs',
      'Conducted user testing sessions and implemented feedback'
    ],
    achievements: [
      'Improved user engagement by 45% through UI/UX enhancements',
      'Built a component library used across 5 different products',
      'Achieved 100% accessibility compliance (WCAG 2.1)',
      'Reduced bounce rate by 35% through performance optimizations'
    ],
    technologies: ['React', 'JavaScript', 'SCSS', 'Webpack', 'REST APIs', 'Figma']
  },
  {
    id: '4',
    position: 'Junior Web Developer',
    company: 'WebSolutions Inc',
    location: 'New York, NY',
    startDate: 'Aug 2019',
    endDate: 'Jan 2020',
    type: 'Internship',
    description: 'Started my professional journey learning modern web development practices and contributing to real-world projects.',
    responsibilities: [
      'Assisted in developing responsive websites using HTML, CSS, and JavaScript',
      'Participated in daily standups and sprint planning meetings',
      'Fixed bugs and implemented minor features under senior developer guidance',
      'Learned version control with Git and collaborative development practices',
      'Contributed to documentation and code maintenance tasks'
    ],
    achievements: [
      'Successfully completed 6-month internship program',
      'Contributed to 3 major client projects',
      'Received excellent performance review and job offer',
      'Quickly adapted to professional development environment'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Git']
  }
];

export default function ExperienceSection() {
  return (
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
          {experienceData.map((exp, index) => (
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
  );
}