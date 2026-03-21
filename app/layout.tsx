import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "TripSage — Plan Your Entire Trip in Seconds with AI",
  description:
    "Flights, hotels, local travel, and events — all bundled into one smart plan based on your budget and vibe.",
  keywords: "AI travel planner, trip planning, budget travel, smart itinerary",
  openGraph: {
    title: "TripSage — AI Travel Planner",
    description:
      "Flights, hotels, local travel, and events — all bundled into one smart plan based on your budget and vibe.",
    type: "website",
    siteName: "TripSage",
  },
  twitter: {
    card: "summary_large_image",
    title: "TripSage — AI Travel Planner",
    description: "Plan your entire trip in seconds with AI.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}