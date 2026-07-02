import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaAI - AI that helps your business work smarter",
  description: "NovaAI automates repetitive tasks, generates insights, and supercharges your team's productivity with cutting-edge artificial intelligence.",
  openGraph: {
    title: "NovaAI - AI that helps your business work smarter",
    description: "NovaAI automates repetitive tasks, generates insights, and supercharges your team's productivity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">{children}</body>
    </html>
  );
}
