"use client";

import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { ArrowRightSquare } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { ThumbsUp } from "lucide-react";

const BlogSection_079PH = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for multiple blog cards. Ideally, you'd map through an array of blog posts here */}
        <Card className="dark:bg-black">
          <CardHeader>
            <Avatar>
              <AvatarImage
                src="https://via.placeholder.com/150"
                alt="Blog Author"
              />
              <AvatarFallback>BA</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-lg font-bold">Blog Title</CardTitle>
            <CardDescription className="mt-2 text-gray-500 dark:text-gray-400">
              A brief summary about the blog content. Something intriguing to
              catch readers' attention.
            </CardDescription>
          </CardContent>
          <CardFooter className="flex items-center justify-between mt-4">
            <Button variant="outline" className="text-sm">
              Read More <ArrowRightSquare className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex space-x-2">
              <Facebook className="h-5 w-5 hover:text-blue-600 cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-pink-500 cursor-pointer" />
              <Linkedin className="h-5 w-5 hover:text-blue-500 cursor-pointer" />
              <ThumbsUp className="h-5 w-5 hover:text-green-500 cursor-pointer" />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default BlogSection_079PH;
