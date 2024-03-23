import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SendHorizontal } from 'lucide-react';
import { useState } from 'react';
"use client";

export default function ContactSection_3478T() {
  const [messageSent, setMessageSent] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    // Here you would usually integrate your message sending logic
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 5000);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Map background */}
      <div className="absolute inset-0 z-0">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ filter: 'opacity(0.7)' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.835596134337!2d-0.1391443!3d51.516886350000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3330b7e3f7%3A0x820a9c2e4e738556!2sCentral%20London%2C%20London!5e0!3m2!1sen!2suk!4v1664286018643!5m2!1sen!2suk"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      {/* Contact form */}
      <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center lg:justify-start p-4 lg:p-12">
        <Card className="max-w-md bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-lg rounded-lg">
          <CardContent>
            <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Contact Us</h2>
            <form onSubmit={sendMessage} className="space-y-4">
              <Input type="text" placeholder="Your Name" className="w-full" />
              <Input type="email" placeholder="Your Email" className="w-full" />
              <Input type="text" as="textarea" placeholder="Your Message" className="w-full h-40 p-2" />
              <CardFooter className="flex justify-end">
                <Button className="mt-4 bg-blue-500 text-white dark:bg-blue-400 dark:text-black hover:bg-blue-600 dark:hover:bg-blue-500 flex items-center" type="submit">
                  <SendHorizontal className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardFooter>
            </form>
          </CardContent>
          {messageSent && (
            <div className="p-4 mt-4 text-sm text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-700 rounded-lg">
              Your message has been sent successfully!
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}