import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-yellow-500 transition-colors">
          Star Quest
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-yellow-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/game" className="text-white hover:text-yellow-500 transition-colors">
              Play
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}