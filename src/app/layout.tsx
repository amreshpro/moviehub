import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/providers/ThemeProvider";
import ThemeWrapper from "@/wrappers/ThemeWrapper";

export const metadata: Metadata = {
  title: "Moviehub",
  description: "A movie hub website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}>
          <body>
            <main>

      <ThemeProvider>
        <ThemeWrapper>
            <Navbar />
            <div className="components pt-32">
            {children}
            </div>
            <Footer />
        </ThemeWrapper>
      </ThemeProvider>
            </main>
          </body>
    </html>
  );
}
