import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';
import { SprayCan } from 'lucide-react';
import { View } from 'lucide-react';
"use client";

const BlogSection_TW649 = () => {
  const cardColors = ["bg-purple-600", "bg-pink-500", "bg-green-500"];
  const textColors = ["text-red-100", "text-blue-100", "text-green-100"];

  return (
    <section className="max-w-6xl mx-auto py-8 px-4 bg-blue-600 dark:bg-black">
      <div className="flex justify-center mb-10">
        <h2 className="text-3xl font-extrabold text-white dark:text-white">
          Featured Creative Blogs
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((index) => (
          <Card
            key={index}
            className={`${cardColors[index % cardColors.length]} overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
            <CardHeader>
              <img
                className="w-full h-56 object-cover opacity-90"
                src={`https://via.placeholder.com/600x400?text=Creative+Post+${index}`}
                alt={`Creative Post ${index}`}
              />
            </CardHeader>
            <CardContent>
              <CardTitle
                className={`text-lg font-bold ${textColors[index % textColors.length]}`}>
                Creative Post Title {index}
              </CardTitle>
              <CardDescription className={`text-white`}>
                This is a passionate description of the creative blog post...
              </CardDescription>
              <div className="flex items-center justify-between mt-4 text-white">
                <div className="flex items-center">
                  <View className="h-5 w-5" />
                  <span className="ml-2 text-sm">100 views</span>
                  <MessageSquare className="h-5 w-5 ml-4" />
                  <span className="ml-2 text-sm">5 comments</span>
                </div>
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-800">
                  <SprayCan className="mr-1 h-4 w-4" /> Creative
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                variant="ghost"
                className="bg-white shadow text-black hover:bg-gray-200">
                Discover More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button
          variant="outline"
          className="text-black border-white hover:bg-white hover:text-indigo-500">
          Explore More
        </Button>
      </div>
    </section>
  );
};

export default BlogSection_TW649;