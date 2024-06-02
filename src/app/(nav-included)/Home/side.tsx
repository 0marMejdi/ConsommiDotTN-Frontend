import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { parseAsString, useQueryState, useQueryStates } from 'nuqs';
import PriceRangeSlider from "./pricerange";
import { Slider } from "@/components/ui/slider";

interface SidebarProps {
  onFilterSelect: (filter: { type: string; value: string }) => void;
}

const Sidebar  = ({ onFilterSelect } : any) => {
  const [pricerange,setPriceRange] = useState<number[]>([0,100])
  return (
    <Card className="bg-white text-black border border-gray-300 rounded-xl shadow-lg p-4">
      <Slider defaultValue={pricerange} max={100} step={1} onValueChange={(value) => setPriceRange(value)}
      onValueCommit={()=> {
        onFilterSelect({price : pricerange.join("-")})
      }}
      />
      <div className="relative flex justify-between text-gray-700 pt-2">
         <p className="text-gray-900 font-semibold"> ${pricerange[0]}
         </p>
         <p className="text-gray-900 font-semibold">
          ${pricerange[1]} 
          </p>
        </div>
      <CardHeader>
        <CardTitle className="text-lg font-bold tracking-tight font-new-york mb-4">
          Price Range
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <Button
            variant="ghost"
            className="shadow-md mb-2"
            onClick={() => {
              onFilterSelect(
                {order : "low"}
              )
            }}  
          >
            Low to High
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              onFilterSelect(
                {order : "high"}
              )
            }}  
            className="shadow-md mb-2"
          >
            High to Low
          </Button>
        </div>
        <CardHeader className="pt-2">
        <CardTitle className="text-lg font-bold tracking-tight font-new-york mb-4">
          Availability
          </CardTitle>
          <CardContent>
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                className="shadow-md mb-2"
                onClick={() => {
                  onFilterSelect(
                    {availability : "Available"}
                  )
                }}  
              >
                In Stock
              </Button>
              </div>
          </CardContent>
        </CardHeader>
      </CardContent>
      </Card>
  );
};

export default Sidebar;
