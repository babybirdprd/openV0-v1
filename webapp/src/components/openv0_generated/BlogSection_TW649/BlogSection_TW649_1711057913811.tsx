import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';
import { View } from 'lucide-react';
"use client";

const BlogSection_TW649 = () => {
  return (
    <section className="max-w-6xl mx-auto py-8 px-4 bg-gray-100 dark:bg-black">
      <div className="flex justify-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white">Featured Blogs</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map(index => (
          <Card key={index} className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="relative">
              <Avatar className="absolute -top-3 -right-3">
                <AvatarImage src="https://via.placeholder.com/150?text=C" alt="Category" />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <img className="w-full h-56 object-cover" src={`https://via.placeholder.com/600x400?text=Blog+Post+${index}`} alt={`Blog Post ${index}`} />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">Blog Post Title {index}</CardTitle>
              <CardDescription className="text-gray-500 dark:text-gray-400">This is a short description of the blog post...</CardDescription>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <View className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">100 views</span>
                  <MessageSquare className="h-5 w-5 text-gray-700 dark:text-gray-300 ml-4" />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">5 comments</span>
                </div>
                <Badge variant="outline" className="text-xs">Learn More</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full justify-center">Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button variant="outline" className="text-gray-800 dark:text-white border-gray-800 hover:bg-gray-800 hover:text-white dark:border-white dark:hover:bg-gray-700 dark:hover:text-white">Load More</Button>
      </div>
    </section>
  );
};

export default BlogSection_TW649;