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
  id : number;
  name: string;
  status: string;
  price: string;
  description : string;
  userProfile : string;
}

export default function Product({
  name,
  status,
  price,
  description,
  userProfile,
}: Product) {

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
      <TableCell className="hidden md:table-cell">{description}</TableCell>
      <TableCell className="hidden md:table-cell">
       
        <Button variant="link"  > <a href={userProfile}>View Profile </a></Button>
      </TableCell>
      <TableCell style={{ position: "relative" }} className="text-center">
      </TableCell>
    </TableRow>
  );
}
