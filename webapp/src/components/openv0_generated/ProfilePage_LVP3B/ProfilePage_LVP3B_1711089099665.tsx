import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
"use client";

const ProfilePage_LVP3B = () => (
  <div className="bg-white dark:bg-black p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <Avatar className="mx-auto">
        <AvatarImage src="https://example.com/profile.jpg" alt="Profile Picture" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
    <div>
      <Card>
        <CardHeader>
          <CardTitle>User Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Name: John Doe</p>
          <p>Location: New York</p>
          <p>Role: Developer</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Project Name: Example Project</p>
          <p>Status: In Progress</p>
          <p>Deadline: 01/01/2023</p>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Login History</CardTitle>
      </CardHeader>
      <CardContent>
        <p> - Login: 12/08/2022 10:30 AM</p>
        <p> - Logout: 12/08/2022 11:00 AM</p>
        <p> - Location: New York</p>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Activity Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Activities:</p>
        <p> - Created new project</p>
        <p> - Updated profile information</p>
      </CardContent>
    </Card>

  </div>
)

export default ProfilePage_LVP3B