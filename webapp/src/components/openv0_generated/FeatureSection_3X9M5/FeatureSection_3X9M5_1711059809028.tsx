import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { CheckCircle } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { ShieldOff } from 'lucide-react';
"use client";

const FeatureSection_3X9M5 = () => {
  return (
    <div className="my-10 py-5 px-4 md:py-10 md:px-8 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-3">
        <div className="p-4 shadow-lg rounded-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform">
          <CheckCircle className="h-12 w-12 text-teal-500 mx-auto"/>
          <h3 className="text-lg font-semibold text-center mt-4">Efficiency</h3>
          <p className="text-center mt-2">Maximize productivity with our tools designed for fast and efficient workflows.</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="mt-4 text-teal-500 dark:text-teal-400 underline block mx-auto">Learn More</button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More on our efficiency tools</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform">
          <ShieldOff className="h-12 w-12 text-red-500 mx-auto"/>
          <h3 className="text-lg font-semibold text-center mt-4">Security</h3>
          <p className="text-center mt-2">Protect your data with leading-edge security measures built into our platform.</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="mt-4 text-red-500 dark:text-red-400 underline block mx-auto">Discover</button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Dive into our security measures</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="p-4 shadow-lg rounded-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform">
          <Lightbulb className="h-12 w-12 text-yellow-400 mx-auto"/>
          <h3 className="text-lg font-semibold text-center mt-4">Innovation</h3>
          <p className="text-center mt-2">Explore cutting-edge technologies that pave the way for new possibilities.</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="mt-4 text-yellow-400 dark:text-yellow-300 underline block mx-auto">Explore</button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Learn about our innovative tech</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection_3X9M5;