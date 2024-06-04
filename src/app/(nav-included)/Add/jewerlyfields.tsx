// JewelryFields.js
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const JewelryFields = ({ specificDetails, handleInputChange } : any) => {
  return (
    <>
      <div>
        <Label htmlFor="material">Material</Label>
        <Input
          id="material"
          name="material"
          type="text"
          placeholder="Material"
          value={specificDetails.material}
          onChange={handleInputChange}
          required
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
};

export default JewelryFields;
