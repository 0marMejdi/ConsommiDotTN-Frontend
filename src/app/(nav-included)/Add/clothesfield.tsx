import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const ClothesFields = ({ specificDetails, handleInputChange } : any) => {
  return (
    <>
      <div>
        <Label htmlFor="brand">Brand</Label>
        <Input
          id="brand"
          name="brand"
          type="text"
          placeholder="Brand"
          value={specificDetails.brand}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="color">Color</Label>
        <Input
          id="color"
          name="color"
          type="text"
          placeholder="Color"
          value={specificDetails.color}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="functionality">Functionality</Label>
        <Input
          id="functionality"
          name="functionality"
          type="text"
          placeholder="Functionality"
          value={specificDetails.functionality}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="thickness">Thickness</Label>
        <Input
          id="thickness"
          name="thickness"
          type="number"
          placeholder="Thickness"
          value={specificDetails.thickness}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="height">Height</Label>
        <Input
          id="height"
          name="height"
          type="number"
          placeholder="Height"
          value={specificDetails.height}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="width">Width</Label>
        <Input
          id="width"
          name="width"
          type="number"
          placeholder="Width"
          value={specificDetails.width}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="material">Material</Label>
        <Input
          id="material"
          name="material"
          type="text"
          placeholder="Material"
          value={specificDetails.material}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="seasonality">Seasonality</Label>
        <Input
          id="seasonality"
          name="seasonality"
          type="text"
          placeholder="Seasonality"
          value={specificDetails.seasonality}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="size">Size</Label>
        <Input
          id="size"
          name="size"
          type="text"
          placeholder="Size"
          value={specificDetails.size}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="style">Style</Label>
        <Input
          id="style"
          name="style"
          type="text"
          placeholder="Style"
          value={specificDetails.style}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="type">Type</Label>
        <Input
          id="type"
          name="type"
          type="text"
          placeholder="Type"
          value={specificDetails.type}
          onChange={handleInputChange}
          required
        />
      </div>
    </>
  );
}

export default ClothesFields;
