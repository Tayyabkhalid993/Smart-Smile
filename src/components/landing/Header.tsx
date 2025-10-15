import Link from 'next/link'
import Image from "next/image"
import React from 'react'
import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

function Header() {
  return (
    <header>
      <nav className='fixed top-0 right-0 left-0 z-30 px-6 py-2 border-b border-border/50 bg-background/50 backdrop-blur-md h-16'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <Link href="/" className='flex items-center gap-2'>
          <Image src={"/logo.png"} height={32} width={32} alt='Tooth logo'></Image>
          <span className='font-semibold text-lg'>Smart Smile</span>
          </Link>

          <div className='hidden md:flex items-center gap-8'>
            <Link href={"#"} className='text-muted-foreground transition-all hover:text-foreground'>How it works?</Link>
            <Link href={"#"} className='text-muted-foreground transition-all hover:text-foreground'>Pricing</Link>
            <Link href={"#"} className='text-muted-foreground transition-all hover:text-foreground'>About</Link>
          </div>

          <div className='flex items-center gap-3 transition-all '>
            <SignInButton mode='modal'>
              <Button variant={'ghost'} size={'sm'} className='hover:cursor-pointer'>
                SignIn
              </Button>
            </SignInButton>
            <SignUpButton mode='modal'>
              <Button size={"sm"} className='hover:cursor-pointer'>
                SignUp
              </Button>
            </SignUpButton>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header