"use client";

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Code2 } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { PlayCircle } from 'lucide-react';
import React from 'react';

const HeroSection_1YFAG = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-black text-white py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              <GraduationCap className="inline-block mr-2 h-8 w-8" /> MERN Stack Bootcamp
            </CardTitle>
            <CardDescription>
              Jumpstart your web development career
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://via.placeholder.com/450"
                alt="Web Development"
                className="rounded-md object-cover"
              />
            </AspectRatio>
            <ul className="list-disc pl-4 mt-4">
              <li>Master MongoDB, Express, React, and Node.js</li>
              <li>Build real-world projects</li>
              <li>From zero to deployment</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <Button variant="outline">
              <PlayCircle className="inline-block mr-2 h-6 w-6" /> Enroll Now
            </Button>
            <Button variant="ghost">
              <Code2 className="inline-block mr-2 h-6 w-6" /> Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default HeroSection_1YFAG;