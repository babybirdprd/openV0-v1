"use client";

import { Menubar } from '@/components/ui/menubar';
import { MenubarContent } from '@/components/ui/menubar';
import { MenubarItem } from '@/components/ui/menubar';
import { MenubarMenu } from '@/components/ui/menubar';
import { MenubarSeparator } from '@/components/ui/menubar';
import { MenubarTrigger } from '@/components/ui/menubar';
import { Sheet } from '@/components/ui/sheet';
import { SheetContent } from '@/components/ui/sheet';
import { SheetDescription } from '@/components/ui/sheet';
import { SheetHeader } from '@/components/ui/sheet';
import { SheetTitle } from '@/components/ui/sheet';
import { SheetTrigger } from '@/components/ui/sheet';

const EcommerceDashboard_TSYVH = () => {
  return (
    <div className="h-screen flex flex-col">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <img src="logo.png" alt="Logo" className="h-8" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Home</MenubarItem>
            <MenubarItem>Shop</MenubarItem>
            <MenubarItem>Cart</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Profile</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Sheet>
        <SheetTrigger>
          <img src="logo.png" alt="Logo" className="h-8" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Explore our website</SheetDescription>
          </SheetHeader>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-blue-500">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500">
                Account
              </a>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default EcommerceDashboard_TSYVH;