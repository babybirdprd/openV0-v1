"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRightCircle } from "lucide-react";

const HeroSection_1FSL9 = () => {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center text-white bg-cover bg-no-repeat bg-center dark:bg-black"
      style={{ backgroundImage: `url('placeholder-background.jpg')` }}>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <div className="z-10 max-w-4xl px-4 md:px-8 lg:px-12">
        <AspectRatio ratio={16 / 9} className="hidden md:block">
          <img
            src="placeholder-image.jpg"
            alt="Hero Background"
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <h1 className="text-4xl md:text-5xl font-bold mt-8 md:mt-0">
          Main Headline
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-3xl">
          Supportive tagline or introductory text that complements the main
          headline.
        </p>
        <div className="mt-6 md:mt-8">
          <Button variant="outline">
            <ArrowRightCircle className="mr-2 h-4 w-4" />
            Call to Action
          </Button>
        </div>
        <div className="mt-8 md:mt-10 w-full">
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection_1FSL9;
