import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs } from '@/components/ui/tabs';
import { TabsContent } from '@/components/ui/tabs';
import { TabsList } from '@/components/ui/tabs';
import { TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { SendHorizontal } from 'lucide-react';
import { useState } from 'react';
"use client";

const ChatAgentUI_SPPQG = () => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (message.trim() === '') {
      toast({ description: "Please enter a message before sending." });
      return;
    }
    toast({ description: "Message sent." });
    setMessage(""); // Reset message input
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 dark:bg-black flex justify-center items-start">
      <div className="w-full max-w-md">
        <Tabs defaultValue="chat" className="flex flex-col h-full bg-white dark:bg-gray-800 shadow rounded-lg">
          <TabsList className="flex space-x-1 border-b dark:border-gray-700 p-2">
            <TabsTrigger value="chat" className="px-4 py-2">Chat</TabsTrigger>
            <TabsTrigger value="settings" className="px-4 py-2">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="chat" className="flex-1 overflow-auto p-4">
            {/* Placeholder for chat messages */}
            <div className="text-gray-800 dark:text-gray-200 space-y-4">
              <p className="text-sm">
                Welcome to the support chat! 🎉
              </p>
              {/* Add more messages here */}
            </div>
          </TabsContent>
          <TabsContent value="settings" className="overflow-auto p-4">
            <div className="text-gray-800 dark:text-gray-200">
              <p>Settings content goes here...</p>
              {/* Settings content */}
            </div>
          </TabsContent>
          <div className="border-t dark:border-gray-700 px-4 py-2">
            <div className="flex items-center space-x-2">
              <Input 
                className="flex-1 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700" 
                placeholder="Type a message…" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button variant="ghost" onClick={handleSendMessage} className="p-2">
                <SendHorizontal className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </Button>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ChatAgentUI_SPPQG;