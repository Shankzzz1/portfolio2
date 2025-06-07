import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Globe, Smartphone, Server, GitBranch } from 'lucide-react';
import FadeInSection from "@/Sections/FadeInSection";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsWithLevels: Skill[] = [
  { name: 'TypeScript', level: 95, category: 'Frontend' },
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Django', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'Python', level: 82, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Database' },
  { name: 'MongoDB', level: 75, category: 'Database' },
  { name: 'AWS', level: 78, category: 'DevOps' }
];

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: <Globe className="w-5 h-5" />,
    skills: [
      'React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 
       'HTML5', 'CSS3', 'JavaScript ES6+', 'Vite', 'Webpack'
    ]
  },
  {
    title: 'Backend Development', 
    icon: <Server className="w-5 h-5" />,
    skills: [
      'Node.js', 'Express.js', 'Python', 'Django', 'FastAPI', 
      'REST APIs', 'GraphQL', 'Socket.io'
    ]
  },
  {
    title: 'Database & Storage',
    icon: <Database className="w-5 h-5" />,
    skills: [
      'PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 
      'Mongoose', 'SQL', 'NoSQL'
    ]
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone className="w-5 h-5" />,
    skills: [
      'Android Development'
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: <GitBranch className="w-5 h-5" />,
    skills: [
      'Git', 'GitHub Actions', 'AWS', 'Vercel', 
       'Linux', 'Nginx', 'Testing'
    ]
  },
  {
    title: 'Programming Languages',
    icon: <Code className="w-5 h-5" />,
    skills: [
      'TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 
       'PHP', 'C', 
    ]
  }
];

export default function SkillsSection() {
  return (
        <FadeInSection className="p-6  rounded-xl shadow-md">
    <section id='skills' className="w-full max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Code className="w-8 h-8 text-gray-400" />
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
      </div>

      {/* Skill Proficiency Section */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-200 mb-6">Core Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsWithLevels.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              <Progress 
                value={skill.level} 
                className="h-2 bg-gray-800"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Skills by Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-white flex items-center gap-3">
                <div className="text-gray-400">
                  {category.icon}
                </div>
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Skills Tags */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-200 mb-6">Additional Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {[
            'Agile', 'Scrum', 'TDD', 'Clean Code', 'Design Patterns',
            'Responsive Design', 'Performance Optimization', 'SEO',
            'Accessibility', 'Web Security', 'API Design', 'Code Review'
          ].map((skill, index) => (
            <Badge 
              key={index}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 transition-all duration-200 cursor-default px-3 py-1"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
    </FadeInSection>
  );
}