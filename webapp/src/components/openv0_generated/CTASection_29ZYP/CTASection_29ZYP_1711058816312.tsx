import { Alert } from '@/components/ui/alert';
import { AlertDescription } from '@/components/ui/alert';
import { AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Mail } from 'lucide-react';
"use client";

const CTASection_29ZYP = () => {
  return (
    <section className="py-20 px-4 text-center bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-700 dark:to-blue-700">
      <div className="max-w-7xl mx-auto">
        <Alert className="mb-12 bg-white dark:bg-gray-800 rounded-lg py-8 px-6 shadow-xl">
          <CheckCircle className="h-6 w-6 text-green-500" />
          <AlertTitle className="text-xl text-gray-800 dark:text-white font-bold">Step Into the Future</AlertTitle>
          <AlertDescription className="text-lg text-gray-600 dark:text-gray-300">Subscribe to unlock exclusive insights and be at the forefront of technology.</AlertDescription>
        </Alert>
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-6">Discover. Innovate. Collaborate.</h2>
          <p className="text-gray-100 mb-8">
            Embark on a journey with us and be part of a thriving community of innovators. Transform ideas into reality and make a lasting impact.
          </p>
          <Button variant="solid" className="text-lg bg-purple-600 hover:bg-purple-700 text-white py-4 px-8 rounded-lg shadow-md">
            <Mail className="mr-2 h-5 w-5" aria-hidden="true" />Sign Up Now
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Thought Leadership</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Gain insights from leading industry experts and elevate your knowledge.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Cutting-edge Tools</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access the latest technological tools to power your projects and ideas.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Dynamic Network</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with like-minded individuals and grow your professional network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection_29ZYP;