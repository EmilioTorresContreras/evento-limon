'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@clerk/nextjs';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import AuthButtons from './AuthButtons';
import UserProfileButton from './UserProfileButton';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar() {
  const { isSignedIn } = useAuth();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const routes = [
    { name: 'Inicio', path: '/' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Acerca', path: '/acerca' },
    // { name: 'Formulario', path: '/formulario' },
  ];

  const NavItems = () => (
    <>
      {routes.map((route) => (
        <Link
          key={route.path}
          href={route.path}
          className={cn(
            'px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 ease-in-out',
            isActive(route.path)
              ? 'bg-[#e8da89] text-[#2d957e] shadow-inner font-bold mx-2'
              : 'bg-[#2d957e] text-sm text-white hover:bg-[#e8da89] hover:text-[#2d957e] py-2 px-3 rounded-md transition-colors font-semibold'
          )}
        >
          {route.name}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="bg-[#2d957e] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <NavItems />
            {isSignedIn ? <UserProfileButton /> : <AuthButtons />}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="p-2 rounded-md text-white hover:bg-[#378675] focus:outline-none"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#2d957e] border-l border-[#378675] w-64 p-0">
                <SheetHeader>
                  <SheetTitle>
                    <div className="px-4">
                      <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                        <Image
                          src="/limon2.png"
                          alt="Ícono de limón"
                          width={24}
                          height={24}
                          className="rounded-md"
                        />
                        <span className="ml-2 text-lg font-bold text-white">Eventos Limón</span>
                      </Link>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">

                  <div className="flex flex-col space-y-2 px-4">
                    {routes.map((route) => (
                      <Link
                        key={route.path}
                        href={route.path}
                        className={cn(
                          'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out',
                          isActive(route.path)
                            ? 'bg-[#e8da89] text-[#2d957e] shadow-inner font-semibold'
                            : 'text-white hover:bg-[#378675]'
                        )}
                      >
                        {route.name}
                      </Link>
                    ))}
                    <div className="mt-4">
                      {isSignedIn ? <UserProfileButton /> : <AuthButtons />}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}