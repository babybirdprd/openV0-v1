"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Code2 } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { PlayCircle } from "lucide-react";

const HeroSection_1YFAG = () => {
  return (
    <div className="border-relative py-12 px-4 bg-gradient-to-r from-blue-500 to-pink-500 dark:bg-black">
      <div className="max-w-screen-xl mx-auto">
        <Card className="grid md:grid-cols-2 gap-12 items-center bg-white dark:bg-black p-8 rounded-lg shadow-lg">
          <div className="space-y-10">
            <CardHeader className="mb-4">
              <CardTitle className="text-3xl font-bold text-black dark:text-white">
                <GraduationCap className="inline-block mr-2 h-8 w-8" /> MERN
                Stack Bootcamp
              </CardTitle>
              <CardDescription className="text-black dark:text-white">
                Jumpstart your web development career
              </CardDescription>
            </CardHeader>
            <CardContent className="mb-4">
              <ul className="list-disc pl-4 text-black dark:text-white space-y-2">
                <li>Master MongoDB, Express, React, and Node.js</li>
                <li>Build real-world projects</li>
                <li>From zero to deployment</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="default" className="w-1/2 mr-2">
                <PlayCircle className="inline-block mr-2 h-6 w-6" /> Enroll Now
              </Button>
              <Button variant="outline" className="w-1/2 ml-2">
                <Code2 className="inline-block mr-2 h-6 w-6" /> Learn More
              </Button>
            </CardFooter>
          </div>
          <div className="w-full">
            <img
              src="https://via.placeholder.com/1250"
              alt="Web Development"
              className="rounded-md object-cover w-full h-full"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HeroSection_1YFAG;
