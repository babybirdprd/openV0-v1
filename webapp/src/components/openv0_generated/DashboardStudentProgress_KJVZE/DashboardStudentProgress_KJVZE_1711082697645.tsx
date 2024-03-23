"use client";

import { Accordion } from '@/components/ui/accordion';
import { AccordionContent } from '@/components/ui/accordion';
import { AccordionItem } from '@/components/ui/accordion';
import { AccordionTrigger } from '@/components/ui/accordion';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const DashboardStudentProgress_KJVZE = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Lessions Taken</CardTitle>
            <CardDescription>10/20</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={50} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>DSA Exercises Completed</CardTitle>
            <CardDescription>15/30</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={50} />
          </CardContent>
        </Card>
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Hackathons & Projects Completed</CardTitle>
            <CardDescription>5/10</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={50} />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <Avatar>
              <AvatarImage src="profile-image-url.jpg" alt="User Profile" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <p>Name: John Doe</p>
            <p>Email: johndoe@example.com</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Daily Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Activities for today...</p>
          </CardContent>
        </Card>
      </div>

      <section className="mt-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="resources">
            <AccordionTrigger>Additional Resources</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4">
                <li>Resource 1</li>
                <li>Resource 2</li>
                <li>Resource 3</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default DashboardStudentProgress_KJVZE;