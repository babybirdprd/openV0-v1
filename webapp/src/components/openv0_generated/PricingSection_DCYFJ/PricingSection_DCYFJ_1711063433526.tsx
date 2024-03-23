import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import React from 'react';
"use client";

const PricingSection_DCYFJ: React.FC = () => {
  return (
    <section className="md:flex md:justify-between space-y-10 md:space-y-0 md:space-x-10 py-8 px-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <Card className="flex flex-col m-4 md:w-1/3 bg-blue-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-in-out">
        <CardHeader>
          <CardTitle className="text-center text-lg md:text-2xl font-bold text-blue-600">Beginner</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mt-2 text-gray-600 text-center">
            For individuals just starting. Includes basic support.
          </p>
          <p className="text-center text-5xl font-bold text-blue-600 my-6">$9.99/mo</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button variant="solid" className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 ease-in-out">Subscribe</Button>
        </CardFooter>
      </Card>

      <Card className="flex flex-col m-4 md:w-1/3 bg-yellow-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-in-out">
        <CardHeader>
          <CardTitle className="text-center text-lg md:text-2xl font-bold text-yellow-800">Intermediate</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mt-2 text-gray-600 text-center">
            For businesses that need more growth. Includes priority support.
          </p>
          <p className="text-center text-5xl font-bold text-yellow-800 my-6">$19.99/mo</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button variant="solid" className="w-full bg-yellow-800 text-white hover:bg-yellow-900 transition-colors duration-300 ease-in-out">Subscribe</Button>
        </CardFooter>
      </Card>

      <Card className="flex flex-col m-4 md:w-1/3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-in-out">
        <CardHeader>
          <CardTitle className="text-center text-lg md:text-2xl font-bold text-gray-800">Pro</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mt-2 text-gray-600 text-center">
            For corporations with large user base. Includes dedicated support team and custom integrations.
          </p>
          <p className="text-center text-5xl font-bold text-gray-800 my-6">$29.99/mo</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button variant="solid" className="w-full bg-gray-800 text-white hover:bg-gray-900 transition-colors duration-300 ease-in-out">Subscribe</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default PricingSection_DCYFJ;