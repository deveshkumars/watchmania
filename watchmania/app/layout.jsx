import { Inter } from "next/font/google";
import "./globals.css";

// Imports
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Themeprovider
import { ThemeProvider } from "@/components/ThemeProvider";
import { Sen } from "next/font/google"


const SenFont = Sen({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  display: "swap"
})

export const metadata = {
  title: "Devesh's Kuver App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={SenFont.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
            {children}
            <Footer />
        </ThemeProvider>
        </body>
    </html>
  );
}
