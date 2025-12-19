import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'مشہور - پاکستان کا مشہور ای کامرس پلیٹ فارم',
  description: 'پاکستان کے مشہور شہروں کی مشہور چیزیں - ایک جگہ پر',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ur" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  )
}
