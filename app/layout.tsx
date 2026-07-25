import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Full Stack Developer Portfolio",
  description: "Showcase of 7 modern deployed web development projects.",
  openGraph: {
    title: "Full Stack Developer Portfolio",
    description: "Explore my latest full-stack web development projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-body bg-background text-white antialiased selection:bg-primary/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}