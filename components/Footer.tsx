'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#2d957e] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y Descripción */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <Image
                src="/limon2.png"
                alt="Ícono de limón"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="ml-2 text-xl font-bold">Eventos Limón</span>
            </div>
            <p className="text-sm text-gray-100 mb-4">
              Conectando a la comunidad con los mejores eventos locales y 
              facilitando la organización de experiencias memorables.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-[#e8da89] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#e8da89] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#e8da89] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Enlaces Rápidos */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-100 hover:text-[#e8da89] transition-colors">
                Inicio
              </Link>
              <Link href="/eventos" className="text-gray-100 hover:text-[#e8da89] transition-colors">
                Eventos
              </Link>
              <Link href="/acerca" className="text-gray-100 hover:text-[#e8da89] transition-colors">
                Acerca de Nosotros
              </Link>
              <Link href="/contacto" className="text-gray-100 hover:text-[#e8da89] transition-colors">
                Contacto
              </Link>
            </div>
          </div>
          
          {/* Contacto */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <p>Calle Principal #123</p>
              <p>Ciudad, Provincia</p>
              <p>info@eventoslimon.com</p>
              <p>+52 123 456 7890</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#378675] mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-100">
              &copy; {currentYear} Eventos Limón. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacidad" className="text-sm text-gray-100 hover:text-[#e8da89] transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-sm text-gray-100 hover:text-[#e8da89] transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}