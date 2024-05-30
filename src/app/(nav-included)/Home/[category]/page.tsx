'use client'
import PageLayout from "@/components/PageLayout";
import { Search } from "@/components/SearchBar/Search";
import React, { useEffect, useState } from "react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Tanstackdevtool from "@/app/Provider/tanstackdevtool";
import queryClient from "@/app/Provider/Client";
import dynamic from "next/dynamic";
import ProductGrid from "../product-grid";
import Sidebar from "../side";

const Home = () => {
  return (
    <PageLayout>
      <Sidebar onFilterSelect={() => {}} />
      <ProductGrid />
    </PageLayout>
  );
};

export default Home;
