import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';
import { Briefcase } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
"use client";

export default function CoursePricingCards_DOR01() {
  return (
    <div className="flex gap-6 p-5 overflow-x-auto">
      <Card className="min-w-[320px] bg-white dark:bg-black shadow-lg transition-all duration-500">
        <CardHeader className="bg-gray-700 p-4 rounded-t-lg flex justify-between items-center">
          <CardTitle className="text-white">Beginner</CardTitle>
          <ShieldCheck className="h-6 w-6 text-green-500" />
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <CardDescription className="text-gray-700 dark:text-gray-300">Kickstart your journey with foundational knowledge and a hands-on project.</CardDescription>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>Introduction to MERN</li>
            <li>Build a To-Do App</li>
            <li>Career guidance</li>
          </ul>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">$99</h2>
            <Calendar className="h-4 w-4 text-blue-500" />
            <span>3 Months</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4">
          <Button>Enroll Now</Button>
        </CardFooter>
      </Card>

      <Card className="min-w-[320px] bg-white dark:bg-black shadow-lg transition-all duration-500">
        <CardHeader className="bg-indigo-700 p-4 rounded-t-lg flex justify-between items-center">
          <CardTitle className="text-white">Intermediate</CardTitle>
          <Briefcase className="h-6 w-6 text-yellow-500" />
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <CardDescription className="text-gray-700 dark:text-gray-300">Dive deeper with advanced concepts and real-world applications.</CardDescription>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>Advanced MERN Techniques</li>
            <li>Develop a Blog Platform</li>
            <li>Job preparation sessions</li>
          </ul>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">$199</h2>
            <Calendar className="h-4 w-4 text-blue-500" />
            <span>6 Months</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4">
          <Button variant="secondary">Learn More</Button>
        </CardFooter>
      </Card>

      <Card className="min-w-[320px] bg-white dark:bg-black shadow-lg transition-all duration-500">
        <CardHeader className="bg-teal-700 p-4 rounded-t-lg flex justify-between items-center">
          <CardTitle className="text-white">Advanced</CardTitle>
          <Award className="h-6 w-6 text-red-500" />
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <CardDescription className="text-gray-700 dark:text-gray-300">Master MERN stack with project-based learning and personal mentorship.</CardDescription>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>Full-stack MERN Projects</li>
            <li>Personal Mentorship</li>
            <li>Networking with professionals</li>
          </ul>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">$299</h2>
            <Calendar className="h-4 w-4 text-blue-500" />
            <span>9 Months</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4">
          <Button variant="outline">Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  );
}