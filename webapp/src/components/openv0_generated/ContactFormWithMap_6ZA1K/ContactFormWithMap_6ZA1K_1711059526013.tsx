import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs } from '@/components/ui/tabs';
import { TabsContent } from '@/components/ui/tabs';
import { TabsList } from '@/components/ui/tabs';
import { TabsTrigger } from '@/components/ui/tabs';
import { Mail } from 'lucide-react';
import { Navigation } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
"use client";

const ContactFormWithMap_6ZA1K = () => {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <Card className="max-w-xl mx-auto shadow-lg dark:bg-black">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Input type="text" placeholder="Your Name" />
              <Mail className="absolute top-3 left-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <div className="relative">
              <Input type="email" placeholder="Your Email" />
              <PhoneCall className="absolute top-3 left-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <div className="relative">
              <Input type="text" placeholder="Phone Number" />
              <Navigation className="absolute top-3 left-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <textarea
              className="h-36 w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 dark:bg-black dark:border-gray-700 dark:text-white"
              placeholder="Message"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Send Message</Button>
        </CardFooter>
      </Card>
      <div className="max-w-xl mx-auto">
        <Tabs defaultValue="map" className="shadow-lg dark:bg-black">
          <TabsList className="flex justify-center">
            <TabsTrigger value="map" className="px-4 py-2">Map</TabsTrigger>
          </TabsList>
          <TabsContent value="map" className="w-full">
            <div className="w-full aspect-w-16 aspect-h-9 dark:bg-black">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31271.83771463072!2d-0.12764762289022987!3d51.50732181674774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b691e4d7d6f%3A0xd11e85f96f19d160!2sLondon!5e0!3m2!1sen!2suk!4v1595409206185!5m2!1sen!2suk"
                allowFullScreen={false}
                aria-hidden="false"
                tabIndex={-1}
                className="h-full w-full rounded-md object-cover dark:bg-black"
                loading="lazy"
              ></iframe>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ContactFormWithMap_6ZA1K;