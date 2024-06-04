import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const LaptopFields = ({ specificDetails, handleInputChange } : any) => {
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
        <Label htmlFor="processorBrand">Processor Brand</Label>
        <Input
          id="processorBrand"
          name="processorBrand"
          type="text"
          placeholder="Processor Brand"
          value={specificDetails.processorBrand}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="processorName">Processor Name</Label>
        <Input
          id="processorName"
          name="processorName"
          type="text"
          placeholder="Processor Name"
          value={specificDetails.processorName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="ramGb">RAM (GB)</Label>
        <Input
          id="ramGb"
          name="ramGb"
          type="text"
          placeholder="RAM"
          value={specificDetails.ramGb}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="ramType">RAM Type</Label>
        <Input
          id="ramType"
          name="ramType"
          type="text"
          placeholder="RAM Type"
          value={specificDetails.ramType}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="ssd">SSD (GB)</Label>
        <Input
          id="ssd"
          name="ssd"
          type="text"
          placeholder="SSD"
          value={specificDetails.ssd}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="os">Operating System</Label>
        <Input
          id="os"
          name="os"
          type="text"
          placeholder="Operating System"
          value={specificDetails.os}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="osBit">OS Bit</Label>
        <Input
          id="osBit"
          name="osBit"
          type="text"
          placeholder="OS Bit"
          value={specificDetails.osBit}
          onChange={handleInputChange}
          required
        />
      </div>
      {specificDetails.processorGen && (
        <div>
          <Label htmlFor="processorGen">Processor Generation</Label>
          <Input
            id="processorGen"
            name="processorGen"
            type="text"
            placeholder="Processor Generation"
            value={specificDetails.processorGen}
            onChange={handleInputChange}
            required
          />
        </div>
      )}
      {specificDetails.hdd && (
        <div>
          <Label htmlFor="hdd">HDD (GB)</Label>
          <Input
            id="hdd"
            name="hdd"
            type="text"
            placeholder="HDD"
            value={specificDetails.hdd}
            onChange={handleInputChange}
            required
          />
        </div>
      )}
      {specificDetails.graphicCardGb && (
        <div>
          <Label htmlFor="graphicCardGb">Graphic Card (GB)</Label>
          <Input
            id="graphicCardGb"
            name="graphicCardGb"
            type="text"
            placeholder="Graphic Card"
            value={specificDetails.graphicCardGb}
            onChange={handleInputChange}
            required
          />
        </div>
      )}
      {specificDetails.weight && (
        <div>
          <Label htmlFor="weight">Weight</Label>
          <Input
            id="weight"
            name="weight"
            type="text"
            placeholder="Weight"
            value={specificDetails.weight}
            onChange={handleInputChange}
            required
          />
        </div>
      )}
      {specificDetails.warranty && (
        <div>
          <Label htmlFor="warranty">Warranty</Label>
          <Input
            id="warranty"
            name="warranty"
            type="text"
            placeholder="Warranty"
            value={specificDetails.warranty}
            onChange={handleInputChange}
            required
          />
        </div>
      )}
      {specificDetails.touchscreen && (
        <div>
          <Label htmlFor="touchscreen">Touchscreen</Label>
          <Input
            id="touchscreen"
            name="touchscreen"
            type="text"
            placeholder="Touchscreen"
            value={specificDetails.touchscreen}
            onChange={handleInputChange}
            required
          />
        </div>
      )}
      {specificDetails.msoffice && (
        <div>
          <Label htmlFor="msoffice">Microsoft Office</Label>
          <Input
            id="msoffice"
            name="msoffice"
            type="text"
            placeholder="Microsoft Office"
            value={specificDetails.msoffice}
            onChange={handleInputChange}
            required
          />
        </div>
      )}
      {specificDetails.rating && (
        <div>
          <Label htmlFor="rating">Rating</Label>
          <Input
            id="rating"
            name="rating"
            type="text"
            placeholder="Rating"
            value={specificDetails.rating}
            onChange={handleInputChange}
            required
          />
        </div>
      )}
      {specificDetails.numberOfRatings && (
        <div>
          <Label htmlFor="numberOfRatings">Number of Ratings</Label>
          <Input
            id="numberOfRatings"
            name="numberOfRatings"
            type="number"
            placeholder="Number of Ratings"
            value={specificDetails.numberOfRatings}
            onChange={handleInputChange}
            required
          />
        </div>
      )}
      {specificDetails.numberOfReviews && (
        <div>
          <Label htmlFor="numberOfReviews">Number of Reviews</Label>
          <Input
            id="numberOfReviews"
            name="numberOfReviews"
            type="number"
            placeholder="Number of Reviews"
            value={specificDetails.numberOfReviews}
            onChange={handleInputChange}
            required
          />
        </div>
      )}
    </>
  );
}

export default LaptopFields;
