/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hUpK17QgpV8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { SearchBar } from "@/components/ui/searchBar";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b px-4 md:px-6 py-3 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <BookIcon className="w-6 h-6 text-primary" />
          <span className="font-semibold text-lg">LiterasiKu!</span>
        </Link>
        <SearchBar />
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Read
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            {" "}
            <div class="flex justify-center items-center">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>{" "}
              $username
            </div>
          </Link>
          <Button size="sm">BacaanKu!</Button>
        </div>
      </header>
      <main className="flex-1 bg-background">
        <div className="max-w-3xl mx-auto py-12 px-4 md:px-0">
          <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </div>
        </div>
      </main>
      <footer className="bg-muted border-t px-4 md:px-6 py-6 text-center text-sm text-muted-foreground">
        &copy; 2024 Digital Book. All rights reserved.
      </footer>
    </div>
  );
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
