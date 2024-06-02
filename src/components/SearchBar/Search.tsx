"use client"
import { cn } from "@/lib/utils";
import s from './Searchbar.module.css';
import { ComboboxDemo } from "../ui/combobox";
import { useEffect, useState } from "react";

export function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category , setCategory] = useState<any>(null)
  useEffect(() => {
    if (query.trim() !== "") {
      setLoading(true);
      setError(null);
      fetch(`http://localhost:3000/product/search/${query}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch");
          }
          return res.json();
        })
        .then((data) => {
          if (category)
            {
          const filteredData = data.filter((item: any) => item.category === category);
          setResults(filteredData);
            }
          else
          setResults(data)
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className={cn(s.root, "flex")}>
      <label className="hidden">
        Search
      </label>
      <ComboboxDemo setValue={setCategory} value={category}  />
      <input
        className={s.input}
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={s.iconContainer}>
        <SearchIcon className={s.icon} />
      </div>
      {results.length > 0 && (
        <ul className="absolute w-full mt-10 bg-white shadow-lg p-4 max-h-60 overflow-y-auto z-10">
          {results.map((result) => (
            <a href={`/Product/${result.id}`}>
            <li key={result.id} className="p-2 border-b border-gray-200">
              <div className="flex justify-between">
                <p>
              {result.name}
              </p>
              <p className="text-sm text-gray-500">{(result.price*(1-result.discount/100)).toFixed(2)}$</p>
              </div>
            </li>
            </a>
          ))}
        </ul>
      )}
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
