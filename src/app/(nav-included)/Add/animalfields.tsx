// AnimalsFields.js
import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const AnimalsFields = ({ specificDetails, handleInputChange } :any) => {
  return (
    <>
      <div>
        <Label htmlFor="species">Species</Label>
        <Input
          id="species"
          name="species"
          type="text"
          placeholder="Species"
          value={specificDetails.species}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          name="age"
          type="text"
          placeholder="Age"
          value={specificDetails.age}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="gender">Gender</Label>
        <Input
          id="gender"
          name="gender"
          type="text"
          placeholder="Gender"
          value={specificDetails.gender}
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
    </>
  );
};

export default AnimalsFields;
