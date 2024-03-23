"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent } from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@/components/ui/tooltip";
import { Award } from "lucide-react";
import { Badge } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import { Receipt } from "lucide-react";
import { ShieldCheck } from "lucide-react";

export default function CoursePricingCards_DOR01() {
  return (
    <div className="p-5 bg-slate-700">
      <div className="flex justify-between items-center">
        {/** Beginner Course Card */}
        <Card className="bg-white dark:bg-black shadow-lg transition-all duration-500">
          <TooltipProvider>
            <CardHeader className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-t-lg flex justify-between items-center">
              <CardTitle className="text-white">Beginner</CardTitle>
              <Badge className="text-white border-white">Best Value</Badge>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                Perfect for beginners starting their journey in MERN stack
                development.
              </p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li>Basic Concepts of MERN</li>
                <li>Complete Project</li>
                <li>Community Support</li>
              </ul>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">$99</h2>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <BadgeCheck className="h-4 w-4 text-green-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Certification Included</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">3 Months</h2>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Receipt className="h-4 w-4 text-blue-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Access to Resources</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4">
              <Button>Enroll Now</Button>
              <ShieldCheck className="h-5 w-5 text-green-500" />
            </CardFooter>
          </TooltipProvider>
        </Card>
        {/** Intermediate Course Card */}
        <Card className="bg-white dark:bg-black shadow-lg transition-all duration-500">
          <CardHeader className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-t-lg flex justify-between items-center">
            <CardTitle className="text-white">Intermediate</CardTitle>
            <Award className="text-white h-6 w-6" />
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              Designed for developers who want to deepen their understanding of
              MERN stack.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Advanced Topics</li>
              <li>Real-world Projects</li>
              <li>One-on-one Mentorship</li>
            </ul>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">$199</h2>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">6 Months</h2>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center p-4">
            <Button variant="secondary">Learn More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
