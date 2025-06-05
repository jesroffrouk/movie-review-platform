
import type { Metadata } from "next";
import "./globals.css";
import ProviderState from "./Provider";


export const metadata: Metadata = {
  title: 'MovieZone – Discover & Review Movies',
  description: 'A movie review platform to connect, follow, and share opinions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       
        <html lang="en" data-theme="dark">
        <body>
          <main> 
        <ProviderState>
        {children}
        </ProviderState>
        
        </main>
        </body>
      </html>
  );
}
