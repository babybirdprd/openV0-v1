import { Alert } from '@/components/ui/alert';
import { AlertDescription } from '@/components/ui/alert';
import { AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Rocket } from 'lucide-react';
"use client";

const CTASection_29ZYP = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <Alert className="flex flex-col items-center justify-center bg-blue-600 dark:bg-blue-800 text-white py-8 px-4 rounded-lg">
            <Rocket className="h-8 w-8 text-yellow-400 mb-3" />
            <AlertTitle className="text-xl font-bold">Start Your Adventure</AlertTitle>
            <AlertDescription className="text-md">Sign up to receive the latest tech news and updates directly to your mailbox.</AlertDescription>
          </Alert>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-3">Dive Into The World of Innovation</h2>
          <p className="text-gray-400 mb-8">
            Be part of a vibrant community of creators. Engage in discussions, share your insights, and explore the endless possibilities.
          </p>
          <Button variant="solid" className="bg-red-500 hover:bg-red-600 text-white">
            <Mail className="mr-2 h-5 w-5" /> Join Us Today
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Curated Resources</h3>
            <p className="text-gray-400">
              Gain access to a carefully selected list of resources, tutorials, and guides to fuel your growth.
            </p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Exclusive Opportunities</h3>
            <p className="text-gray-400">
              Get early access to job listings, internships, and collaborative projects within the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection_29ZYP;