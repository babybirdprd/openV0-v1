import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
"use client";

export default function ContactSection_3478T() {
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
      <div className="absolute top-0 left-0 z-10 flex h-full w-full justify-center p-4 lg:justify-end lg:p-12">
        <Card className="max-w-md bg-white/90 dark:bg-black/90 backdrop-blur-lg">
          <CardContent>
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Contact Us</h2>
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input type="text" placeholder="Message" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}