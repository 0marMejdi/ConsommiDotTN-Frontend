"use client";
import { useEffect, useState } from "react";
import PaginationComponent from "./pagination";

const ProductGrid = ({ Filters, Category }: any) => {
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const PageSize = 12;
  
  useEffect(() => {
    setLoading(true);
    let url = Category ? `http://localhost:3000/product/filter?category=${Category}` : `http://localhost:3000/product/filter`;

    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(Math.ceil(data.length / PageSize));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [Category]);

  useEffect(() => {
    setLoading(true);
    let url = Category
      ? `http://localhost:3000/product/filter?category=${Category}&pageSize=${PageSize}&page=${currentPage}`
      : `http://localhost:3000/product/filter?pageSize=${PageSize}&page=${currentPage}`;

    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setFilteredProducts(data); 
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [currentPage, Category]);
  const handlePicture = (id : string)=>{
    console.log(id)
    fetch("http://localhost:3000/"+id)
    .then(res => res.blob())
    .then(blob => {
      //save this image and return it's url
      const imageUrl = URL.createObjectURL(blob);
      return imageUrl;
    })
    .catch(err => {
      console.log(err);
    })
    return "";
  }
  useEffect(() => {
    if (allProducts.length > 0) {
      let updatedProducts = [...allProducts];
      if (Filters.order === "low") {
        updatedProducts.sort((a, b) => a.price * (1 - a.discount / 100) - b.price * (1 - b.discount / 100));
      } else if (Filters.order === "high") {
        updatedProducts.sort((a, b) => b.price * (1 - b.discount / 100) - a.price * (1 - a.discount / 100));
      }
      if (Filters.availability === "Available") {
        updatedProducts = updatedProducts.filter((product) => product.isAvailable === true);
      }
      if (Filters.price !== "") {
        updatedProducts = updatedProducts.filter((product) => {
          const [min, max] = Filters.price.split("-").map(Number);
          return product.price >= min && product.price <= max;
        });
      }
      setFilteredProducts(updatedProducts);
    }
  }, [Filters, allProducts]);

  return (
    <div className="flex flex-col min-h-screen pb-16">
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {!loading && filteredProducts.length === 0 && (
            <p className="text-lg font-semibold mb-2">No products Found</p>
          )}
          {filteredProducts.length > 0 &&
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg p-10">
                <a href={`/Product/${product.id}`}>
                  <img
                    src={"http://localhost:3000/"+product.images["0"]}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  {product.discount ? (
                    <div className="flex gap-2">
                      <p className="text-gray-900 font-semibold line-through">
                        ${product.price.toFixed(2)}
                      </p>
                      <p className="text-gray-900 font-semibold">
                        ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-900 font-semibold">${product.price.toFixed(2)}</p>
                  )}
                </a>
              </div>
            ))}
        </div>
      </div>
      <div className="bottom-0 left-0 w-full pt-8 pb-6">
        <PaginationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default ProductGrid;
