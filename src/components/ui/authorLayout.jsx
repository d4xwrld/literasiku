"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const AuthorLayout = React.forwardRef(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <div class="w-full rounded-lg border bg-card text-muted-foreground shadow-sm py-2 px-3">
      <div class="flex flex-wrap gap-3 justify-between it">
        <a class="flex items-center hover:underline hover:underline-offset-2">
          @Null
        </a>
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
          class="lucide lucide-info cursor-pointer"
          data-state="closed"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      </div>
    </div>
  )
);

export { AuthorLayout };
