import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('localhost:3004/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
        } else if (isLoggedIn) {
        return Response.redirect(new URL('localhost:3004/dashboard', nextUrl));
        }
        return true;
        },
    },
    providers: [],
} satisfies NextAuthConfig;