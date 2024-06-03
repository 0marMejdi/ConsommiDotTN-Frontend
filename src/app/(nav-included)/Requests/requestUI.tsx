import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";

interface RequestInterface {
  user: any;
  requeststatus: string;
  updateRequestStatus: (userId: number, status: string) => void;
}

export default function RequestUI({
  user,
  requeststatus,
  updateRequestStatus,
}: RequestInterface) {
  console.log(user, requeststatus);
  const isPending = requeststatus === "pending";
  const isAccepted = requeststatus === "approved";
  const isRefused = requeststatus === "rejected";
  const {toast} = useToast()

  const renderStatusBadge = () => {
    switch (requeststatus) {
      case "pending":
        return <Badge variant="outline">Pending</Badge>;
      case "approved":
        return <Badge variant="outline">Accepted</Badge>;
      case "rejected":
        return <Badge variant="outline">Refused</Badge>;
      default:
        return null;
    }
  };

  const onRevoke = () => {
    fetch("http://localhost:3000/demand/revoke/" + user.id, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((response) => response.json())
    .then((data) => {
      toast({
        variant: "default",
        title: "Request Denied",
        description: "The request has been denied"
      });
      updateRequestStatus(user.id, "rejected");
    });
  };

  const onGrant = () => {
    fetch("http://localhost:3000/demand/grant/" + user.id, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((response) => response.json())
    .then((data) => {
      toast({
        variant: "default",
        title: "Request Granted",
        description: "The request has been granted"
      });
      updateRequestStatus(user.id, "approved");
    });
  };

  const renderActionButton = () => {
    return (
      <>
        <Button
          variant="destructive"
          className="rounded-md"
          onClick={onRevoke}
          disabled={isRefused}
        >
          Revoke
        </Button>
        <Button
          variant="creative"
          className="rounded-md"
          onClick={onGrant}
          disabled={isAccepted}
        >
          Grant
        </Button>
      </>
    );
  };

  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        {/* Add content here if needed */}
      </TableCell>
      <TableCell className="font-medium">{user.name + " " + user.lastName}</TableCell>
      <TableCell>
        <Badge variant="outline">{user.role}</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{user.email}</TableCell>
      <TableCell className="hidden md:table-cell">{user.phone}</TableCell>
      <TableCell>{renderStatusBadge()}</TableCell>
      <TableCell className="hidden md:table-cell">
      </TableCell>
      <TableCell style={{ position: "relative" }} className="text-start">
        <div className="inline-flex justify-center items-center gap-4">
          {renderActionButton()}
        </div>
      </TableCell>
    </TableRow>
  );
}
