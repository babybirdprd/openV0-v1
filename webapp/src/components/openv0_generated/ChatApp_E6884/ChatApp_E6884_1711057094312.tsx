import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet } from '@/components/ui/sheet';
import { SheetContent } from '@/components/ui/sheet';
import { SheetDescription } from '@/components/ui/sheet';
import { SheetHeader } from '@/components/ui/sheet';
import { SheetTitle } from '@/components/ui/sheet';
import { SheetTrigger } from '@/components/ui/sheet';
import { Clock } from 'lucide-react';
import { CornerLeftDown } from 'lucide-react';
import { CornerRightDown } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
"use client";

const ChatApp_E6884 = () => {
  return (
    <div className="w-full h-full flex">
      <Sheet className="w-80">
        <SheetTrigger className="p-4 bg-gray-700 text-white cursor-pointer">Select Chat Participant</SheetTrigger>
        <SheetContent className="bg-white dark:bg-black">
          <SheetHeader>
            <SheetTitle className="text-lg font-semibold">Chat Participants</SheetTitle>
            <SheetDescription>Select a participant to start chatting</SheetDescription>
          </SheetHeader>
          <div className="p-4">
            <p className="text-black dark:text-white">Participant 1</p>
            <p className="mt-2 text-black dark:text-white">Participant 2</p>
            {/* Add more participants here */}
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex-1 flex flex-col bg-white dark:bg-black">
        <div className="flex justify-between items-center p-4 bg-black">
          <Avatar>
            <AvatarImage src="#" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <h2 className="text-lg font-semibold text-white">ChatApp</h2>
          <Clock className="h-6 w-6 text-white" />
        </div>
        <ScrollArea className="flex-1 p-4 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? "justify-end" : ""}`}>
                {index % 2 === 0 ?
                  <>
                    <Card className={`max-w-md ml-2 bg-blue-100 dark:bg-gray-700 rounded-xl`}>
                      <CardContent className="text-black dark:text-white">
                        <div className="relative">
                          <p className="text-sm">This is a chat message</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">12:35 PM</p>
                          <CornerRightDown className="absolute -right-2 -bottom-2 h-4 w-4 text-blue-100 dark:text-gray-700" />
                        </div>
                      </CardContent>
                    </Card>
                    <Avatar className="shrink-0">
                      <AvatarImage src="#" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </> :
                  <div className="flex items-start">
                    <Avatar className="shrink-0 mr-2">
                      <AvatarImage src="#" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <Card className={`max-w-md bg-blue-100 dark:bg-gray-700 rounded-xl`}>
                      <CardContent className="text-black dark:text-white">
                        <div className="relative">
                          <p className="text-sm">This is a chat message</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">12:35 PM</p>
                          <CornerLeftDown className="absolute -left-2 -bottom-2 h-4 w-4 text-blue-100 dark:text-gray-700" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                }
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-900">
          <Input className="w-full bg-gray-200 dark:bg-gray-800 rounded-full p-2 mr-2" placeholder="Type a message..." />
          <MessageSquare className="h-6 w-6 text-gray-800 dark:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChatApp_E6884;