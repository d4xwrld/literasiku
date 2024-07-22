"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

const SearchBar = React.forwardRef(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <div class="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-search absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      <input
        autofocus=""
        type="search"
        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none ring-2 ring-gray-500 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-gray-700 pl-8 sm:w-[300px] md:w-[400px] lg:w-[500px]"
        placeholder="Cari Buku disini..."
      />
    </div>
  )
);

export { SearchBar };
