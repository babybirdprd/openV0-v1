"use client";

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
            <CardTitle>Lessons Taken</CardTitle>
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
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <p className="text-lg font-medium">John Doe</p>
                <p className="text-sm">johndoe@example.com</p>
              </div>
            </div>
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

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Progress Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p>Lessons</p>
              <Progress value={45} />
            </div>
            <div>
              <p>DSA</p>
              <Progress value={60} />
            </div>
            <div>
              <p>Projects</p>
              <Progress value={30} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4">
            <li>Resource 1</li>
            <li>Resource 2</li>
            <li>Resource 3</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStudentProgress_KJVZE;