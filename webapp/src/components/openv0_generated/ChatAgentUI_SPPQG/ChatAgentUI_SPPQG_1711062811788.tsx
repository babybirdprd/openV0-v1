"use client";

import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { PaperClip } from 'lucide-react';
import { SendHorizontal } from 'lucide-react';
import { SmilePlus } from 'lucide-react';
import { Volume1 } from 'lucide-react';
import { useState } from 'react';

const ChatAgentUI_SPPQG = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    setMessage(""); // This would ideally send the message to the chat, but since we're not implementing logic, just reset.
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 dark:bg-black">
      <Card className="max-w-md mx-auto rounded-lg border bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <ScrollArea className="h-96">
          <CardContent className="space-y-4">
            {/* Placeholder for messages */}
            <div className="flex items-end justify-end">
              <div className="max-w-xs rounded-lg bg-blue-500 p-2 text-white dark:bg-blue-700">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span>Hello! How can I assist you today?</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Agent, 2 mins ago</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div className="flex items-start">
              <div className="max-w-xs rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span>Looking for account support.</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>You, just now</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </CardContent>
        </ScrollArea>
        <CardFooter className="border-t dark:border-gray-700">
          <div className="flex items-center space-x-2 p-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Input 
              className="flex-1 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700" 
              placeholder="Type a message…" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" onClick={handleSendMessage}>
                    <SendHorizontal className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Send Message</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost">
                    <SmilePlus className="h-6 w-6" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add Emojis</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost">
                    <PaperClip className="h-6 w-6" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Attach Files</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost">
                    <Volume1 className="h-6 w-6" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Send Voice Message</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChatAgentUI_SPPQG;