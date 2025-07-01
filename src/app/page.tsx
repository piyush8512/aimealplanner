"use client"; // must be at the top

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  
  return (
       <nav className="flex justify-between p-4">
      <h1 className="text-2xl font-bold">aimealplanner</h1>
      <div>
        <SignedIn>
          <Link href="/dashboard" className="text-green-600 hover:underline">
            Go to Dashboard
          </Link>
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
}
