'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import AuthButtons from './AuthButtons';
import { useAuth } from '@clerk/nextjs';
import UserProfileButton from './UserProfileButton';


export default function Navbar() {

  const { isSignedIn } = useAuth();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? ' bg-[#e8da89] text-[#2d957e] shadow-inner font-semibold'
      : ' text-white hover:bg-[#378675] transition-all  duration-200 ease-in-out';
  };

  return (
    <nav className="bg-[#2d957e] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/limon2.png"
                alt="Ícono de limón"
                width={32}
                height={32}
                className="rounded-md"
              />

              <span className="ml-2 text-xl font-bold text-white">Eventos Limón</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex md:space-x-4">
              <Link
                href="/"
                className={`px-4 py-2 rounded-md text-sm font-medium bg-[#2d957e] transition-all duration-200 ease-in-out ${isActive('/')}`}
              >
                Inicio
              </Link>
              <Link
                href="/eventos"
                className={`px-4 py-2 rounded-md text-sm font-medium bg-[#2d957e] transition-all duration-200 ease-in-out ${isActive('/eventos')}`}
              >
                Eventos
              </Link>
              <div className="flex items-center gap-4">
                {isSignedIn ? <UserProfileButton /> : <AuthButtons />}
              </div>
              <Link
                href="/formulario"
                className={`px-4 py-2 rounded-md text-sm font-medium bg-[#2d957e] transition-all duration-200 ease-in-out ${isActive('/formulario')}`}
              >
                Formulario
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="flex items-center md:hidden">
            <div className="space-x-2">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium text-[#2d957e] transition-all duration-200 ease-in-out ${isActive('/')}`}
              >
                Inicio
              </Link>
              <Link
                href="/eventos"
                className={`px-3 py-2 rounded-md text-sm font-medium text-[#2d957e] transition-all duration-200 ease-in-out ${isActive('/eventos')}`}
              >
                Eventos
              </Link>
              <div className="flex items-center gap-4">
                {isSignedIn ? <UserProfileButton /> : <AuthButtons />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
