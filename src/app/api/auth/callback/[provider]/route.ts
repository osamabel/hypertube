import { NextRequest, NextResponse } from 'next/server';

// Function to exchange authorization code for access token
async function getAccessToken(provider: string, code: string, redirectUri: string) {
  const config = {
    google: {
      tokenUrl: 'https://oauth2.googleapis.com/token',
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    },
    intra42: {
      tokenUrl: 'https://api.intra.42.fr/oauth/token',
      clientId: process.env.INTRA42_CLIENT_ID || '',
      clientSecret: process.env.INTRA42_CLIENT_SECRET || '',
    },
    facebook: {
      tokenUrl: 'https://graph.facebook.com/v18.0/oauth/access_token',
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
    }
  };

  const providerConfig = config[provider as keyof typeof config];
  
  const params = new URLSearchParams({
    client_id: providerConfig.clientId,
    client_secret: providerConfig.clientSecret,
    code,
    redirect_uri: redirectUri,
    grant_type: 'authorization_code',
  });

  const response = await fetch(providerConfig.tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error(`Failed to get access token: ${await response.text()}`);
  }

  return response.json();
}

// Function to get user profile data from the provider
async function getUserProfile(provider: string, accessToken: string) {
  const endpoints = {
    google: 'https://www.googleapis.com/oauth2/v2/userinfo',
    intra42: 'https://api.intra.42.fr/v2/me',
    facebook: 'https://graph.facebook.com/me?fields=id,name,email,picture',
  };

  const response = await fetch(endpoints[provider as keyof typeof endpoints], {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to get user profile: ${await response.text()}`);
  }

  return response.json();
}

export async function GET(
  request: NextRequest,
  { params }: { params: { provider: string } }
) {
  const provider = params.provider;
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const error = searchParams.get('error');

  // Check for OAuth errors
  if (error) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/signin?error=${error}`);
  }

  // Verify required parameters
  if (!code || !state) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/signin?error=missing_params`);
  }

  // Verify state parameter to prevent CSRF
  const storedState = request.cookies.get('oauth_state')?.value;
  if (!storedState || storedState !== state) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/signin?error=invalid_state`);
  }

  try {
    // Get redirect URI based on provider
    let redirectUri = '';
    switch (provider) {
      case 'google':
        redirectUri = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/callback/google';
        break;
      case 'intra42':
        redirectUri = process.env.INTRA42_REDIRECT_URI || 'http://localhost:3000/api/auth/callback/intra42';
        break;
      case 'facebook':
        redirectUri = process.env.FACEBOOK_REDIRECT_URI || 'http://localhost:3000/api/auth/callback/facebook';
        break;
      default:
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/signin?error=invalid_provider`);
    }

    // Exchange code for access token
    const tokenData = await getAccessToken(provider, code, redirectUri);
    
    // Get user profile from provider
    const userProfile = await getUserProfile(provider, tokenData.access_token);

    // At this point, you would:
    // 1. Check if the user exists in your database
    // 2. Create a new user if they don't exist
    // 3. Create a session or JWT token for the user
    // 4. Redirect to the app with the token

    // For this example, we'll just redirect to the dashboard with a simulated token
    const response = NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard`);
    
    // Set a sample auth token (in a real app, this would be a JWT)
    response.cookies.set('auth_token', 'sample_token_value', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });
    
    return response;
  } catch (error) {
    console.error('OAuth callback error:', error);
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/signin?error=server_error`);
  }
}