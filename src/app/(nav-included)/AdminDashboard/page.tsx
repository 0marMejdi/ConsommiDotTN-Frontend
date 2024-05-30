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
import UserUI from "./userrow"
import PageLayout from "@/components/PageLayout"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import SelectUI from "./selection"
export default function AdminDashboard() {
    const users = [
        {
            name : "John",
            email : "johndoe@me.com",
            status : "Merchant",
            address : "123 Main St",
            phone : "123-456-7890",
            createdAt : "2022-01-01",
        },
        {
            name : "Jane",
            email : "janedoe@me.com",
            status : "Consumer",
            address : "456 Main St",
            phone : "123-456-7890",
            createdAt : "2022-01-01",
        },
        {
            name : "Bob",
            email : "bobdoe@me.com",
            status : "Merchant",
            address : "789 Main St",
            phone : "123-456-7890",
            createdAt : "2022-01-01",
        },
    ]
  return (

    <div className="py-20 pl-10 pr-10">
    <Card className="">
      <CardHeader className="space-y-1 pt-2 pl-3">
        <CardTitle className="text-lg">Users</CardTitle>
        <CardDescription className="pb-4">
          Manage your users and their permissions.
        </CardDescription>
      </CardHeader>
      <div className="pb- flex items-center gap-2 justify-center">
        <SelectUI />
        <Input
          type="text"
          placeholder="Search..."
          className="w-48 sm:80" 
        />
        <Button variant="outline" className="w-24 rounded-sm " >Search</Button>
        </div>
      <CardContent>
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead className="text-left">Name</TableHead>
          <TableHead className="text-left">Status</TableHead>
          <TableHead className="hidden md:table-cell">Email</TableHead>
          <TableHead className="hidden md:table-cell">Phone</TableHead>
          <TableHead className="hidden md:table-cell">Address</TableHead>
          <TableHead className="hidden md:table-cell">Created</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {users.map((user, index) => (
        <UserUI key={index} {...user} />
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
