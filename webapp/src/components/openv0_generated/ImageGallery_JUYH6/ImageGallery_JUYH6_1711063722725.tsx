"use client";

import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Dialog } from '@/components/ui/dialog';
import { DialogContent } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeftSquare } from 'lucide-react';
import { ArrowRightSquare } from 'lucide-react';
import { ImageOff } from 'lucide-react';
import { ImagePlus } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { ZoomIn } from 'lucide-react';
import { useState } from 'react';

const ImageGallery_JUYH6 = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "placeholder-image-url-1",
    "placeholder-image-url-2",
    "placeholder-image-url-3",
  ];

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="p-4 grid grid-cols-3 gap-4 bg-white dark:bg-black transition-all duration-200 ease-in">
      {images.map((image, index) => (
          <Card key={index} className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <CardContent>
              <Skeleton className="h-64 w-full" />
              <Avatar className="w-16 h-16 mt-[-80px] mx-auto border-4 border-white rounded-full shadow-lg">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
            </CardContent>
            <CardHeader className="px-4 py-2">
              <CardTitle className="text-center font-bold text-xl mb-2">Image {index+1}</CardTitle>
            </CardHeader>
            <CardFooter className="flex items-center justify-between px-4 pt-2 pb-4">
              <Button className="text-sm py-1 px-2 bg-blue-500 text-white rounded-full" onClick={() => {
              setIsDialogOpen(true);
              setCurrentImage(index);
            }}>View</Button>
              <div className="flex items-center space-x-2">
                <ImagePlus className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                <ImageOff className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                <Lightbulb className="h-6 w-6 text-yellow-500" />
              </div>
            </CardFooter>
          </Card>
        ))
      }
            
    <Dialog isOpen={isDialogOpen} onDismiss={() => setIsDialogOpen(false)}>
    <DialogContent className="flex items-center justify-center inset-0 bg-black bg-opacity-50 fixed backdrop-blur-sm">
      <Card className="max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <CardContent>
          <div className="flex justify-between items-center px-6 py-4">
            <ArrowLeftSquare className="h-8 w-auto text-gray-700 dark:text-gray-50 cursor-pointer" color="#D1D5DB" onClick={handlePrevious} />
            <img src={images[currentImage]} alt="Gallery" className="max-h-[60vh] max-w-full" />
            <ArrowRightSquare className="h-8 w-auto text-gray-700 dark:text-gray-50 cursor-pointer" color="#D1D5DB" onClick={handleNext} />
          </div>
          <CardContent className="p-6">
            <CardTitle className="text-2xl font-bold">Image {currentImage + 1}</CardTitle>
            <Button variant="outline" className="flex items-center mt-4 space-x-2 text-blue-500">
              <ZoomIn className="h-5 w-auto" /> 
              <span>Zoom</span>
            </Button>
          </CardContent>
        </CardContent>
      </Card>
    </DialogContent>
  </Dialog>
  </div>
  );
};

export default ImageGallery_JUYH6;