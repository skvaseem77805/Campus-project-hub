'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ExternalLink, Heart } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Loading from './loading';

interface Project {
  id: string;
  title: string;
  description: string;
  studentName: string;
  year: string;
  category: string;
  department: string;
  projectUrl: string;
  likes: number;
  createdAt: string;
}

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Study Assistant',
    description: 'A web app that helps students organize notes, create study plans, and practice with AI-generated quizzes.',
    studentName: 'Raj Polimetla',
    year: '2024',
    category: 'Web Development',
    department: 'CSE',
    projectUrl: 'https://example.com/study-assistant',
    likes: 234,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Campus Community App',
    description: 'Mobile app connecting students for events, study groups, and campus activities.',
    studentName: 'Priya Singh',
    year: '2023',
    category: 'Mobile App',
    department: 'CSE',
    projectUrl: 'https://example.com/campus-app',
    likes: 189,
    createdAt: '2024-01-10'
  },
  {
    id: '3',
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for analyzing student performance metrics and trends.',
    studentName: 'Arun Kumar',
    year: '2022',
    category: 'Data Science',
    department: 'IT',
    projectUrl: 'https://example.com/analytics',
    likes: 156,
    createdAt: '2024-01-08'
  },
  {
    id: '4',
    title: 'IoT Weather Station',
    description: 'Smart device project using IoT sensors to monitor and display real-time weather data.',
    studentName: 'Neha Patel',
    year: '2024',
    category: 'IoT',
    department: 'ECE',
    projectUrl: 'https://example.com/weather-iot',
    likes: 128,
    createdAt: '2024-01-05'
  },
  {
    id: '5',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and inventory management.',
    studentName: 'Vikram Reddy',
    year: '2023',
    category: 'Web Development',
    department: 'CSE',
    projectUrl: 'https://example.com/ecommerce',
    likes: 267,
    createdAt: '2024-01-02'
  },
  {
    id: '6',
    title: 'ML Image Recognition',
    description: 'Machine learning model for identifying and classifying objects in images using deep learning.',
    studentName: 'Sophia Chen',
    year: '2025',
    category: 'Machine Learning',
    department: 'CSE',
    projectUrl: 'https://example.com/ml-vision',
    likes: 198,
    createdAt: '2024-01-01'
  }
];

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [likedProjects, setLikedProjects] = useState<string[]>([]);

  const categories = ['Web Development', 'Mobile App', 'Data Science', 'IoT', 'Machine Learning'];
  const years = ['2025', '2024', '2023', '2022'];

  const searchParams = useSearchParams();

  const filteredProjects = sampleProjects.filter(project => {
    const matchSearch = 
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.studentName.toLowerCase().includes(search.toLowerCase());
    const matchYear = !filterYear || project.year === filterYear;
    const matchCategory = !filterCategory || project.category === filterCategory;
    return matchSearch && matchYear && matchCategory;
  });

  const toggleLike = (projectId: string) => {
    setLikedProjects(prev =>
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        <Navbar />

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-4xl font-bold mb-2">Discover Projects</h1>
              <p className="text-muted-foreground">
                Explore amazing projects from students across all years and departments
              </p>
            </div>

            {/* Search and Filters */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search projects by title, description, or student name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <div>
                  <p className="text-sm font-medium mb-2">Year</p>
                  <div className="flex gap-2">
                    <Button
                      variant={filterYear === '' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFilterYear('')}
                    >
                      All
                    </Button>
                    {years.map(year => (
                      <Button
                        key={year}
                        variant={filterYear === year ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFilterYear(year)}
                      >
                        {year}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Category</p>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={filterCategory === '' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFilterCategory('')}
                    >
                      All
                    </Button>
                    {categories.map(cat => (
                      <Button
                        key={cat}
                        variant={filterCategory === cat ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setFilterCategory(cat)}
                      >
                        {cat}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredProjects.map(project => (
                  <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
                    <div className="flex-1 space-y-3 mb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.studentName}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleLike(project.id)}
                          className={likedProjects.includes(project.id) ? 'text-red-500' : ''}
                        >
                          <Heart
                            className="w-5 h-5"
                            fill={likedProjects.includes(project.id) ? 'currentColor' : 'none'}
                          />
                        </Button>
                      </div>

                      <p className="text-sm text-foreground/80">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{project.category}</Badge>
                        <Badge variant="outline">{project.department}</Badge>
                        <Badge variant="outline">Class of {project.year}</Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Heart className="w-4 h-4" />
                        <span>
                          {project.likes + (likedProjects.includes(project.id) ? 1 : 0)} likes
                        </span>
                      </div>
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex"
                      >
                        <Button variant="ghost" size="sm" className="gap-2">
                          View Project
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground mb-4">No projects found matching your search.</p>
                <Button variant="outline" onClick={() => { setSearch(''); setFilterYear(''); setFilterCategory(''); }}>
                  Clear Filters
                </Button>
              </Card>
            )}
          </div>
        </section>
      </div>
    </Suspense>
  );
}
