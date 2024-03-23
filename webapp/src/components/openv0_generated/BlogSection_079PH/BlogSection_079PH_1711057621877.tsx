import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
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
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { BookmarkPlus } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Share2 } from 'lucide-react';
import { View } from 'lucide-react';
"use client";

const BlogSection_079PH = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6">
      <Tabs className="w-full">
        <TabsList className="flex space-x-1 border-b mb-4">
          <TabsTrigger value="featured" className="py-2 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700">Featured</TabsTrigger>
          <TabsTrigger value="latest" className="py-2 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700">Latest</TabsTrigger>
          <TabsTrigger value="all" className="py-2 px-4 text-sm font-medium text-center rounded-t-lg border-b-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700">All</TabsTrigger>
        </TabsList>
        <TabsContent value="featured">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for multiple featured blog cards. */}
            {/* This section can be dynamically filled */}
          </div>
        </TabsContent>
        {/* Other TabsContent for 'latest' and 'all' can also be added with similar grid layout */}
      </Tabs>
      <TooltipProvider>
        <Card className="mt-8 dark:bg-black">
          <CardHeader className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://via.placeholder.com/150" alt="Blog Author" />
              <AvatarFallback>BA</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg font-bold">Blog Title</CardTitle>
              <CardDescription className="mt-1 text-gray-500 dark:text-gray-400">By John Doe</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="mt-2 text-gray-500 dark:text-gray-400">A brief summary about the blog content. Something intriguing to catch readers' attention.</CardDescription>
          </CardContent>
          <CardFooter className="flex items-center justify-between mt-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="text-sm">Read More</Button>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-100 dark:bg-gray-800">Click to dive deeper!</TooltipContent>
            </Tooltip>
            <div className="flex space-x-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <BookmarkPlus className="h-5 w-5 hover:text-blue-600 cursor-pointer dark:hover:text-blue-400" />
                </TooltipTrigger>
                <TooltipContent className="bg-gray-100 dark:bg-gray-800">Bookmark</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <MessageSquare className="h-5 w-5 hover:text-green-500 cursor-pointer dark:hover:text-green-400" />
                </TooltipTrigger>
                <TooltipContent className="bg-gray-100 dark:bg-gray-800">Comments</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Share2 className="h-5 w-5 hover:text-yellow-500 cursor-pointer dark:hover:text-yellow-400" />
                </TooltipTrigger>
                <TooltipContent className="bg-gray-100 dark:bg-gray-800">Share</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <View className="h-5 w-5 hover:text-purple-500 cursor-pointer dark:hover:text-purple-400" />
                </TooltipTrigger>
                <TooltipContent className="bg-gray-100 dark:bg-gray-800">Views</TooltipContent>
              </Tooltip>
            </div>
          </CardFooter>
        </Card>
      </TooltipProvider>
    </div>
  );
};

export default BlogSection_079PH;