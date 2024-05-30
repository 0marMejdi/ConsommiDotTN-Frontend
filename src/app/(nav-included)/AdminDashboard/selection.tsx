import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectUI() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Field" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Field</SelectLabel>
          <SelectItem value="Name" >Name</SelectItem>
          <SelectItem value="Email"> Email</SelectItem>
          <SelectItem value="Phone">Phone</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
