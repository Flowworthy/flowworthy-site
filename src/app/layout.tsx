import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Flowworthy",
  description: "Turn customer feedback into a polished success story PDF automatically.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-neutral-950">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
