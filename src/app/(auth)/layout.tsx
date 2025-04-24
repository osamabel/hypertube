'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import MovieCarousel from '@/components/MovieCarousel';
import Image from 'next/image';
import { AuthSwitch } from '@/components/other/AuthSwith';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathname = usePathname();
  const isSignIn = pathname === '/signin';
  
  return (
    <main className="flex min-h-screen bg-primary-dark p-8 gap-x-8">
      <div className="w-full md:w-1/3 flex flex-col h-[calc(100vh-4rem)]">
        {/* Fixed height content */}
        <div className="flex-none">
          <div className="flex items-center mb-4">
            <Image 
              src="/torrento-logo.svg" 
              alt="Torrento" 
              width={100}
              height={80}
              className="mr-2"
            />
          </div>
          
          <div className='w-full mb-8'>
            <h1 className="title-large ">
              {isSignIn ? 'Welcome Back to Torrento!' : 'Welcome to Torrento!'}
            </h1>
            <p className="text-small text-secondary-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            </p>
          </div>
          
          <AuthSwitch />
        </div>
        
        {/* Scrollable content wrapper */}
        <div className="flex-grow overflow-y-auto mt-8 px-1 custom-scrollbar">
          {children}
        </div>
      </div>
      
      <div className="hidden md:block md:w-2/3 rounded-lg overflow-hidden">
        <MovieCarousel />
      </div>
    </main>
  );
}