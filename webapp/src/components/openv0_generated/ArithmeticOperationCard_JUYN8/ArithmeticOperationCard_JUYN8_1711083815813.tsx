"use client";

import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { HoverCard } from '@/components/ui/hover-card';
import { HoverCardContent } from '@/components/ui/hover-card';
import { HoverCardTrigger } from '@/components/ui/hover-card';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ArithmeticOperationCard_JUYN8() {
  const [mathQuestion, setMathQuestion] = useState("");

  useEffect(() => {
    generateMathQuestion();
  }, []);

  const generateMathQuestion = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operators = ['+', '-', 'x', '÷'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    let question = `${num1} ${operator} ${num2} = ?`;
    let answer = 0;
    
    switch (operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case 'x':
        answer = num1 * num2;
        break;
      case '÷':
        answer = Math.floor(num1 / num2);
        break;
      default:
        break;
    }
    
    setMathQuestion({ question, answer });
  };

  const handleCardClick = (answer) => {
    // Logic to check if answer is correct
  };

  return (
    <div className="flex flex-col items-center dark:bg-black">
      <div className="bg-gradient-to-br from-sky-200 to-blue-300 w-full h-full p-4">
        <h1 className="text-2xl font-bold my-4">Welcome to Math Learning App</h1>
        
        <div className="grid grid-cols-2 gap-4 my-4 w-full">
          <HoverCard>
            <HoverCardTrigger>
              <Card className="bg-blue-200 hover:bg-blue-300" onClick={() => handleCardClick(mathQuestion.answer)}>
                <CardHeader>
                  <CardTitle>Addition</CardTitle>
                  <CardDescription>{mathQuestion.question}</CardDescription>
                </CardHeader>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent>
              Hover to reveal more information
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
              <HoverCardTrigger>
              <Card className="bg-green-200 hover:bg-green-300" onClick={() => handleCardClick(mathQuestion.answer)}>
                <CardHeader>
                  <CardTitle>Subtraction</CardTitle>
                  <CardDescription>{mathQuestion.question}</CardDescription>
                </CardHeader>
              </Card>
              </HoverCardTrigger>
            <HoverCardContent>
              Hover to reveal more information
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <Card className="bg-yellow-200 hover:bg-yellow-300" onClick={() => handleCardClick(mathQuestion.answer)}>
                <CardHeader>
                  <CardTitle>Multiplication</CardTitle>
                  <CardDescription>{mathQuestion.question}</CardDescription>
                </CardHeader>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent>
              Hover to reveal more information
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <Card className="bg-red-200 hover:bg-red-300" onClick={() => handleCardClick(mathQuestion.answer)}>
                <CardHeader>
                  <CardTitle>Division</CardTitle>
                  <CardDescription>{mathQuestion.question}</CardDescription>
                </CardHeader>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent>
              Hover to reveal more information
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
}