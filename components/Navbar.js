"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const router = useRouter(); 
  const isActive = (path) => router.pathname === path;

  return (
    <nav className="bg-blue-500 text-white p-4 ">
      <div className="container mx-auto flex justify-between">
        <Link href="/" legacyBehavior>
          <p className="text-lg font-bold cursor-pointer">Travel Wale</p>
        </Link>
        <div className="space-x-4 flex items-center">
          <Link href="/blogs" legacyBehavior>
            <a
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 
                ${isActive('/blog') ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-400 hover:text-black'}`}
            >
              Blog
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 
                ${isActive('/about') ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-400 hover:text-black'}`}
            >
              About
            </a>
          </Link>
          <Link href="/gallery" legacyBehavior>
            <a
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 
                ${isActive('/gallery') ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-400 hover:text-black'}`}
            >
              Gallery
            </a>
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
