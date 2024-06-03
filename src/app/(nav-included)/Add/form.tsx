"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function FormComponent() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    price: 0,
    category: null,
    brand: "",
    model: "",
    screenSize: "",
    size: "",
    color: "",
    material: "",
    location: "",
  });
  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      category,
    }));
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    console.log(productDetails)
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("New product:", productDetails);
  };
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 pt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Add New Product</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-950 shadow-md rounded-lg p-8 max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Product Name"
                value={productDetails.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Product Description"
                value={productDetails.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="Product Price"
                value={productDetails.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                type="text"
                placeholder="Product Selling Location"
                value={productDetails.location}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="space-y-4">
            {selectedCategory === "electronics" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="brand">Brand</Label>
                  <Input
                    id="brand"
                    name="brand"
                    type="text"
                    placeholder="Brand"
                    value={productDetails.brand}
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
                    value={productDetails.model}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="screenSize">Screen Size</Label>
                  <Input
                    id="screenSize"
                    name="screenSize"
                    type="text"
                    placeholder="Screen Size"
                    value={productDetails.screenSize}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}
            {selectedCategory === "clothing" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="size">Size</Label>
                  <Input
                    id="size"
                    name="size"
                    type="text"
                    placeholder="Size"
                    value={productDetails.size}
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
                    value={productDetails.color}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="material">Material</Label>
                  <Input
                    id="material"
                    name="material"
                    type="text"
                    placeholder="Material"
                    value={productDetails.material}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <Button type="submit">Save Product</Button>
        </div>
      </form>
    </div>
  );
}
