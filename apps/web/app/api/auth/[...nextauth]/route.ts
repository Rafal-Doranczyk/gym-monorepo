import NextAuth from 'next-auth/next';
import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { constants } from 'gym-shared';

import { APP_ROUTES } from '@/consts';

const URL = `${process.env.NEXT_PUBLIC_API_URL}${constants.API_ROUTES.AUTH}`;

export const authOptions: AuthOptions = {
  pages: {
    signIn: APP_ROUTES.SIGNIN_PAGE_PATH,
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    jwt: async ({ account, token }) => {
      if (account && account.id_token) {
        try {
          // Initial sign in request
          await fetch(URL, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              idToken: account.id_token,
            }),
          });

          // Sign in request to the Backend API

          token.access_token = account.id_token;
          token.refresh_token = account.refresh_token;
          token.expires_at = Math.floor(Date.now() / 1000 + (account.expires_in as number));

          return token;
        } catch (error) {
          return { ...token, error: 'NEXT_AUTH_TOKEN_ERROR' };
        }
      }

      return token;
    },

    async session({ session, token: { access_token } }) {
      return {
        ...session,
        access_token,
      };
    },
  },
};

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
