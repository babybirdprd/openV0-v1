import { Accordion } from '@/components/ui/accordion';
import { AccordionContent } from '@/components/ui/accordion';
import { AccordionItem } from '@/components/ui/accordion';
import { AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { LifeBuoy } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Zap } from 'lucide-react';
"use client";

const FeatureSection_3X9M5 = () => {
  return (
    <div className="my-10 py-5 px-4 md:py-10 md:px-8 bg-gray-50 dark:bg-black">
      <Accordion type="single" collapsible className="max-w-4xl mx-auto">
        <AccordionItem value="efficiency">
          <AccordionTrigger>Efficiency</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>Enhanced Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <LifeBuoy className="h-8 w-8 text-blue-500" />
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
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="security">
          <AccordionTrigger>Security</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>Uncompromised Security</CardTitle>
              </CardHeader>
              <CardContent>
                <Lock className="h-8 w-8 text-green-500" />
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
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="innovation">
          <AccordionTrigger>Innovation</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>Leading Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <Zap className="h-8 w-8 text-yellow-400" />
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
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FeatureSection_3X9M5;