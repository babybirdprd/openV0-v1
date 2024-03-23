"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LoginPage_1GCA1 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <div className="mb-4">
          <Input type="text" placeholder="Username" className="block w-full px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-500" />
        </div>
        <div className="mb-6">
          <Input type="password" placeholder="Password" className="block w-full px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-500" />
        </div>
        <Button variant="primary" className="w-full py-2 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-500">
          Log In
        </Button>
        <a href="#" className="text-sm text-blue-500 hover:underline mt-4 block text-center">Forgot Password?</a>
      </div>
    </div>
  );
}

export default LoginPage_1GCA1;