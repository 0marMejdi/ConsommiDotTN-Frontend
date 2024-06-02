'use client'
import PageLayout from "@/components/PageLayout";
import React from "react";
import Sidebar from "../side";
import ProductGrid from "../product-grid";
import { parseAsString, useQueryStates } from "nuqs";

const Home = ({ params }: { params: { category: string } }) => {
  const [filters, setFilters] = useQueryStates(
    {
      order : parseAsString.withDefault(""),
      price : parseAsString.withDefault(""),
      availability : parseAsString.withDefault("")
    },
    {
      history: 'push'
    }
  );
  const category = params.category
  console.log(category)
  return (
    <PageLayout>
      <Sidebar onFilterSelect={setFilters} />
      <ProductGrid Category={category} Filters={filters}  />
    </PageLayout>
  );
};

export default Home;