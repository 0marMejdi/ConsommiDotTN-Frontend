"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import TechFields from "./techfields";
import JewelryFields from "./jewerlyfields";
import FurnitureFields from "./furniturefields";
import AnimalsFields from "./animalfields";
import ClothesFields from "./clothesfield";
import PhoneFields from "./phonefields";
import LaptopFields from "./laptopfields";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CarFields from "./carfields";
import LocationSelect from "./locationselect";
import { useToast } from "@/components/ui/use-toast";
export default function FormComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [productDetails, setProductDetails] = useState({
    id: "",
    name: "",
    description: "",
    price: 0,
    category: null,
    location: "",
  });
  const [categoryPredicted, setCategoryPredicted] = useState(false);
  const [specificDetails, setSpecificDetails] = useState<any>({});
  const [productImage, setProductImage] = useState(null); // Store the image file
  const [isPredicting, setIsPredicting] = useState(false);
  const [price, setPrice] = useState<any>(0);
  const [specificFieldsComponent, setSpecificFieldsComponent] =
    useState<any>(null);

  const handleInputChange = (e: any) => {
    e.preventDefault();
    const { id, value } = e.target;
    if (id === "category") {
      setSelectedCategory(value);
      setProductDetails((prevDetails) => ({
        ...prevDetails,
        [id]: value,
      }));
    } else if (id === "image" && e.target.files.length > 0) {
      // Update the product image only if a new image is selected
      setProductImage(e.target.files[0]);
    } else {
      if (selectedCategory) {
        setSpecificDetails((prevSpecificDetails: any) => ({
          ...prevSpecificDetails,
          [id]: value,
        }));
      } else {
        setProductDetails((prevDetails) => ({
          ...prevDetails,
          [id]: value,
        }));
      }
    }
  };
  const handleImageChange = (e: any) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (productImage) {
      setIsPredicting(true); // Show the waiting animation
      const formData = new FormData();
      formData.append("file", productImage);
      try {
        const response = await fetch("http://localhost:3000/product/discover", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        });
        const data = await response.json();
        setProductDetails((prevDetails) => ({
          ...prevDetails,
          category: data.category,
          id: data.id,
        }));
        setCategoryPredicted(true);
        setSelectedCategory(data.category);
        setSpecificDetails({ ...data.details });
        setIsPredicting(false); // Hide the waiting animation
      } catch (error) {
        console.error("Error detecting category:", error);
        setIsPredicting(false); // Hide the waiting animation in case of error
      }
    }
  };
  const {toast} = useToast()
  const handleFinalSubmit = (event: any) => {
    event.preventDefault();
    if ("id" in productDetails) {
      const { id, ...newProductDetails } = productDetails;

      const finalProduct = {
        ...newProductDetails,
        details: { ...specificDetails },
        price: price,
        quantity: 0,
        discount: 0,
        isAvailable: true,
      };

      console.log(finalProduct);

      fetch("http://localhost:3000/product/create/" + id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(finalProduct),
      })
        .then((response) => {
          if (response.ok)
            {
                toast({
                    variant: "default",
                    title: "Success",
                    description: "Product created successfully",
                })
                //timeout 2 seconds then redirect to home
                setTimeout(() => {
                    window.location.href = "/Home";
                }, 2000);
            }
        })
    }
  };

  const handlePricePrediction = (event: any) => {
    event.preventDefault();
    console.log(specificDetails);
    console.log(productDetails);
    const finalProduct = {
      ...productDetails,
      details: { ...specificDetails },
    };
    fetch("http://localhost:3000/product/price", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(finalProduct),
    })
      .then((response) => response.json())
      .then((data) => setPrice(data.price))
      .catch((error) => console.error(error));
  };
  const handlePriceChange = (event: any) => {
    event.preventDefault();
    setPrice(event.target.value);
  };

  const getSpecificFields = () => {
    if (selectedCategory) {
      switch (selectedCategory) {
        case "jewelry":
          return (
            <JewelryFields
              specificDetails={specificDetails}
              handleInputChange={handleInputChange}
            />
          );
        case "furniture":
          return (
            <FurnitureFields
              specificDetails={specificDetails}
              handleInputChange={handleInputChange}
            />
          );
        case "animals":
          return (
            <AnimalsFields
              specificDetails={specificDetails}
              handleInputChange={handleInputChange}
            />
          );
        case "clothes":
          return (
            <ClothesFields
              specificDetails={specificDetails}
              handleInputChange={handleInputChange}
            />
          );
        case "tech":
          return (
            <TechFields
              specificDetails={specificDetails}
              handleInputChange={handleInputChange}
            />
          );
        case "phone":
          return (
            <PhoneFields
              specificDetails={specificDetails}
              handleInputChange={handleInputChange}
            />
          );
        case "laptop":
          return (
            <LaptopFields
              specificDetails={specificDetails}
              handleInputChange={handleInputChange}
            />
          );
        case "car":
          return (
            <CarFields
              specificDetails={specificDetails}
              handleInputChange={handleInputChange}
            />
          );
        default:
          return null;
      }
    }
  };
  useEffect(() => {
    console.log(selectedCategory);
    const specificFields = getSpecificFields();
    setSpecificFieldsComponent(specificFields);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 pt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Add New Product</h1>
      <form className="bg-white dark:bg-gray-950 shadow-md rounded-lg p-8 max-w-2xl mx-auto">
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
              <Label htmlFor="location">Location</Label>
              <LocationSelect
                value={productDetails.location}
                onChange={(value: any) =>
                  setProductDetails({ ...productDetails, location: value })
                }
              />
            </div>
            <div>
              <Label htmlFor="image">Product Image</Label>
              <Input
                id="image"
                name="image"
                type="file"
                onChange={handleImageChange}
                required
              />
            </div>
            {categoryPredicted && (
              <div>
                <Label htmlFor="category">Category</Label>
                <Select defaultValue={selectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue
                      id="category"
                      placeholder="Select Category"
                      onChange={handleInputChange}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem id ="category" value="jewelry" onChange={handleInputChange}>Jewelry</SelectItem>
                      <SelectItem id ="category" value="furniture" onChange={handleInputChange}>Furniture</SelectItem>
                      <SelectItem id ="category" value="animals" onChange={handleInputChange}>Animals</SelectItem>
                      <SelectItem id ="category" value="clothes" onChange={handleInputChange}>Clothes</SelectItem>
                      <SelectItem id ="category" value="tech" onChange={handleInputChange}>Tech</SelectItem>
                      <SelectItem id ="category" value="phone" onChange={handleInputChange}>Phone</SelectItem>
                      <SelectItem id ="category" value="laptop" onChange={handleInputChange}>Laptop</SelectItem>
                      <SelectItem id ="category" value="car" onChange={handleInputChange}>Car</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
            {isPredicting && <p>Loading...</p>}
            {price !== 0 && (
              <div className="flex justify-start flex-col">
                <Label className="p-1">
                  Price was predicted to be around :{" "}
                </Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={handlePriceChange}
                  required
                  //i want at the end of the input a dollar sign
                  //add a dollar sign to the end of the input
                />
              </div>
            )}
          </div>
          <div className="space-y-4">
            {selectedCategory && (
              <div className="space-y-4">{specificFieldsComponent}</div>
            )}
          </div>
        </div>
        {(selectedCategory === "laptop" ||
          selectedCategory === "phone" ||
          selectedCategory === "car" ||
          selectedCategory === "clothes") && (
          <div className="flex justify-end">
            <Button onClick={handlePricePrediction} className="mt-5">
              Predict Price
            </Button>
          </div>
        )}
        <div className="flex justify-end mt-8">
          <Button type="submit" onClick={handleSubmit} className="mr-5">
            Get Category
          </Button>
          {selectedCategory && (
            <Button
              type="submit"
              onClick={handleFinalSubmit}
              disabled={price === 0}
            >
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
