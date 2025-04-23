// components/AuthModal.tsx
'use client';

import { useState } from 'react';
import { SignIn, SignUp } from '@clerk/nextjs';
import Modal from './Modal';

interface AuthModalProps {
  onClose: () => void;
  initialView?: 'signIn' | 'signUp';
}

export default function AuthModal({ onClose, initialView = 'signIn' }: AuthModalProps) {
  const [view, setView] = useState<'signIn' | 'signUp'>(initialView);
  
  
  return (
    <Modal onClose={onClose}>
      <div className="w-full flex flex-col items-center">
        {view === 'signIn' ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
            <SignIn 
              redirectUrl="/"
              routing="virtual"
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-blue-500 hover:bg-blue-600',
                  card: 'w-full shadow-none',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                  dividerRow: 'hidden',
                  footer: 'hidden',
                }
              }}
              // Quitamos afterSignIn y afterSignInUrl
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                ¿No tienes una cuenta?{' '}
                <button 
                  onClick={() => setView('signUp')}
                  className="text-blue-500 hover:underline"
                >
                  Regístrate
                </button>
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">Registrarse</h2>
            <SignUp 
              redirectUrl="/"
              routing="virtual"
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-blue-500 hover:bg-blue-600',
                  card: 'w-full shadow-none',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                  dividerRow: 'hidden',
                  footer: 'hidden',
                }
              }}
              // Quitamos afterSignUp y afterSignUpUrl
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                ¿Ya tienes una cuenta?{' '}
                <button 
                  onClick={() => setView('signIn')}
                  className="text-blue-500 hover:underline"
                >
                  Inicia sesión
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}