import { NextRequest, NextResponse } from 'next/server';

// Config for OAuth providers
const oauthConfig = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    redirectUri: process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/callback/google',
    authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenUrl: 'https://oauth2.googleapis.com/token',
    scope: 'email profile',
  },
  intra42: {
    clientId: process.env.INTRA42_CLIENT_ID || '',
    clientSecret: process.env.INTRA42_CLIENT_SECRET || '',
    redirectUri: process.env.INTRA42_REDIRECT_URI || 'http://localhost:3000/api/auth/callback/intra42',
    authUrl: 'https://api.intra.42.fr/oauth/authorize',
    tokenUrl: 'https://api.intra.42.fr/oauth/token',
    scope: 'public',
  },
  facebook: {
    clientId: process.env.FACEBOOK_CLIENT_ID || '',
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
    redirectUri: process.env.FACEBOOK_REDIRECT_URI || 'http://localhost:3000/api/auth/callback/facebook',
    authUrl: 'https://www.facebook.com/v18.0/dialog/oauth',
    tokenUrl: 'https://graph.facebook.com/v18.0/oauth/access_token',
    scope: 'email public_profile',
  }
};

export async function GET(
  request: NextRequest,
  { params }: { params: { provider: string } }
) {
  const provider = params.provider;
  
  if (!['google', 'intra42', 'facebook'].includes(provider)) {
    return NextResponse.json({ error: 'Invalid provider' }, { status: 400 });
  }
  
  const config = oauthConfig[provider as keyof typeof oauthConfig];
  
  // Generate a random state for CSRF protection
  const state = Math.random().toString(36).substring(2);
  
  // Store state in a cookie for verification later
  const response = NextResponse.redirect(
    `${config.authUrl}?client_id=${config.clientId}&redirect_uri=${config.redirectUri}&response_type=code&scope=${config.scope}&state=${state}`
  );
  
  response.cookies.set('oauth_state', state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 10, // 10 minutes
    path: '/',
  });
  
  return response;
}