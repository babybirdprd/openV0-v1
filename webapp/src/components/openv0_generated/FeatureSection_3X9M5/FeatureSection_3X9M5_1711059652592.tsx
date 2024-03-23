"use client";

import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { TabsContent } from '@/components/ui/tabs';
import { TabsList } from '@/components/ui/tabs';
import { TabsTrigger } from '@/components/ui/tabs';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { Gauge } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { Sparkles } from 'lucide-react';

const FeatureSection_3X9M5 = () => {
  return (
    <div className="my-10 py-5 px-4 md:py-10 md:px-8 bg-gray-50 dark:bg-black">
      <Tabs defaultValue="feature1" className="max-w-4xl mx-auto">
        <TabsList>
          <TabsTrigger value="feature1">Efficiency</TabsTrigger>
          <TabsTrigger value="feature2">Security</TabsTrigger>
          <TabsTrigger value="feature3">Innovation</TabsTrigger>
        </TabsList>
        <TabsContent value="feature1">
          <Card>
            <CardHeader>
              <CardTitle>Enhanced Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <Gauge className="h-8 w-8 text-blue-500"/>
              <p>Experience unparalleled efficiency with our state-of-the-art technology designed to save you time and resources.</p>
            </CardContent>
            <CardFooter>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="text-blue-500 underline">Learn More</button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>More on how our technology innovates.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="feature2">
          <Card>
            <CardHeader>
              <CardTitle>Uncompromised Security</CardTitle>
            </CardHeader>
            <CardContent>
              <ShieldCheck className="h-8 w-8 text-green-500"/>
              <p>Your data's safety is our top priority. Enjoy peace of mind with our advanced security measures.</p>
            </CardContent>
            <CardFooter>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="text-green-500 underline">Discover</button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Dive deeper into our security features.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="feature3">
          <Card>
            <CardHeader>
              <CardTitle>Leading Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <Sparkles className="h-8 w-8 text-yellow-400"/>
              <p>Stay ahead of the curve with our innovative solutions that redefine the standards of excellence.</p>
            </CardContent>
            <CardFooter>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="text-yellow-400 underline">Explore</button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Learn more about our pioneering technology.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeatureSection_3X9M5;