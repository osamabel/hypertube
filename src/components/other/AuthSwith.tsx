'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const AuthSwitch = () => {
  const pathname = usePathname();
  const isSignIn = pathname === '/signin';
  
  return (
    <div className="relative flex w-full min-h-9 mb-6 outline-secondary-dark outline-4 bg-secondary-dark rounded-full overflow-hidden items-center">
      {/* Sliding background */}
      <div 
        className="absolute h-full w-1/2 bg-primary transition-all duration-300 ease-in-out rounded-full" 
        style={{ 
          transform: isSignIn ? 'translateX(100%)' : 'translateX(0)' 
        }}
      />
      
      {/* Buttons */}
      <Link href="/signup" className="w-1/2 z-10">
        <button 
          className={`w-full h-full cursor-pointer lable-sm transition duration-300 ${
            !isSignIn ? 'text-primary-text' : 'text-secondary-text'}`}
        >
          Sign Up
        </button>
      </Link>
      <Link href="/signin" className="w-1/2 z-10">
        <button 
          className={`w-full h-full cursor-pointer lable-sm transition duration-300 ${
            isSignIn ? 'text-primary-text' : 'text-secondary-text'}`}
        >
          Log In
        </button>
      </Link>
    </div>
  );
};