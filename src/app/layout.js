import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MusicPlayer from '@/components/MusicPlayer'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Star Quest',
  description: 'An interactive sci-fi text adventure',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <MusicPlayer />
        </div>
      </body>
    </html>
  )
}