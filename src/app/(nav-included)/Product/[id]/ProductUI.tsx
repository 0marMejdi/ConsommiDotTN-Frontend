import { useEffect, useState } from "react";
import ChatWindow from "../cars/ChatWindow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductUI({ productId }: any) {
  const [showChat, setShowChat] = useState(true);
  const [product, setProduct] = useState<any>(null);

  const handleChatButtonClick = () => {
    setShowChat(true);
  };

  useEffect(() => {
    fetch("http://localhost:3000/product/" + productId)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-start max-w-6xl px-4 mx-auto py-24">
      <div className="grid gap-4 md:gap-7 items-start order-2 md:order-1 pl-6">
        <div className="hidden md:flex items-start p-5">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
            <div>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark pt-9">
                <span className="font-extrabold">Description:</span> {product.description}
              </p>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                <span className="font-extrabold">Category:</span> {product.category}
              </p>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                <span className="font-extrabold">Location:</span> {product.location}
              </p>
            </div>
          </div>
          {product.discount > 0 && 
          <div className="pl-6"> 
          <div className="text-3xl font-bold ml-auto line-through">${product.price}</div>
          <div className="text-3xl font-bold ml-auto">${(product.price*(1-product.discount/100)).toFixed(2)}</div> 
          </div>
            }
            {product.discount == 0 && 
            <div className="pl-6">
            <div className="text-3xl font-bold ml-auto">${product.price}</div>
            </div>
            }
        </div>
        <form className="grid gap-4 md:gap-10">
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
                  <CardContent className="aspect-round items-center justify-center p-1">
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
