"use client";

import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dribbble } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';

export default function WebsiteFooter_GOYMA() {
  return (
    <footer className="bg-gray-800 text-gray-300 p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="mt-2">Connecting the world one code at a time. We aim to offer the best in technology and innovation.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">Explore</h3>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-500">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-500">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-500">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <h3 className="font-bold text-white">Stay Updated</h3>
          <form className="mt-4 flex flex-col gap-4">
            <Input type="email" className="rounded dark:bg-gray-700 placeholder-gray-400" placeholder="Email Address" />
            <Button variant="secondary" className="w-full">Subscribe</Button>
          </form>
        </div>
        <div>
          <h3 className="font-bold text-white">Follow Us</h3>
          <div className="mt-4 flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-500">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-500">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" className="hover:text-blue-500">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://dribbble.com" className="hover:text-blue-500">
              <Dribbble className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center border-t border-gray-700 pt-8">
        Need help? Contact us via email <Mail className="inline-block h-4 w-4" /> support@example.com or call us <a href="tel:+123456789" className="hover:text-blue-500">+123 456 789</a>
      </div>
      <div className="mt-4 text-center text-gray-500">
        © 2023 All rights reserved.
      </div>
    </footer>
  );
}