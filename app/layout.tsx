import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Proverbs Daily",
  description: "Daily wisdom from the book of Proverbs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="max-w-md mx-auto h-screen overflow-hidden bg-black text-white">
          {children}
        </div>
      </body>
    </html>
  )
}

