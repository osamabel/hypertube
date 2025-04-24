// src/app/(home)/layout.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      {/* Header/Navbar */}
      <header className="py-4 px-8 flex items-center justify-between fixed z-30 w-full">
        <div className="flex items-center">
          <Link href="/home">
            <Image 
              src="/torrento-logo.svg" 
              alt="Torrento" 
              width={100}
              height={80}
              className="mr-4"
            />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/home" className="font-medium hover:text-primary transition-colors">Home</Link>
            <Link href="/movies" className="font-medium hover:text-primary transition-colors">Movies</Link>
            <Link href="/series" className="font-medium hover:text-primary transition-colors">Series</Link>
            <Link href="/favorites" className="font-medium hover:text-primary transition-colors">My List</Link>
            <Link href="/recents" className="font-medium hover:text-primary transition-colors">Recently Added</Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <Link href="/profile">
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center overflow-hidden">
              {/* User profile image, using a placeholder for now */}
              <Image 
                src="/api/placeholder/40/40" 
                alt="Profile" 
                width={40} 
                height={40} 
              />
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      {children}
      
      {/* Footer */}
      <footer className="py-8 px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image 
                src="/torrento-logo.svg" 
                alt="Torrento" 
                width={40} 
                height={40} 
                className="mb-4"
              />
              <p className="text-gray-400 text-sm mt-4">
                Stream your favorite movies and TV shows on Torrento.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/home" className="hover:text-primary">Home</Link></li>
                <li><Link href="/movies" className="hover:text-primary">Movies</Link></li>
                <li><Link href="/series" className="hover:text-primary">Series</Link></li>
                <li><Link href="/favorites" className="hover:text-primary">My List</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/copyright" className="hover:text-primary">Copyright</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-primary">Help Center</Link></li>
                <li><Link href="/support" className="hover:text-primary">Support</Link></li>
                <li><Link href="/feedback" className="hover:text-primary">Feedback</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Torrento. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}