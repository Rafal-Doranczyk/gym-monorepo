import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { API_ROUTES } from 'gym-shared';

import { APP_ROUTES } from '@/consts';

export const authOptions: AuthOptions = {
  pages: {
    signIn: APP_ROUTES.SIGNIN_PAGE_PATH,
  },
  secret: process.env.SESSION_SECRET,
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
          await fetch(`${process.env.API_URL}${API_ROUTES.AUTH}`, {
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
          token.expires_at = Math.floor(
            Date.now() / 1000 + (account.expires_in as number),
          );

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
