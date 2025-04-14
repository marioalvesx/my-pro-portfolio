import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GeistMono } from "geist/font/mono";

// ThemeProvider
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import FavIcon from "@/app/favicon.ico";

const font = GeistMono;
font.style.fontWeight = 600;

export const metadata = {
  title: "Mario Alves | Front-end Engineer",
  description: "Mario Alves portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href={FavIcon.src} />
      </head>
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <LanguageProvider>
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
