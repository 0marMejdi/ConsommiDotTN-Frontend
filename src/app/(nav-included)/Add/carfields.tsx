import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CarFields = ({ specificDetails, handleInputChange }: any) => {
  return (
    <>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          value={specificDetails? specificDetails.title : ""}

          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="brand">Brand</Label>
        <Input
          id="brand"
          name="brand"
          type="text"
          placeholder="Brand"
          value={specificDetails? specificDetails.brand : ""}

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
          value={specificDetails? specificDetails.model : ""}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="transmission">Transmission</Label>
        <Input
          id="transmission"
          name="transmission"
          type="text"
          placeholder="Transmission"
          value={specificDetails? specificDetails.transmission : ""}

          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="fuelType">Fuel Type</Label>
        <Input
          id="fuelType"
          name="fuelType"
          type="text"
          placeholder="Fuel Type"
          value={specificDetails? specificDetails.fuelType : ""}

          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="year">Year</Label>
        <Input
          id="year"
          name="year"
          type="number"
          placeholder="Year"
          value={specificDetails? specificDetails.year : ""}

          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="mileage">Mileage</Label>
        <Input
          id="mileage"
          name="mileage"
          type="number"
          placeholder="Mileage"
          value={specificDetails? specificDetails.mileage : ""}

          onChange={handleInputChange}
          required
        />
      </div>
    </>
  );
};

export default CarFields;
