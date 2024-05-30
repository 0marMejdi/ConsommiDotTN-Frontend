import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ChatWindow from "./ChatWindow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
export default function ProductUI() {
  const [showChat, setShowChat] = useState(true);

  const handleChatButtonClick = () => {
    setShowChat(true);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-start max-w-6xl px-4 mx-auto py-24 ">
      <div className="grid gap-4 md:gap-7 items-start order-2 md:order-1 pl-6">
        <div className="hidden md:flex items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl">Peugeot 301</h1>
            <div>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                <span className="font-medium">Mileage:</span> 120,000 km
              </p>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                <span className="font-medium">Transmission:</span> Automatic
              </p>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                <span className="font-medium">Fuel:</span> Gasoline
              </p>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                <span className="font-medium">Engine:</span> 1.2L 4-cylinder
              </p>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                <span className="font-medium">Drivetrain:</span> Front-wheel
                drive
              </p>
            </div>
          </div>
          <div className="text-4xl font-bold ml-auto">$30,000</div>
        </div>
        <form className="grid gap-4 md:gap-10">
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="color">
              Color
            </Label>
            <RadioGroup
              className="flex items-center gap-2"
              defaultValue="black"
              id="color"
            >
              <Label
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                htmlFor="color-black"
              >
                <RadioGroupItem id="color-black" value="black" />
                Black
              </Label>
            </RadioGroup>
            <Label className="text-base" htmlFor="color">
              Brand
            </Label>
            <RadioGroup
              className="flex items-center gap-2"
              defaultValue="black"
              id="color"
            >
              <Label
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                htmlFor="color-black"
              >
                <RadioGroupItem id="color-black" value="black" />
                Peugeot
              </Label>
            </RadioGroup>
          </div>
        </form>
        <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 p-4 shadow-lg z-50">
          <ChatWindow
            showChat={showChat}
            handleChatButtonClick={handleChatButtonClick}
          />
        </div>
      </div>
      <div className="grid gap-3 items-start order-1">
        <div className="flex md:hidden items-start">
          <div className="grid gap-4"></div>
        </div>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="">
                  <CardContent className=" aspect-round items-center justify-center p-1">
                    <img
                      src={
                        index === 0
                          ? "/giorno.jpg"
                          : index === 1
                          ? "/peugeot.jpg"
                          : "/peugeot.jpg"
                      }
                      alt=""
                      className="border sm:rounded-lg w-75 h-75"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
