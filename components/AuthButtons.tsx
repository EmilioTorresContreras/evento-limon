// components/AuthButtons.tsx
'use client';

import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

export default function AuthButtons() {
    const { isSignedIn, signOut } = useAuth();

    if (isSignedIn) {
        return (
            <button
                onClick={() => signOut()}
                className="bg-red-500 text-sm hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors"
            >
                Cerrar sesión
            </button>
        );
    }

    return (
        <div className="flex ">
            <Link
                href="/sign-in"
                className="bg-[#2d957e] text-sm text-white hover:bg-[#e8da89] hover:text-[#2d957e] py-2 px-3 rounded-md transition-colors font-semibold"
            >
                Iniciar sesión
            </Link>
            <Link
                href="/sign-up"
                className="bg-[#2d957e] text-sm text-white hover:bg-[#e8da89] hover:text-[#2d957e] py-2 px-3 rounded-md transition-colors font-semibold"
            >
                Registrarse
            </Link>
        </div>
    );
}