// app/api/placeholder/[width]/[height]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { use } from 'react';

export async function GET(
  request: NextRequest,
  {params}: {params: Promise<{ width: string; height: string }>}
) {
  const { width, height } = use(params);
  
  const widthInt = parseInt(width, 10);
  const heightInt = parseInt(height, 10);

  
  
  // Generate a simple SVG placeholder with movie-like gradient
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0D253F;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#01B4E4;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
      <text x="50%" y="50%" font-family="Arial" font-size="${Math.max(widthInt, heightInt) / 10}px" fill="white" text-anchor="middle" dominant-baseline="middle">Movie</text>
    </svg>
  `;
  
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}