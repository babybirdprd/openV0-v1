"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { TabsContent } from '@/components/ui/tabs';
import { TabsList } from '@/components/ui/tabs';
import { TabsTrigger } from '@/components/ui/tabs';
import { BookPlus } from 'lucide-react';
import { MoreHorizontal } from 'lucide-react';

const BlogSection_TW649 = () => {
  return (
    <section className="max-w-4xl mx-auto p-4 dark:bg-black">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Latest Blogs</h2>
        <Button variant="secondary">
          <BookPlus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4 overflow-x-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="category1">Category 1</TabsTrigger>
          <TabsTrigger value="category2">Category 2</TabsTrigger>
          <TabsTrigger value="category3">Category 3</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4].map((post) => (
            <Card key={post} className="bg-white dark:bg-gray-800 overflow-hidden">
              <CardHeader className="h-48 bg-gray-200 dark:bg-gray-700" />
              <CardContent>
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">Blog Post Title</CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-400">This is a short description of the blog post...</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button variant="link">Read More</Button>
                <MoreHorizontal className="text-gray-500 dark:text-gray-400" />
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-8">
        <Button variant="outline">Load More</Button>
      </div>
    </section>
  );
};

export default BlogSection_TW649;