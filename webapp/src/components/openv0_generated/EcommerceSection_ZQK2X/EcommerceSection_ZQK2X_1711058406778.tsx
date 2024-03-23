"use client";

import { Alert } from '@/components/ui/alert';
import { AlertDescription } from '@/components/ui/alert';
import { AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Dialog } from '@/components/ui/dialog';
import { DialogContent } from '@/components/ui/dialog';
import { DialogDescription } from '@/components/ui/dialog';
import { DialogHeader } from '@/components/ui/dialog';
import { DialogTitle } from '@/components/ui/dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { SelectContent } from '@/components/ui/select';
import { SelectItem } from '@/components/ui/select';
import { SelectTrigger } from '@/components/ui/select';
import { SelectValue } from '@/components/ui/select';
import { Tabs } from '@/components/ui/tabs';
import { TabsContent } from '@/components/ui/tabs';
import { TabsList } from '@/components/ui/tabs';
import { TabsTrigger } from '@/components/ui/tabs';
import { Toggle } from '@/components/ui/toggle';
import { ChevronRight } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Star } from 'lucide-react';

const EcommerceSection_ZQK2X = () => {
  return (
    <div className="flex flex-col gap-8 p-4 dark:bg-black">
      <Alert>
        <ShoppingCart className="h-4 w-4"/>
        <AlertTitle>Special Offer!</AlertTitle>
        <AlertDescription>Don't miss out on our exclusive sale.</AlertDescription>
      </Alert>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold dark:text-white">Featured Products</h2>
        <Button variant="outline">
          View all
          <ChevronRight className="h-4 w-4"/>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>Product {i}</CardTitle>
              <CardDescription>$19.99</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="dark:text-white">This is a great product.</p>
            </CardContent>
            <CardFooter>
              <Button>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="description" className="w-full dark:text-white">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <p>Detailed product description goes here.</p>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="flex flex-col gap-2">
            <p><Star className="inline-block h-4 w-4 text-yellow-400" /> Great product!</p>
            <p><Star className="inline-block h-4 w-4 text-yellow-400" /> Loved it, highly recommend!</p>
          </div>
        </TabsContent>
      </Tabs>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Filter Products</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Filter Options</DialogTitle>
            <DialogDescription>Filter products by category, price, and more.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Maximum Price" />
            <Toggle>On Sale Only</Toggle>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EcommerceSection_ZQK2X;