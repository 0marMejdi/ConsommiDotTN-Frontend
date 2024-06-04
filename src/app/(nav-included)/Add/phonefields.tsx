import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const PhoneFields = ({ specificDetails, handleInputChange } : any) => {
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
        <Label htmlFor="model">Model</Label>
        <Input
          id="model"
          name="model"
          type="text"
          placeholder="Model"
          value={specificDetails.model}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="storage">Storage (GB)</Label>
        <Input
          id="storage"
          name="storage"
          type="number"
          placeholder="Storage"
          value={specificDetails.storage}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="ram">RAM (GB)</Label>
        <Input
          id="ram"
          name="ram"
          type="number"
          placeholder="RAM"
          value={specificDetails.ram}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="screenSize">Screen Size (inches)</Label>
        <Input
          id="screenSize"
          name="screenSize"
          type="number"
          placeholder="Screen Size"
          value={specificDetails.screenSize}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="camera">Camera (MP)</Label>
        <Input
          id="camera"
          name="camera"
          type="number"
          placeholder="Camera"
          value={specificDetails.camera}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="battery">Battery (mAh)</Label>
        <Input
          id="battery"
          name="battery"
          type="number"
          placeholder="Battery"
          value={specificDetails.battery}
          onChange={handleInputChange}
          required
        />
      </div>
    </>
  );
}

export default PhoneFields;
