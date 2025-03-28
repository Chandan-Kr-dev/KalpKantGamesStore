import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-4 relative overflow-hidden">
      {/* Background SVG Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 left-0 w-full"
        >
          <path 
            fill="#3B82F6" 
            fillOpacity="0.3" 
            d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Logo Container */}
      <div className="absolute top-8 left-8">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 350 60" 
          className="h-12 fill-white"
        >
          <text 
            x="10" 
            y="40" 
            fontFamily="Arial, sans-serif" 
            fontSize="36" 
            fontWeight="bold"
          >
            Kalpkant Games
          </text>
        </svg>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-md z-10 relative">
        {/* Broken Controller SVG */}
        <div className="flex justify-center mb-6">
          <Image
                      src="https://i.postimg.cc/tTQ1fhPs/logo-new.png"
                      alt="Logo"
                      width={300}
                      height={50}
                    />
        </div>

        <div className="mb-8">
          <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Oops! Level Not Found</h2>
          <p className="text-gray-400 mb-8">
            You&apos;ve encountered an unexpected error screen. 
            The page you&apos;re searching for might have been removed or doesn&apos;t exist.
          </p>
        </div>
        
        <div className="flex justify-center space-x-4">
          <Link 
            href="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Return to Home
          </Link>
          
          
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500">
            Need help? 
            <a href="/support" className="text-blue-400 hover:text-blue-300 ml-2">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}