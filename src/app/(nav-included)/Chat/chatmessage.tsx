import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatMessageProps {
  text: string;
  avatarSrc: string;
  isUser?: boolean;
}
export default function ChatMessage({
  text,
  avatarSrc,
  isUser,
}: ChatMessageProps) {
  return (
    <div className={`flex items-center gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
    {!isUser && (
      <Avatar className="w-12 h-12 border-2 border-white">
        <AvatarImage alt="@shadcn" src={avatarSrc} />
        <AvatarFallback>US</AvatarFallback>
      </Avatar>
    )}
    <div className={`rounded-xl bg-gray-100 dark:bg-gray-800 p-4 ${isUser ? 'ml-auto' : 'mr-auto'}`}>{text}</div>
    {isUser && (
      <Avatar className="w-12 h-12 border-2 border-white">
        <AvatarImage alt="@shadcn" src={avatarSrc} />
        <AvatarFallback>US</AvatarFallback>
      </Avatar>
    )}
  </div>
  );
}
