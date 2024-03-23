import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dribbble } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';
"use client";

export default function WebsiteFooter_GOYMA() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 space-y-8 dark:bg-black">
      <div className="max-w-7xl mx-auto space-y-8">
        <section className="space-y-4">
          <h3 className="text-xl font-bold">Stay Updated</h3>
          <form className="space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
            <Input type="email" className="flex-1 rounded bg-gray-800 placeholder-gray-400 text-white" placeholder="Your Email" />
            <Button variant="secondary">Subscribe</Button>
          </form>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <nav className="space-y-4">
            <h3 className="text-xl font-bold">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </nav>
          <div>
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="mt-2 text-gray-400">Connecting the world one code at a time. We aim to offer the best in technology and innovation.</p>
          </div>
          <div className="flex justify-center md:justify-end gap-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <Facebook className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
              <Instagram className="h-8 w-8" />
            </a>
            <a href="https://dribbble.com" className="text-gray-400 hover:text-white">
              <Dribbble className="h-8 w-8" />
            </a>
          </div>
        </section>

        <section className="text-center text-gray-500 text-xs">
          <p>Need help? Contact us via email <Mail className="inline h-4 w-4" /> support@example.com or call us <a href="tel:+123456789" className="hover:text-blue-500">+123 456 789</a></p>
          <p>© 2023 All rights reserved.</p>
        </section>
      </div>
    </footer>
  );
}