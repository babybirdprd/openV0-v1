import { Card } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useEffect } from 'react';
import { useState } from 'react';
"use client";

export default function ArithmeticOperationCard_JUYN8() {
  const [mathQuestion, setMathQuestion] = useState({
    question: 'What is 3 + 4?',
    answer: 7,
  });

  useEffect(() => {
    generateMathQuestion();
  }, []);

  const generateMathQuestion = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operators = ['+', '-', 'x', '÷'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    const question = `${num1} ${operator} ${num2} = ?`;
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
    <div className="flex flex-col items-center dark:bg-black"  style={{background: "linear-gradient(to right, #87CEEB', '#1E90FF)"}}>
        <h1 className="text-2xl font-bold my-4">Welcome to Math Learning App</h1>

        <div className="grid grid-cols-2 gap-4 my-4 w-full">
          <Card className="bg-blue-200" onClick={() => handleCardClick(mathQuestion.answer)}>
            <CardHeader>
              <CardTitle>Addition</CardTitle>
              <CardDescription>{mathQuestion.question}</CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-green-200" onClick={() => handleCardClick(mathQuestion.answer)}>
            <CardHeader>
              <CardTitle>Subtraction</CardTitle>
              <CardDescription>{mathQuestion.question}</CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-yellow-200" onClick={() => handleCardClick(mathQuestion.answer)}>
            <CardHeader>
              <CardTitle>Multiplication</CardTitle>
              <CardDescription>{mathQuestion.question}</CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-red-200" onClick={() => handleCardClick(mathQuestion.answer)}>
            <CardHeader>
              <CardTitle>Division</CardTitle>
              <CardDescription>{mathQuestion.question}</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Progress value={50} className="w-3/4"/>
    </div>
  );
}