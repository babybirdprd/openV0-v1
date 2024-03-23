"use client";

import { Accordion } from '@/components/ui/accordion';
import { AccordionContent } from '@/components/ui/accordion';
import { AccordionItem } from '@/components/ui/accordion';
import { AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs } from '@/components/ui/tabs';
import { TabsContent } from '@/components/ui/tabs';
import { TabsList } from '@/components/ui/tabs';
import { TabsTrigger } from '@/components/ui/tabs';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@/components/ui/tooltip';
import { IoInformationCircleOutline } from 'react-icons/io5';

const DocumentationSite_ESLDV = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 dark:bg-black">
      <Tabs defaultValue="getting-started" className="bg-white dark:bg-gray-800 rounded-md shadow-lg">
        <TabsList className="flex space-x-4 my-4">
          <TabsTrigger value="getting-started" className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300 cursor-pointer">
            Getting Started
          </TabsTrigger>
          <TabsTrigger value="features" className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300 cursor-pointer">
            Features
          </TabsTrigger>
          <TabsTrigger value="faq" className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300 cursor-pointer">
            FAQ
          </TabsTrigger>
        </TabsList>
        <TabsContent value="getting-started" className="p-4">
          <h2 className="text-2xl mb-4">Getting Started</h2>
          <Accordion>
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer">Installation</AccordionTrigger>
              <AccordionContent>Follow the installation guide to get started.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="cursor-pointer">Setup</AccordionTrigger>
              <AccordionContent>Set up your environment for development.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="cursor-pointer">Dependencies</AccordionTrigger>
              <AccordionContent>Check required dependencies before proceeding.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="cursor-pointer">Usage</AccordionTrigger>
              <AccordionContent>Refer to documentation for usage instructions.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="features" className="p-4">
          <h2 className="text-2xl mb-4">Features</h2>
          <Accordion>
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer">Search</AccordionTrigger>
              <AccordionContent>Use the search functionality to find specific information.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="cursor-pointer">Categories</AccordionTrigger>
              <AccordionContent>Explore different categories of documentation.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="cursor-pointer">Filters</AccordionTrigger>
              <AccordionContent>Apply filters for better search results.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="faq" className="p-4">
          <h2 className="text-2xl mb-4">FAQ</h2>
          <Input type="text" placeholder="Search FAQs..." className="w-full mb-4" />
          <Accordion>
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer">How to get support?</AccordionTrigger>
              <AccordionContent>Contact our support team for assistance.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="cursor-pointer">Troubleshooting</AccordionTrigger>
              <AccordionContent>Find solutions to common issues.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="cursor-pointer">Feedback</AccordionTrigger>
              <AccordionContent>Share your feedback for improvement.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Info<IoInformationCircleOutline className="ml-2" /></Button>
          </TooltipTrigger>
          <TooltipContent className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 shadow-md rounded-md">Additional information here.</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default DocumentationSite_ESLDV;