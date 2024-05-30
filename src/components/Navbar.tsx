
"use client";
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {Button } from "@/components/ui/button"
import { useState } from "react";
import { UserNav } from "./UserNav";
import { Search } from "./SearchBar/Search";
export default function NavBar() {
    const [number, setNumber] = useState(0);

  return (
    <nav className="z-50 fixed w-full flex flex-row items-center h-14 px-4 border-b border-gray-200/50 justify-between bg-gray-50 dark:bg-gray-950/60">
      <div className="flex flex-row">
  
      <div className="flex items-center  gap-5 text-sm font-medium">
      <Link className="flex items-center gap-2 text-sm font-medium pr-5" href="#">
        <ShoppingBagIcon className="w-5 h-5" />
        <span>Consommi</span>
      </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="/">
          Home
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="/Dashbord">
          Dashboard
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="/Profile">
          Profile
        </Link>
        </div>  
        <Search/>
      </div>
      <div className="flex flex-row justify-center items-center gap-5">
      <Button className="mr-1" size="icon" variant="ghost">
          <span className="sr-only">Toggle cart</span>
          {number>0 && <Badge className="absolute top-5 right-12 translate-x-3 -translate-y-2/3">{number}</Badge>}
        </Button>
        <div className="pr-5">
       <UserNav />
       </div>
          </div>
    </nav>
  )
}

function ShoppingBagIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

