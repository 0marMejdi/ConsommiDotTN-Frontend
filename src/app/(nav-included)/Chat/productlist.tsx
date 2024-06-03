"use client"
import { useEffect, useState } from "react";
import Contact from "./contact";

interface ProductListProps {
  selectedProduct: any
  onSelectProduct: any
}

export default function ProductList({selectedProduct,onSelectProduct }: ProductListProps) {
  const [products, setProducts] = useState<any[]>([])
  const handleProductClick = (product: any) => {
    onSelectProduct(product);
    console.log(selectedProduct)
  };
  useEffect(()=>{
    onSelectProduct(null)
    fetch("http://localhost:3000/conversation/all",
        {
            headers :{
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
    .then((response) => response.json())
    .then((data) =>  {setProducts(data)
    })
    .catch((error) => console.error(error));
    },[])
  return (
    <div className="space-y-4">
      {products && products.map((product) => {
        console.log(product)
        return (
          <Contact
            avatarFallback=""
            avatarSrc={product.product.image}
            conversationId={product.conversationId}
            name={product.product.name}
            email=""
            isSelected = {false}
            onClick={() =>handleProductClick(product)}
            key={Math.random()}
            />
      )})}
    </div>
  );
}