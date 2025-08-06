'use client';

import * as React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// Create a client
const queryClient = new QueryClient();
export function ClientProvider({
  children,
  ...props
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
}: React.PropsWithChildren<{}>) {
  return (
  
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
   
  );
}
