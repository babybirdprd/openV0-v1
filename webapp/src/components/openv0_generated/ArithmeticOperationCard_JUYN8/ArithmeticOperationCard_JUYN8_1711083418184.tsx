"use client";

import { Card } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

export default function ArithmeticOperationCard_JUYN8() {
  const [mathQuestion, setMathQuestion] = useState("What is 3 + 4?");

  const handleCardClick = (answer) => {
    // Logic to check if answer is correct
  };

  return (
    <div className="flex flex-col items-center dark:bg-black">
      <h1 className="text-2xl font-bold my-4">Welcome to Math Learning App</h1>

      <div className="grid grid-cols-2 gap-4 my-4 w-full">
        <Card className="bg-blue-200" onClick={() => handleCardClick("7")}>
          <CardHeader>
            <CardTitle>Addition</CardTitle>
            <CardDescription>{mathQuestion}</CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-green-200" onClick={() => handleCardClick("3")}>
          <CardHeader>
            <CardTitle>Subtraction</CardTitle>
            <CardDescription>{mathQuestion}</CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-yellow-200" onClick={() => handleCardClick("12")}>
          <CardHeader>
            <CardTitle>Multiplication</CardTitle>
            <CardDescription>{mathQuestion}</CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-red-200" onClick={() => handleCardClick("2")}>
          <CardHeader>
            <CardTitle>Division</CardTitle>
            <CardDescription>{mathQuestion}</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Progress value={50} className="w-3/4" />
    </div>
  );
}