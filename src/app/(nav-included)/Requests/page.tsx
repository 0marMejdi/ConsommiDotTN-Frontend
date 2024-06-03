"use client"
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import SelectUI from "../AdminDashboard/selection"
import RequestUI from "./requestUI"
import { useEffect, useState } from "react"

export default function AdminDashboard() {
  const [requests, setRequests] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [filteredRequests, setFilteredRequests] = useState<any[]>([])

  useEffect(() => {
    fetch("http://localhost:3000/demand/received/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
      if (!res.ok) {
        window.location.href = "/Home"
      } else return res.json()
    }).then((data) => {
      setRequests(data)
      setFilteredRequests(data)
    })
  }, [])

  useEffect(() => {
    const filtered = requests.filter(request =>
      request.user.name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      request.user.lastName.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      request.user.email.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      request.user.phone.toLowerCase().startsWith(searchTerm.toLowerCase())
    )
    setFilteredRequests(filtered)
  }, [searchTerm, requests])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const updateRequestStatus = (userId: number, status: string) => {
    setRequests(prevRequests => prevRequests.map(request => 
      request.user.id === userId ? { ...request, status } : request
    ))
  }

  return (
    <div className="py-20 pl-10 pr-10">
      <Card className="">
        <CardHeader className="space-y-1 pt-2 pl-3">
          <CardTitle className="text-lg">Users</CardTitle>
          <CardDescription className="pb-4">
            Manage your user requests
          </CardDescription>
        </CardHeader>
        <div className="pb- flex items-center gap-2 justify-center">
          <SelectUI />
          <Input
            type="text"
            placeholder="Search..."
            className="w-48 sm:80"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button variant="outline" className="w-24 rounded-sm">Search</Button>
        </div>
        <CardContent className="pt-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead className="text-left">Name</TableHead>
                <TableHead className="text-left">Role</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead className="hidden md:table-cell">Phone</TableHead>
                <TableHead className="hidden md:table-cell">Request Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRequests && filteredRequests.map((request, index) => (
                <RequestUI key={index} user={request.user} requeststatus={request.status} updateRequestStatus={updateRequestStatus} />
              ))}
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
