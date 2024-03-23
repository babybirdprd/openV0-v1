import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Dialog } from '@/components/ui/dialog';
import { DialogContent } from '@/components/ui/dialog';
import { ArrowLeftSquare } from 'lucide-react';
import { ArrowRightSquare } from 'lucide-react';
import { ZoomIn } from 'lucide-react';
import { useState } from 'react';
"use client";

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
    <div>
      <Button variant="ghost" onClick={() => setIsDialogOpen(true)}>View Gallery</Button>
      <Dialog isOpen={isDialogOpen} onDismiss={() => setIsDialogOpen(false)}>
        <DialogContent className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4">
          <Card className="max-w-3xl bg-white dark:bg-black">
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="flex space-x-4 items-center">
                <ArrowLeftSquare className="h-8 w-8 text-gray-700 dark:text-gray-200 cursor-pointer" onClick={handlePrevious} />
                <img src={images[currentImage]} alt="Gallery" className="max-h-[60vh] max-w-full" />
                <ArrowRightSquare className="h-8 w-8 text-gray-700 dark:text-gray-200 cursor-pointer" onClick={handleNext} />
              </div>
              <Button variant="outline" className="flex items-center">
                <ZoomIn className="mr-2 h-4 w-4" /> Zoom
              </Button>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
      <div className="grid grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery thumbnail ${index + 1}`}
            className="bg-gray-200 dark:bg-black aspect-w-16 aspect-h-9 cursor-pointer"
            onClick={() => {
              setIsDialogOpen(true);
              setCurrentImage(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery_JUYH6;