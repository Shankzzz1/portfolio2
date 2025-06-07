import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import FadeInSection from "@/Sections/FadeInSection";


interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
  coursework?: string[];
}

const educationData: Education[] = [
  {
    id: '1',
    degree: 'Bachelors Of Engineering',
    field: 'Computer Engineering',
    institution: 'NBN Sinhgad School Of Engineering, Pune',
    location: 'Pune, India',
    startDate: '2023',
    endDate: '2026',
    gpa: '8.55/10',
    achievements: [
      'GDG Member'
    ],
    coursework: [
      'Web Development',
      'Machine Learning',
      'Data Structure',
      'Database Systems'
    ]
  },
  {
    id: '2',
    degree: 'Diploma',
    field: 'Computer Engineering',
    institution: 'Govt. Polytechnic Awasari, Pune',
    location: 'Pune, India',
    startDate: '2020',
    endDate: '2023',
    gpa: '86.80/100',
    achievements: [
      'President, COMSA',
      'Treasurer,COMSA',
    ],
    coursework: [
      'Data Structures',
      'Software Engineering',
      'Computer Networks',
      'Operating Systems'
    ]
  },
  {
    id: '3',
    degree: '10th',
    field: 'SSC',
    institution: 'Janata Vidyalaya PavanNagar, Nashik',
    location: 'Nashik, India',
    startDate: '2019',
    endDate: '2020',
    gpa: '93.20/100',
    achievements: [
      
    ],
    coursework: [
      
    ]
  }
];

export default function EducationSection() {
  return (
    <FadeInSection className="p-6  rounded-xl shadow-md">
    <section id='education' className="w-full max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-gray-400" />
          Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
      </div>

      <div className="space-y-6">
        {educationData.map((edu) => (
          <Card key={edu.id} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/20">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl text-white mb-1">
                    {edu.degree} in {edu.field}
                  </CardTitle>
                  <p className="text-gray-300 font-medium">{edu.institution}</p>
                </div>
                <div className="flex flex-col sm:items-end gap-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {edu.gpa && (
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-sm font-medium">GPA:</span>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-200 hover:bg-gray-700">
                    {edu.gpa}
                  </Badge>
                </div>
              )}

              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <h4 className="text-gray-300 font-medium mb-2">Achievements</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <Badge key={i} variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {edu.coursework && edu.coursework.length > 0 && (
                <div>
                  <h4 className="text-gray-300 font-medium mb-2">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-200 hover:bg-gray-700">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    </FadeInSection>
  );
}