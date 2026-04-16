import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "マナベの折り紙記録",
  description: "眞鍋和奏の折り紙作品の紹介ページです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}

export const metadata = {
  verification: {
    google: "HygHhpyhy56xZEhlhPJguLqKyCaE_XDcRODSlVJtOZE",
  },
};