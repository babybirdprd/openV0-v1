import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Eye, MessageSquare } from 'lucide-react';
import { SprayCan } from 'lucide-react';
import { View } from 'lucide-react';
"use client";

const BlogSection_TW649 = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4 bg-blue-400 dark:bg-black">
      <div className="flex justify-center mb-16">
        <h2 className="text-4xl font-extrabold text-white dark:text-white">
          Featured Creative Blogs
        </h2>
      </div>

      <Separator className="border-gray-100 mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((index) => (
          <Card
            key={index}
            className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <img
                className="w-full h-56 object-cover opacity-90"
                src={`https://via.placeholder.com/600x400?text=Creative+Post+${index}`}
                alt={`Creative Post ${index}`}
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                Creative Post Title {index}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                This is a passionate description of the creative blog post...
              </CardDescription>
              <div className="flex flex-col justify-between mt-4 text-gray-600 dark:text-gray-400 gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Eye className="h-5 w-5" />
                    <span className="ml-2 text-sm">100 views</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 ml-4" />
                    <span className="ml-2 text-sm">5 comments</span>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-0.5 rounded text-sm font-medium bg-pink-800 text-white">
                  <SprayCan className="mr-1 h-4 w-4" /> Creative
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center pt-4">
              <Button
                variant="outline"
                className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                Discover More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Separator className="border-gray-100 my-12" />

      <div className="flex justify-center mt-12">
        <Button
          variant="outline"
          className="text-black border-white hover:bg-white hover:text-indigo-500 dark:hover:text-black">
          Explore More
        </Button>
      </div>
    </section>
  );
};

export default BlogSection_TW649;