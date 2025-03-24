// Framework importations

import './globals.css';
import { Provider } from 'jotai';
import { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';

//providers
import ReactQueryProvider from '@/utils/ReactQueryProvider';
import { ThemeProvider } from '@/utils/ThemeProvider';

// define global metadatas

export const metadata: Metadata = {
  title: 'Jeannine Banza',
  description: 'Jeannine Banza : Ici ....',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <Provider>
              <>{children}</>
              <ToastContainer
                toastClassName={
                  'bg-white dark:bg-Brand-neutral-600 text-Brand-neutral-600 dark:text-Brand-neutral-100 text-[14px]'
                }
                progressClassName={'rounded-xl'}
              />
            </Provider>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
