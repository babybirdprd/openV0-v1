import { Button } from '@/components/ui/button';
import { Award } from 'lucide-react';
import { Sun } from 'lucide-react';
import { useState } from 'react';
"use client";

const CTASection_29ZYP = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <section className="py-24 px-6 bg-teal-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-20">
          <Sun className={`h-14 w-14 text-orange-400 mb-5 transition-transform ${isAnimated ? 'scale-125' : 'scale-100'}`}
            onMouseEnter={() => setIsAnimated(true)}
            onMouseLeave={() => setIsAnimated(false)}
          />
          <h2 className="text-5xl font-bold mb-4">Spark New Ideas</h2>
          <p className="text-teal-300 dark:text-teal-200 mb-10">
            Join a community of innovators and explorers to discover new horizons. Empower your creativity with us.
          </p>
          <Button variant="solid" className="bg-red-500 hover:bg-red-600 text-white">
            <Award className="mr-3 h-6 w-6" /> Join Our Community
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="bg-teal-800 dark:bg-black shadow-xl rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-3">Innovative Sessions</h3>
            <p className="text-teal-400 dark:text-teal-200">
              Engage in sessions that challenge conventional thinking and inspire new ideas.
            </p>
          </div>
          <div className="bg-teal-800 dark:bg-black shadow-xl rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-3">Collaborative Projects</h3>
            <p className="text-teal-400 dark:text-teal-200">
              Collaborate on projects that push the boundaries of creativity and innovation.
            </p>
          </div>
        </div>
        <Button variant="solid" className="bg-green-500 hover:bg-green-600 text-white">
          <Sun className="mr-3 h-6 w-6" /> Discover More
        </Button>
      </div>
    </section>
  );
};

export default CTASection_29ZYP;