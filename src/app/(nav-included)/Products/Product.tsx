import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

interface Product {
  name: string;
  status: string;
  price: string;
  totalSales: number;
  createdAt: string;
  chatCount: number;
}

export default function Product({
  name,
  status,
  price,
  totalSales,
  createdAt,
  chatCount,
}: Product) {
  const handleViewChat = () => {
    // Logic to handle viewing chat related to this product
    console.log(`View chat for ${name}`);
  };

  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src="/giorno.jpg"
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>
        <Badge variant="outline">{status}</Badge>
      </TableCell>
      <TableCell>{price}</TableCell>
      <TableCell className="hidden md:table-cell">{totalSales}</TableCell>
      <TableCell className="hidden md:table-cell">{createdAt}</TableCell>
      <TableCell style={{ position: "relative" }} className="text-center">
        <div className="inline-flex justify-center items-center gap-4">
        <Button size="sm" className="top-3 posi">
          <span className="pl-3">View chat</span>
          {chatCount > 0 && (
            <span
              className="relative -top-4 -right-4 flex h-4 w-4 items-center
               justify-center rounded-full bg-red-500 text-xs font-bold text-white"
            >
              {chatCount}
            </span>
          )}
        </Button>
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="pr-2">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem> 
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        </div>

      </TableCell>
    </TableRow>
  );
}
