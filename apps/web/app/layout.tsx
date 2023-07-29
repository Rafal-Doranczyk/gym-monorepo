import { ReactNode } from 'react';

import { NextAuthProvider } from '@/providers';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Gym Client App </title>
        <meta name="description" content="Gym app" />
      </head>

      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
