"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { PhoneCall } from 'lucide-react';

export default function ContactSection_3478T() {
  return (
    <div className="p-4 bg-white dark:bg-black">
      <Card>
        <CardContent>
          <div className="space-y-6">
            <h2 className="text-lg font-bold">Contact Us</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Input type="text" placeholder="Name" />
              </div>
              <div>
                <Input type="email" placeholder="Email" />
              </div>
            </div>
            <Input type="text" placeholder="Message" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
      <div className="mt-8 flex flex-col items-center justify-center space-y-2">
        <div className="flex items-center space-x-2">
          <Mail className="h-4 w-4 text-gray-700 dark:text-gray-300" />
          <span>contact@example.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <PhoneCall className="h-4 w-4 text-gray-700 dark:text-gray-300" />
          <span>+123 456 7890</span>
        </div>
      </div>
    </div>
  );
}