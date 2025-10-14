import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
   <section>
    <div>
      <h1>Home Page</h1>
      <SignedOut>
      <SignUpButton mode="modal">Signup</SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>Log out</SignOutButton>
      </SignedIn>
    </div>
   </section>
  );
}
