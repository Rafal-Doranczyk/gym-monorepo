import { ReactNode } from 'react';

import { NextAuthProvider, ThemeProvider, ToastProvider } from '@/context';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Gym Client App </title>
        <meta name="description" content="Gym app" />
      </head>
      <ThemeProvider>
        <body suppressHydrationWarning>
          <ToastProvider>
            <NextAuthProvider>{children}</NextAuthProvider>
          </ToastProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
