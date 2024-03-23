import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';
import React from 'react';
"use client";

const PricingSection_DCYFJ: React.FC = () => {
  return (
    <section className="md:flex md:justify-around space-y-4 md:space-y-0 md:space-x-4 py-8 px-4 bg-white dark:bg-black rounded-lg shadow-lg">
      <Card className="flex flex-col m-4 md:w-1/4 bg-blue-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-in-out">
        <CardHeader>
          <CardTitle className="text-center text-lg md:text-xl font-bold text-blue-600">Beginner</CardTitle>
          <DollarSign className="m-auto h-6 w-6 text-blue-600 mt-2" />
        </CardHeader>
        <CardContent>
          <CardDescription className="mt-2 text-gray-600 text-center">
            For individuals just starting. Includes basic support.
          </CardDescription>
          <p className="text-center text-5xl font-bold text-blue-600 my-4">$9.99/mo</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button variant="outline" className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 ease-in-out">Subscribe</Button>
        </CardFooter>
      </Card>

      <Card className="flex flex-col m-4 md:w-1/4 bg-yellow-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-in-out">
        <CardHeader>
          <CardTitle className="text-center text-lg md:text-xl font-bold text-yellow-600">Intermediate</CardTitle>
          <DollarSign className="m-auto h-6 w-6 text-yellow-600 mt-2" />
        </CardHeader>
        <CardContent>
          <CardDescription className="mt-2 text-gray-600 text-center">
            For businesses that need more growth. Includes priority support.
          </CardDescription>
          <p className="text-center text-5xl font-bold text-yellow-600 my-4">$19.99/mo</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button variant="outline" className="w-full bg-yellow-600 text-white hover:bg-yellow-700 transition-colors duration-300 ease-in-out">Subscribe</Button>
        </CardFooter>
      </Card>

      <Card className="flex flex-col m-4 md:w-1/4 bg-green-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-in-out">
        <CardHeader>
          <CardTitle className="text-center text-lg md:text-xl font-bold text-green-600">Pro</CardTitle>
          <DollarSign className="m-auto h-6 w-6 text-green-600 mt-2" />
        </CardHeader>
        <CardContent>
          <CardDescription className="mt-2 text-gray-600 text-center">
            For corporations with large user base. Includes dedicated support team and custom integrations.
          </CardDescription>
          <p className="text-center text-5xl font-bold text-green-600 my-4">$29.99/mo</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button variant="outline" className="w-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 ease-in-out">Subscribe</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default PricingSection_DCYFJ;