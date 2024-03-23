import { Alert } from '@/components/ui/alert';
import { AlertDescription } from '@/components/ui/alert';
import { AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Rocket } from 'lucide-react';
"use client";

const CTASection_29ZYP = () => {
  return (
    <section className="py-16 px-6 text-center bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Alert>
            <Rocket className="h-6 w-6 text-blue-500" />
            <AlertTitle>Launch Your Journey</AlertTitle>
            <AlertDescription>Subscribe and get insights from industry leaders directly to your inbox.</AlertDescription>
          </Alert>
        </div>
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Ignite Your Passion for Innovation</h2>
          <p className="text-gray-600 mb-8 dark:text-gray-300">
            Join a community where technology and innovation meet. Get involved in projects that shape the future.
          </p>
          <Button variant="solid" className="bg-green-500 hover:bg-green-600 text-white">
            <Mail className="mr-2 h-5 w-5" /> Subscribe Now
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 dark:text-white">Exclusive Content</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access in-depth articles, research, and insights that aren't available elsewhere.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 dark:text-white">Community Access</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join discussions, share your projects, and collaborate with innovators across the globe.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 dark:text-white">Early Bird Perks</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Receive early access to new tools, events, and opportunities before they're released to the public.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection_29ZYP;