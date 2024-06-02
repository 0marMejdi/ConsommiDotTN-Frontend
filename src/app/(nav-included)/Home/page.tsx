'use client'
import PageLayout from "@/components/PageLayout";
import React from "react";
import Sidebar from "./side";
import ProductGrid from "./product-grid";
import { parseAsBoolean, parseAsString, useQueryStates } from "nuqs";

const Home = () => {
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
  return (
    <PageLayout>
      <Sidebar onFilterSelect={setFilters} />
      <ProductGrid Filters={filters}  />
    </PageLayout>
  );
};

export default Home;