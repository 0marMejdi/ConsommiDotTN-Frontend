import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Product from "./productpending";
import { Description } from "@radix-ui/react-toast";

export default function Products() {
  const products = [
    {
        id : 1,
      name: "Laser Lemonade Machine",
      price: "$499.99",
      status: "pending",
      description: "This is a description",
      userProfile: "/profile",
    },
    {
        id : 2,
      name: "Hypernova Headphones",
      price: "$199.99",
      status: "accepted",
      description: "This is a description",
      userProfile: "/profile",
    },
    {
        id : 3,
      name: "AeroGlow Desk Lamp",
      status: "refusedd",
      price: "$39.99",
      description: "This is a description",
      userProfile: "/profile",
    },
  ];

  return (
    <div className="p-16">
      <Card className="">
        <CardHeader className="space-y-1 pt-2 pl-3">
          <CardTitle className="text-lg">Products</CardTitle>
          <CardDescription>
            Manage your products and view their sales performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">
                  Description
                </TableHead>
                <TableHead className="hidden md:table-cell pl-6">
                  User Profile
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product, index) => (
                <Product key={index} {...product} />
              ))}
              {/* Add more Product components as needed */}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <div className="pb-10"></div>
    </div>
  );
}
