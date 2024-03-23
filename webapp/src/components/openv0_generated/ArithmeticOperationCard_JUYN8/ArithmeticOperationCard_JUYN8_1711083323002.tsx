"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Divide, Plus, X } from 'lucide-react';
import { Minus } from 'lucide-react';

export default function ArithmeticOperationCard_JUYN8() {
  return (
    <div className="flex flex-col items-center dark:bg-black">
      <h1 className="text-2xl font-bold my-4">Welcome to Math Learning App</h1>
      <div className="grid grid-cols-2 gap-4 my-4 w-full">
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Addition</CardTitle>
            <CardDescription>Practice addition problems here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <input type="number" className="w-16 p-2 border rounded dark:bg-gray-800" placeholder="Enter number" />
              <Plus className="h-6 w-6 dark:text-white" />
              <input type="number" className="w-16 p-2 border rounded dark:bg-gray-800" placeholder="Enter number" />
              <span>=</span>
              <input type="number" className="w-16 p-2 border rounded dark:bg-gray-800" placeholder="Result" />
              <Button variant="outline" className="dark:text-white">Check</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Subtraction</CardTitle>
            <CardDescription>Practice subtraction problems here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <input type="number" className="w-16 p-2 border rounded dark:bg-gray-800" placeholder="Enter number" />
              <Minus className="h-6 w-6 dark:text-white" />
              <input type="number" className="w-16 p-2 border rounded dark:bg-gray-800" placeholder="Enter number" />
              <span>=</span>
              <input type="number" className="w-16 p-2 border rounded dark:bg-gray-800" placeholder="Result" />
              <Button variant="outline" className="dark:text-white">Check</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Multiplication</CardTitle>
            <CardDescription>Practice multiplication problems here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <input type="number" className="w-16 p-2 border rounded dark:bg-gray-800" placeholder="Enter number" />
              <X className="h-6 w-6 dark:text-white" />
              <input type="number" className="w-16 p-2 border rounded dark:bg-gray-800" placeholder="Enter number" />
              <span>=</span>
              <input type="number" className="w-16 p-2 border rounded dark:bg-gray-800" placeholder="Result" />
              <Button variant="outline" className="dark:text-white">Check</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Division</CardTitle>
            <CardDescription>Practice division problems here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <input type="number" className="w-16 p-2 border rounded dark:bg-gray-800" placeholder="Enter number" />
              <Divide className="h-6 w-6 dark:text-white" />
              <input type="number" className="w-16 p-2 border rounded dark:bg-gray-800" placeholder="Enter number" />
              <span>=</span>
              <input type="number" className="w-16 p-2 border rounded dark:bg-gray-800" placeholder="Result" />
              <Button variant="outline" className="dark:text-white">Check</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Progress value={50} className="w-3/4" />
    </div>
  );
}