"use client";

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowDownToDot } from 'lucide-react';
import { Info } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Map } from 'lucide-react';
import { UserCircle } from 'lucide-react';

const ContactFormWithMap_6ZA1K = () => {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <Card className="max-w-xl mx-auto shadow-lg dark:bg-black">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Input type="text" placeholder="Your Name" />
              <UserCircle className="absolute mt-1 ml-3 h-5 w-5 text-gray-400" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" />
              <Mail className="absolute mt-1 ml-3 h-5 w-5 text-gray-400" />
            </div>
            <div>
              <Input type="text" placeholder="Subject" />
              <Info className="absolute mt-1 ml-3 h-5 w-5 text-gray-400" />
            </div>
            <textarea
              className="h-36 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              placeholder="Message"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Send Message <ArrowDownToDot className="ml-2 h-5 w-5" /></Button>
        </CardFooter>
      </Card>
      <div className="max-w-xl mx-auto">
        <AspectRatio ratio={16 / 9}>
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31271.83771463072!2d-0.12764762289022987!3d51.50732181674774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b691e4d7d6f%3A0xd11e85f96f19d160!2sLondon!5e0!3m2!1sen!2suk!4v1595409206185!5m2!1sen!2suk"
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex={-1}
            className="h-full w-full rounded-md object-cover"
            loading="lazy"
          ></iframe>
        </AspectRatio>
      </div>
    </div>
  );
};

export default ContactFormWithMap_6ZA1K;