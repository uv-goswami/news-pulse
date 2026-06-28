import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'News Pulse — Topic-Clustered News Timeline',
  description:
    'Live news clusters from BBC, NPR, The Guardian and more — automatically grouped by topic and visualised on a timeline.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
