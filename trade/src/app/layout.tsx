import { Inter } from 'next/font/google';
import { Navbar } from '@/components/common/Navbar';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ShopApp - Build Your Online Store',
  description: 'Create and grow your online business with ShopApp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
