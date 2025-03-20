import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Handle API errors
  response.headers.set('X-Error-Handling', 'enabled');
  
  return response;
}

export const config = {
  matcher: '/api/:path*',
}; 