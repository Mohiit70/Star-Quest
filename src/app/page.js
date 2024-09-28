import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/temple-interior.jpg"
        alt="Temple interior"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-white mb-8 text-center">Welcome to Star Quest</h1>
        <p className="text-xl text-white mb-8 text-center max-w-2xl">
          Embark on an epic journey through ancient temples and futuristic worlds. Your choices will shape the destiny of the universe.
        </p>
        <Link href="/play" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
          Begin Your Adventure
        </Link>
      </div>
    </div>
  );
}