"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import { AuthorLayout } from "./authorLayout";

import { cn } from "@/lib/utils";

const Box = React.forwardRef(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full grid grid-rows-card card-container gap-2 p-3">
      <div className="flex flex-col space-y-1.5 p-4">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          $BookTitle
        </h3>
      </div>
      <div className="p-4 pt-0 flex flex-col justify-center items-center space-y-2">
        <div className="relative mb-auto h-48 w-full">
          <img
            src="https://via.placeholder.com/200"
            alt="403 Forbidden Illustration"
            className="mx-auto mb-4"
          />
        </div>
      </div>
      <AuthorLayout></AuthorLayout>
      <div className="items-center pt-0 flex justify-between">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          Rating
        </button>
        <Button className="">Mulai Baca!</Button>
      </div>
    </div>
  )
);

export { Box };
