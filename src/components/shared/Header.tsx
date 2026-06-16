"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from '@/components/ui/button';


const Header = () => {
  return (
      <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-36 flex items-center">
            <img 
            src="/assets/logo-rect.png" 
            className="h-10 w-auto object-contain object-left"
            alt="Let's Play Logo"
            />
            </Link>

            <div className="flex w-32 justify-end gap-3">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button className="rounded-full" size="lg">
                    Login
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
        </div>
      </header>
  )
}

export default Header
