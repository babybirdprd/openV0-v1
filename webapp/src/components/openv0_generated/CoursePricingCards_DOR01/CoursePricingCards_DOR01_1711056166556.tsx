import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import { BrainCog } from 'lucide-react';
import { Briefcase } from 'lucide-react';
import { CircuitBoard } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Project } from 'lucide-react';
import { Target } from 'lucide-react';
"use client";

export default function CoursePricingCards_DOR01() {
  return (
    <div className="flex gap-6 p-5 overflow-x-auto">
      <Card className="min-w-[320px] bg-white dark:bg-black shadow-lg transition-all duration-500">
        <CardHeader className="bg-gray-800 p-4 rounded-t-lg flex items-center space-x-2">
          <BrainCog className="h-6 w-6 text-green-400" />
          <CardTitle className="text-white">Foundational Course <BookOpen className="h-4 w-4 inline-block ml-2"/></CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <CardDescription className="text-gray-700 dark:text-gray-300">Begin your career with solid foundations and engaging projects.</CardDescription>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>Basic Concepts and Best Practices</li>
            <li>Multiple Hands-on Projects</li>
            <li>Career Planning Sessions</li>
          </ul>
          <div className="flex items-center justify-between pt-2">
            <h2 className="text-xl font-bold">$99 • 3 Months</h2>
            <Clock className="h-6 w-6 text-blue-500" />
          </div>
        </CardContent>
        <CardFooter className="p-4">
          <Button className="w-full">Enroll Now</Button>
        </CardFooter>
      </Card>

      <Card className="min-w-[320px] bg-white dark:bg-black shadow-lg transition-all duration-500">
        <CardHeader className="bg-indigo-800 p-4 rounded-t-lg flex items-center space-x-2">
          <Briefcase className="h-6 w-6 text-yellow-400" />
          <CardTitle className="text-white">Intermediate Course <Project className="h-4 w-4 inline-block ml-2"/></CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <CardDescription className="text-gray-700 dark:text-gray-300">Elevate your skills with advanced topics and complex projects.</CardDescription>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>In-depth MERN Stack Techniques</li>
            <li>Multiple Real-world Projects</li>
            <li>Exclusive Job Preparation Workshops</li>
          </ul>
          <div className="flex items-center justify-between pt-2">
            <h2 className="text-xl font-bold">$199 • 6 Months</h2>
            <Clock className="h-6 w-6 text-blue-500" />
          </div>
        </CardContent>
        <CardFooter className="p-4">
          <Button className="w-full" variant="secondary">Learn More</Button>
        </CardFooter>
      </Card>

      <Card className="min-w-[320px] bg-white dark:bg-black shadow-lg transition-all duration-500">
        <CardHeader className="bg-teal-800 p-4 rounded-t-lg flex items-center space-x-2">
          <CircuitBoard className="h-6 w-6 text-red-400" />
          <CardTitle className="text-white">Advanced Course <Target className="h-4 w-4 inline-block ml-2"/></CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <CardDescription className="text-gray-700 dark:text-gray-300">Master the MERN stack and build your network with expert mentorship.</CardDescription>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>Complex Full-stack Projects</li>
            <li>Multiple One-to-One Mentorships</li>
            <li>Professional Networking Opportunities</li>
          </ul>
          <div className="flex items-center justify-between pt-2">
            <h2 className="text-xl font-bold">$299 • 9 Months</h2>
            <Clock className="h-6 w-6 text-blue-500" />
          </div>
        </CardContent>
        <CardFooter className="p-4">
          <Button className="w-full" variant="outline">Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  );
}