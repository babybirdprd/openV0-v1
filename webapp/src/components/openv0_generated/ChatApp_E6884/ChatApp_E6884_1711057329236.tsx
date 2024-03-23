"use client";

import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Shell } from '@/components/ui/shell';
import { ShellContent } from '@/components/ui/shell';
import { ShellDescription } from '@/components/ui/shell';
import { ShellHeader } from '@/components/ui/shell';
import { ShellTitle } from '@/components/ui/shell';
import { ShellTrigger } from '@/components/ui/shell';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { Clock } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { useState } from 'react';

const ChatApp_E6884 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-full flex">
      <Shell isOpen={isOpen} onOpenChange={setIsOpen} className="w-80">
        <ShellTrigger className="hidden"></ShellTrigger>
        <ShellContent className="bg-white dark:bg-black">
          <ShellHeader>
            <ShellTitle className="text-lg font-semibold">Chat Participants</ShellTitle>
            <ShellDescription>Select a participant to start chatting</ShellDescription>
          </ShellHeader>
          <div className="p-4">
            <p className="text-black dark:text-white">Participant 1</p>
            <p className="mt-2 text-black dark:text-white">Participant 2</p>
            {/* Add more participants here */}
          </div>
        </ShellContent>
      </Shell>
      <div className="flex-1 flex flex-col bg-white dark:bg-black">
        <div className="flex justify-between items-center p-4 bg-black">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" onClick={() => setIsOpen(true)}>
                  <Avatar>
                    <AvatarImage src="#" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Select Chat Participant</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <h2 className="text-lg font-semibold text-white">ChatApp</h2>
          <Clock className="h-6 w-6 text-white" />
        </div>
        <ScrollArea className="flex-1 p-4 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? "justify-end" : ""}`}>
                {index % 2 === 0 ? (
                  <div className="flex items-end">
                    <Card className={`max-w-md ml-2 bg-blue-100 dark:bg-gray-700 rounded-xl`}>
                      <CardContent className="text-black dark:text-white">
                        <p className="text-sm mb-1">This is a chat message</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 text-right">12:35 PM</p>
                      </CardContent>
                    </Card>
                    <Avatar className="shrink-0">
                      <AvatarImage src="#" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </div>
                ) : (
                  <div className="flex items-end">
                    <Avatar className="shrink-0 mr-2">
                      <AvatarImage src="#" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <Card className={`max-w-md bg-blue-100 dark:bg-gray-700 rounded-xl`}>
                      <CardContent className="text-black dark:text-white">
                        <p className="text-sm mb-1">This is a chat message</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 text-left">12:35 PM</p>
                      </CardContent>
                    </Card>
                  </div>
                )}
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