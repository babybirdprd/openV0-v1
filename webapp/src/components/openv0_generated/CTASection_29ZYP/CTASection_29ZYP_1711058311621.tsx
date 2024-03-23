"use client";

import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowRightCircle } from 'lucide-react';

const CTASection_29ZYP = () => {
  return (
    <section className="py-12 px-4 text-center bg-gray-100 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <Avatar className="mx-auto mb-4 w-24 h-24 bg-gray-200">
          <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="text-3xl font-bold mb-2 dark:text-white">
          Join Our Community
        </h2>
        <p className="text-gray-600 mb-8 dark:text-gray-300">
          Be part of the innovative team leading the charge in cutting-edge technology and service. Let's make a difference together.
        </p>
        <Button variant="solid" className="bg-blue-500 hover:bg-blue-600 text-white">
          <ArrowRightCircle className="mr-2 h-4 w-4" /> Get Started
        </Button>
      </div>
    </section>
  );
};

export default CTASection_29ZYP;