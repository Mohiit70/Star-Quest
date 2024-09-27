import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MusicPlayer from '@/components/MusicPlayer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Star Quest',
  description: 'An interactive sci-fi text adventure',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <div className="flex flex-col min-h-screen relative">
          <Header />
          <main className="flex-grow z-0">
            {children}
          </main>
          <Footer />
          <MusicPlayer />
        </div>
      </body>
    </html>
  )
}