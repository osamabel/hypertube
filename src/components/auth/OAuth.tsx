'use client';

import React from 'react';
import Image from 'next/image';

interface OAuthProps {
  mode: 'signin' | 'signup';
}

const OAuth: React.FC<OAuthProps> = ({ mode }) => {
  const handleOAuthLogin = (provider: string) => {
    // This will be replaced with actual OAuth implementation
    console.log(`Initiating ${provider} OAuth ${mode}`);
    
    // Redirect to the appropriate OAuth endpoint
    window.location.href = `/api/auth/${provider}`;
  };

  return (
    <div className="mt-6 text-center">
      <div className='relative flex justify-center'>
        <p className="text-small text-secondary-text p-2 z-40 bg-primary-dark">
          Or {mode === 'signin' ? 'Sign In' : 'Sign Up'} with
        </p>
        <hr className='border-primary-border absolute w-full top-[40%]'/>
      </div>
      
      <div className="flex justify-center space-x-2 mt-4">
        <button 
          onClick={() => handleOAuthLogin('google')}
          className="border border-primary-border flex-1 text-white px-4 py-2 cursor-pointer rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <Image src="/oauth/google.svg" alt="Google" width={20} height={20} />
          <span>Google</span>
        </button>
        
        <button 
          onClick={() => handleOAuthLogin('intra42')}
          className="border border-primary-border  flex-1 text-white px-4 py-2 cursor-pointer rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <Image src="/oauth/42.svg" alt="42" width={20} height={20} />
          <span>Intra</span>
        </button>
        
        <button 
          onClick={() => handleOAuthLogin('facebook')}
          className="border border-primary-border flex-1 text-white px-4 py-2 cursor-pointer rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <Image src="/oauth/facebook.svg" alt="Facebook" width={20} height={20} />
          <span>Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default OAuth;