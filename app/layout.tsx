
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Discover Delicious Recipes",
  description: "Explore delicious recipes with NextBites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-orange-50 text-gray-900">
        <nav className="bg-white shadow-sm px-8 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">
            🍽️ NextBites
          </h1>

          <p className="text-gray-600 font-medium">
            Discover. Cook. Enjoy.
          </p>
        </nav>

        {children}
      </body>
    </html>
  );
}
