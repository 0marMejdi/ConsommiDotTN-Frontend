import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
interface ContactProps {
    name: string,
    email: string,
    avatarSrc: string,
    avatarFallback: string,
    isSelected: boolean,
    onClick: () => void;
    conversationId : string;
}
// Contact component
export default function Contact({ name, email, avatarSrc, avatarFallback, isSelected, onClick } : ContactProps) {
    const [isHovered, setIsHovered] = useState(false);
    useEffect(()=>{
      console.log(avatarSrc)
    })
    return (
    <div
    className={`p-3 flex items-center cursor-pointer ${isSelected ? "bg-gray-200" : ""} ${isHovered ? "bg-gray-100" : ""}`}
    onClick={onClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <Avatar className="h-16 w-16">
        <AvatarImage src={"http://localhost:3000/"+avatarSrc} alt="Avatar" />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
    </div>
  );
}