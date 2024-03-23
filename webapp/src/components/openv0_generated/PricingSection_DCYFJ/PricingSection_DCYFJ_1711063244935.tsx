"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';
import React from 'react';

const PricingSection_DCYFJ: React.FC = () => {
  return (
    <section className="md:flex md:justify-around">
      <Card className="m-4 md:w-1/4 bg-white dark:bg-black">
        <CardHeader>
          <CardTitle>Beginner </CardTitle>
          <DollarSign className="h-6 w-6 text-green-500" />
        </CardHeader>
        <CardContent>
          <CardDescription>
            For individuals just starting. Includes basic support.
          </CardDescription>
          <p className="text-center text-3xl">$9.99/mo</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Subscribe</Button>
        </CardFooter>
      </Card>

      <Card className="m-4 md:w-1/4 bg-white dark:bg-black">
        <CardHeader>
          <CardTitle>Intermediate </CardTitle>
          <DollarSign className="h-6 w-6 text-green-500" />
        </CardHeader>
        <CardContent>
          <CardDescription>
            For businesses that need more growth. Includes priority support.
          </CardDescription>
          <p className="text-center text-3xl">$19.99/mo</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Subscribe</Button>
        </CardFooter>
      </Card>

      <Card className="m-4 md:w-1/4 bg-white dark:bg-black">
        <CardHeader>
          <CardTitle>Pro </CardTitle>
          <DollarSign className="h-6 w-6 text-green-500" />
        </CardHeader>
        <CardContent>
          <CardDescription>
            For corporations with large user base. Includes dedicated support team and custom integrations.
          </CardDescription>
          <p className="text-center text-3xl">$29.99/mo</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Subscribe</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default PricingSection_DCYFJ;