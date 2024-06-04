import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const TechFields = ({ specificDetails, handleInputChange } :any) => {
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
      <div>
        <Label htmlFor="model">Model</Label>
        <Input
          id="model"
          name="model"
          type="text"
          placeholder="Model"
          value={specificDetails.model}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Label htmlFor="features">Features</Label>
        <Input
          id="features"
          name="features"
          type="text"
          placeholder="Features"
          value={specificDetails.features}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default TechFields;
