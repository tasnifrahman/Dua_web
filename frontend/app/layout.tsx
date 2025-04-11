import './globals.css';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata = {
  title: 'Dua App',
  description: 'A Dua App built with Next.js and Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="transition-colors duration-300 min-h-screen">
        <ThemeProvider>
          <Header />
          <div className="flex">
            <LeftSidebar />
            <main className="flex-1 p-4">{children}</main>
            <RightSidebar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
