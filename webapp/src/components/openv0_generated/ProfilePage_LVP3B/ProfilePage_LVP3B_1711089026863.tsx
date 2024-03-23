"use client";

import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { TabsContent } from '@/components/ui/tabs';
import { TabsList } from '@/components/ui/tabs';
import { TabsTrigger } from '@/components/ui/tabs';

const ProfilePage_LVP3B = () => (
  <div className="bg-white dark:bg-black p-8">
    <Avatar className="mx-auto mb-4">
      <AvatarImage src="https://example.com/profile.jpg" alt="Profile Picture" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <Card className="w-full mb-8">
      <CardHeader>
        <CardTitle>User Details</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Name: John Doe</p>
        <p>Location: New York</p>
        <p>Role: Developer</p>
      </CardContent>
    </Card>
    <Card className="w-full mb-8">
      <CardHeader>
        <CardTitle>Bio</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </CardContent>
    </Card>
    <Card className="w-full mb-8">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Email: john.doe@example.com</p>
        <p>Phone: +1 234 567 890</p>
      </CardContent>
    </Card>
    <Tabs defaultValue="details" className="w-full">
      <TabsList className="grid grid-cols-2 gap-4 mb-8">
        <TabsTrigger value="details" className="text-center py-2 border-b-2 border-transparent hover:border-gray-700 dark:hover:border-gray-300">Details</TabsTrigger>
        <TabsTrigger value="settings" className="text-center py-2 border-b-2 border-transparent hover:border-gray-700 dark:hover:border-gray-300">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <Card>
          <CardContent>
            <p>This tab displays user details.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardContent>
            <p>This tab allows users to update their settings.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
    <Button className="w-full">Edit Profile</Button>
  </div>
)

export default ProfilePage_LVP3B