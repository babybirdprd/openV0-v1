import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { View } from 'lucide-react';
"use client";

const BlogSection_TW649 = () => {
  return (
    <section className="max-w-4xl mx-auto p-4 dark:bg-black">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Latest Blogs</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow-lg">
            <img src={`https://via.placeholder.com/600x400?text=Blog+Post+${index + 1}`} alt="Blog" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <div className="mb-2 flex justify-between items-center">
                <Badge variant="outline">Category</Badge>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <View className="h-4 w-4 mr-1" /> 100
                  <MessageSquare className="h-4 w-4 ml-4 mr-1" /> 5
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Blog Post Title</h3>
              <p className="text-gray-500 dark:text-gray-400">This is a short description of the blog post...</p>
              <div className="mt-4">
                <Button variant="link">Learn More</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline">Load More</Button>
      </div>
    </section>
  );
};

export default BlogSection_TW649;