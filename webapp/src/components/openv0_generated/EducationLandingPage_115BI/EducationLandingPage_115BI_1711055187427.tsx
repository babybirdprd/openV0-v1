"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { NavigationMenuList } from "@/components/ui/navigation-menu";
import { Tabs } from "@/components/ui/tabs";
import { TabsContent } from "@/components/ui/tabs";
import { TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { BookOpen } from "lucide-react";
import { Mail } from "lucide-react";
import { Newspaper } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { Users } from "lucide-react";

const EducationLandingPage_115BI = () => {
  const { toast } = useToast();

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white dark:bg-black p-4">
        <NavigationMenu>
          <NavigationMenuList className="flex justify-between items-center">
            <div className="text-xl font-bold">Learnzo</div>
            <div className="space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink href="#">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#">Courses</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#">About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Hero Section */}
      <div className="bg-gray-200 dark:bg-black text-center p-16">
        <h1 className="text-5xl font-bold mb-4">
          Learn MERN Stack with Arnab Biswas
        </h1>
        <p className="text-xl mb-8">
          Master MERN stack development with hands-on projects and real-world
          applications.
        </p>
        <Button>Enroll Now</Button>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white dark:bg-black">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Learnzo?
        </h2>
        <div className="flex justify-around">
          <div>
            <Newspaper className="h-8 w-8 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-center">
              Updated Content
            </h3>
          </div>
          <div>
            <BookOpen className="h-8 w-8 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-center">
              Comprehensive Curriculum
            </h3>
          </div>
          <div>
            <Users className="h-8 w-8 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-center">
              Community Support
            </h3>
          </div>
        </div>
      </div>

      {/* Course Content Section */}
      <Tabs defaultValue="module1" className="bg-gray-100 dark:bg-black py-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="module1">Module 1</TabsTrigger>
          <TabsTrigger value="module2">Module 2</TabsTrigger>
          <TabsTrigger value="module3">Module 3</TabsTrigger>
        </TabsList>
        <TabsContent value="module1">Introduction to MERN stack.</TabsContent>
        <TabsContent value="module2">
          Building your first application.
        </TabsContent>
        <TabsContent value="module3">
          Advanced techniques and deployment.
        </TabsContent>
      </Tabs>

      {/* Testimonials */}
      <div className="bg-white dark:bg-black py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Students Say
        </h2>
        {/* Placeholder for testimonials */}
        <Card>
          <CardHeader>
            <CardTitle>John Doe</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              This course has been a game-changer for my web development career.
              Highly recommended!
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <div className="bg-gray-200 dark:bg-black text-center p-16">
        <h2 className="text-3xl font-bold mb-4">
          Ready to start your journey?
        </h2>
        <p className="text-xl mb-8">
          Enroll now and take the first step towards becoming a MERN stack
          developer.
        </p>
        <Button
          onClick={() =>
            toast({
              title: "Enrollment Successful!",
              description: "Welcome to Learnzo."
            })
          }>
          Enroll Now
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold">Learnzo</h3>
            <p>Teaching MERN Stack to the world.</p>
          </div>
          <div>
            <Mail className="inline-block h-6 w-6 mr-2" />
            <span>contact@learnzo.com</span>
            <br />
            <PhoneCall className="inline-block h-6 w-6 mr-2" />
            <span>+123 456 7890</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EducationLandingPage_115BI;
