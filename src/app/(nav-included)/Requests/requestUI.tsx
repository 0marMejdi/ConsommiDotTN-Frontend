import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";

interface RequestInterface {
  name: string;
  email: string;
  phone: string;
  status: string;
  requeststatus: string;
}

export default function RequestUI({
  name,
  email,
  status,
  phone,
  requeststatus,
}: RequestInterface) {
  const isPending = requeststatus === "Pending";
  const isAccepted = requeststatus === "Accepted";
  const isRefused = requeststatus === "Refused";

  const renderStatusBadge = () => {
    switch (requeststatus) {
      case "Pending":
        return <Badge variant="outline">Pending</Badge>;
      case "Accepted":
        return <Badge variant="outline">Accepted</Badge>;
      case "Refused":
        return <Badge variant="outline">Refused</Badge>;
      default:
        return null;
    }
  };

  const renderActionButton = () => {
    if (isAccepted) {
      return <Button variant="destructive" className="rounded-md">Revoke</Button>;
    } else if (isRefused) {
      return <Button variant="creative" className="rounded-md">Grant</Button>;
    } else {
      return (
        <>
          <Button
            variant="creative"
            className="rounded-md"
            disabled={isAccepted || isRefused}
          >
            Accept
          </Button>
          <Button
            variant="destructive"
            className="rounded-md"
            disabled={isAccepted || isRefused}
          >
            Refuse
          </Button>
        </>
      );
    }
  };

  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height={64}
          src="/giorno.jpg"
          width={64}
        />
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>
        <Badge variant="outline">{status}</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{email}</TableCell>
      <TableCell className="hidden md:table-cell">{phone}</TableCell>
      <TableCell>{renderStatusBadge()}</TableCell>
      <TableCell className="hidden md:table-cell">
      <Button variant="link">View Profile</Button>
      </TableCell>
      <TableCell style={{ position: "relative" }} className="text-start">
        <div className="inline-flex justify-center items-center gap-4">
          {renderActionButton()}
          
        </div>
      </TableCell>
    </TableRow>
  );
}
