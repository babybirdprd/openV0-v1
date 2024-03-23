import { Button } from '@/components/ui/button';
import { Lightbulb } from 'lucide-react';
import { Star } from 'lucide-react';
import { useState } from 'react';
"use client";

const CTASection_29ZYP = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 px-4 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <Lightbulb className={`h-12 w-12 text-yellow-400 mb-4 transition-transform ${isHovered ? 'rotate-180' : 'rotate-0'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <h2 className="text-4xl font-bold mb-3">Illuminate Your Journey</h2>
          <p className="text-gray-400 dark:text-gray-200 mb-8">
            Expand your knowledge and connect with experts in the field. Let's turn your ideas into reality together.
          </p>
          <Button variant="solid" className="bg-purple-500 hover:bg-purple-600 text-white">
            <Star className="mr-2 h-5 w-5" /> Become a Member
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 dark:bg-black shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Comprehensive Workshops</h3>
            <p className="text-gray-400 dark:text-gray-200">
              Attend workshops and webinars conducted by industry leaders to sharpen your skills.
            </p>
          </div>
          <div className="bg-gray-800 dark:bg-black shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Networking Hubs</h3>
            <p className="text-gray-400 dark:text-gray-200">
              Build connections with professionals and peers alike in our diverse community hubs.
            </p>
          </div>
        </div>
        <Button variant="solid" className="bg-blue-500 hover:bg-blue-600 text-white">
          <Lightbulb className="mr-2 h-5 w-5" /> Explore Our Events
        </Button>
      </div>
    </section>
  );
};

export default CTASection_29ZYP;