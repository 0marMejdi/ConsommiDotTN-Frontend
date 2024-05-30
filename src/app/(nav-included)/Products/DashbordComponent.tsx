import Image from "next/image"
import { MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Product from "./Product"

export default function Products() {
  const products = [
    {
      name: "Laser Lemonade Machine",
      status: "Draft",
      price: "$499.99",
      totalSales: 25,
      createdAt: "2023-07-12 10:42 AM",
      chatCount : 1,
    },
    {
      name: "Hypernova Headphones",
      status: "Active",
      price: "$129.99",
      totalSales: 100,
      createdAt: "2023-10-18 03:21 PM",
      chatCount : 5,
    },
    {
      name: "AeroGlow Desk Lamp",
      status: "Active",
      price: "$39.99",
      totalSales: 50,
      createdAt: "2023-11-29 08:15 AM",
      chatCount : 3,
    },
    {
      name: "TechTonic Energy Drink",
      status: "Draft",
      price: "$2.99",
      totalSales: 0,
      createdAt: "2023-12-25 11:59 PM",
      chatCount : 2,
    },
    {
      name: "Gamer Gear Pro Controller",
      status: "Active",
      price: "$59.99",
      totalSales: 75,
      createdAt: "2024-01-01 12:00 AM",
      chatCount : 1,
    },
    {
      name: "Luminous VR Headset",
      status: "Active",
      price: "$199.99",
      totalSales: 30,
      createdAt: "2024-02-14 02:14 PM",
      chatCount : 4,
    },
    {
      name: "Dynamic Dumbbells Set",
      status: "Draft",
      price: "$149.99",
      totalSales: 10,
      createdAt: "2024-03-17 09:30 AM",
      chatCount : 6,
    },
    {
      name: "Smart Smoothie Blender",
      status: "Active",
      price: "$79.99",
      totalSales: 40,
      createdAt: "2024-04-08 05:45 PM",
      chatCount : 7,
    },
    {
      name: "Compact Folding Bike",
      status: "Active",
      price: "$349.99",
      totalSales: 20,
      createdAt: "2024-05-22 11:10 AM",
      chatCount : 8,
    },
    {
      name: "Ultimate Yoga Mat",
      status: "Draft",
      price: "$29.99",
      totalSales: 5,
      createdAt: "2024-06-30 03:20 PM",
      chatCount : 9,
    },
  ];
  
  return (
    <div className="py-5 pl-10 pr-10">
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
          <TableHead>Status</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="hidden md:table-cell">Total Sales</TableHead>
          <TableHead className="hidden md:table-cell">Created at</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
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
      <CardFooter>
      </CardFooter>
    </Card>
    <div className="pb-10">
      </div>
      </div>
  )
}
