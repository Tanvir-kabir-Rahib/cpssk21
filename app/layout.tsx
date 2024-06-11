import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "CPSSK 21",
  description: "A Website For The Students Of CPSSK Batch 21",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='min-h-screen flex flex-col'>
        <header className="border-b sticky top-0 bg-white z-50">
          <Header />
        </header>
        <div className="bg-[#F4F2ED] flex-1 w-full">
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
