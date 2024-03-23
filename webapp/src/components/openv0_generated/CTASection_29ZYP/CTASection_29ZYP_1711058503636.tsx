import { Accordion } from '@/components/ui/accordion';
import { AccordionContent } from '@/components/ui/accordion';
import { AccordionItem } from '@/components/ui/accordion';
import { AccordionTrigger } from '@/components/ui/accordion';
import { Alert } from '@/components/ui/alert';
import { AlertDescription } from '@/components/ui/alert';
import { AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { LightbulbOff } from 'lucide-react';
import { PartyPopper } from 'lucide-react';
"use client";

const CTASection_29ZYP = () => {
  return (
    <section className="py-12 px-4 text-center bg-gray-100 dark:bg-black">
      <div className="max-w-4xl mx-auto mb-8">
        <Alert>
          <PartyPopper className="h-4 w-4" />
          <AlertTitle>Special Offer!</AlertTitle>
          <AlertDescription>Join now and get exclusive access to premium content.</AlertDescription>
        </Alert>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 dark:text-white">
          Become a Pioneer in Technology
        </h2>
        <p className="text-gray-600 mb-8 dark:text-gray-300">
          Dive into the world of innovation with our cutting-edge community. Explore, learn, and contribute to groundbreaking advancements.
        </p>
        <Button variant="solid" className="bg-blue-500 hover:bg-blue-600 text-white">
          <LightbulbOff className="mr-2 h-4 w-4" /> Discover More
        </Button>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="why-join">
          <AccordionTrigger className="text-left dark:text-white">Why Join Us?</AccordionTrigger>
          <AccordionContent className="dark:text-gray-300">
            As a member, you'll gain access to exclusive resources, networking opportunities, and the chance to be at the forefront of technology.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="benefits">
          <AccordionTrigger className="text-left dark:text-white">Member Benefits</AccordionTrigger>
          <AccordionContent className="dark:text-gray-300">
            Enjoy early access to new technologies, invitations to private events, and a platform to showcase your innovative projects.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default CTASection_29ZYP;