"use client";
import Loadable from "next/dist/shared/lib/loadable.shared-runtime";
import { useSearchParams } from "next/navigation";
import { parseAsString, useQueryStates } from "nuqs";
import { useEffect, useState } from "react";

const ProductGrid = ({ Filters }: any) => {
  const [products, setProducts] = useState<any[]>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
    setLoading(false);
    console.log(Filters);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {loading && //give me the rest
        "Loading..."}

      {products?.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
          <a href="./Product">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-900 font-semibold">
              ${product.price.toFixed(2)}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
