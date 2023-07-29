import NextAuth from 'next-auth/next';



import { authOptions } from '@/providers';




const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    access_token: string;
  }
}

declare module 'next-auth/jwt' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface JWT {
    access_token?: string;
    expires_at?: number;
    refresh_token?: string;
    error?: 'NEXT_AUTH_TOKEN_ERROR';
  }
}
