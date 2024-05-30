/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JV11i9iTIaj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ChatComponent() {
  return (
    <div className="flex flex-col h-[480px] border border-gray-200 rounded-lg dark:border-gray-800">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <Avatar className="w-10 h-10">
            <AvatarImage alt="@ellie" src="/placeholder-user.jpg" />
            <AvatarFallback>EL</AvatarFallback>
          </Avatar>
          <div className="font-semibold">Ellie Lee</div>
        </div>
        <Button size="sm" variant="ghost"></Button>
      </div>
      <div className="flex-1 flex flex-col justify-end gap-4 p-4">
        <div className="flex items-end gap-2">
          <div className="rounded-xl bg-gray-100 dark:bg-gray-800 w-full p-4">
            Hi there! 👋
          </div>
          <Avatar className="w-8 h-8 border-2 border-white">
            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-end gap-2">
          <div className="rounded-xl bg-gray-100 dark:bg-gray-800 w-full p-4">
            I received the info. I'll take a look and get back to you shortly.
          </div>
          <Avatar className="w-8 h-8 border-2 border-white">
            <AvatarImage alt="@ellie" src="/placeholder-user.jpg" />
            <AvatarFallback>EL</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-end gap-2">
          <div className="rounded-xl bg-gray-100 dark:bg-gray-800 w-full p-4">
            Sounds good! Take your time. 🙂
          </div>
          <Avatar className="w-8 h-8 border-2 border-white">
            <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 p-4">
          <div className="grid gap-0.5">
            <Input
              type="text"
              id="message"
              onChange={()=>{}}
              placeholder="Type your message"
              className="text-xs text-gray-500 dark:text-gray-400 w-96 sm:w-96 md:w-96 lg:w-96"
            />{" "}
          </div>
          <Button className="ml-auto" size="sm">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

function CameraIcon(props: any) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}
