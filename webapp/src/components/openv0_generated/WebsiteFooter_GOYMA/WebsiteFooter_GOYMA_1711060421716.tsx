import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Dribbble } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';
"use client";

export default function WebsiteFooter_GOYMA() {
  return (
    <footer className="bg-black text-white py-12 px-8 md:px-12 lg:px-20 space-y-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h3 className="font-bold text-lg">Stay Updated</h3>
          <form className="flex flex-col md:flex-row gap-4 mt-4">
            <Input type="email" className="flex-1 rounded dark:bg-gray-800 placeholder-gray-500 text-white" placeholder="Email Address" />
            <Button variant="secondary" className="w-full md:w-auto">Subscribe</Button>
          </form>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-8">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="mt-4 text-gray-400">Connecting the world one code at a time. We aim to offer the best in technology and innovation.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Explore</h3>
            <nav>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-blue-500">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-blue-500">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-blue-500">Services</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-blue-500">Portfolio</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-500">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <Separator />

        <div className="text-center">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-blue-500">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-500">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-blue-500">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://dribbble.com" className="text-gray-400 hover:text-blue-500">
              <Dribbble className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center text-gray-500 space-y-4 text-sm">
        <p>Need help? Contact us via email <Mail className="inline h-5 w-5" /> support@example.com or call us <a href="tel:+123456789" className="hover:text-blue-500">+123 456 789</a></p>
        <p>© 2023 All rights reserved.</p>
      </div>
    </footer>
  );
}