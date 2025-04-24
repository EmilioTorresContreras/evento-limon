'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Banner */}
                <section
                    className="relative w-full h-45 flex items-center justify-center"
                    style={{
                        backgroundImage: 'url("/evento-login.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
                    <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#fff] mb-4">Acerca de Eventos Limón</h1>
                    </div>
                </section>

                {/* Contenido */}
                <div className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold text-[#2d957e] mb-4">Nuestra Misión</h2>
                            <p className="text-gray-700 mb-6">
                                En Eventos Limón, nos dedicamos a conectar a la comunidad a través de eventos
                                significativos y memorables. Nuestra plataforma facilita la organización,
                                promoción y participación en eventos locales, fomentando la cultura, el
                                entretenimiento y el desarrollo comunitario.
                            </p>

                            <h2 className="text-2xl font-bold text-[#2d957e] mb-4">Nuestra Visión</h2>
                            <p className="text-gray-700 mb-6">
                                Aspiramos a convertirnos en el principal punto de encuentro digital para
                                eventos en nuestra región, creando un espacio donde organizadores y
                                participantes puedan interactuar de manera sencilla y efectiva,
                                enriqueciendo la vida cultural y social de nuestra comunidad.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#2d957e] mb-4">Quiénes Somos</h2>
                            <p className="text-gray-700 mb-6">
                                Somos un equipo apasionado de profesionales comprometidos con el desarrollo
                                comunitario a través de eventos. Fundada en 2023, nuestra plataforma
                                nació de la necesidad de tener un espacio centralizado para descubrir y
                                participar en los mejores eventos de la región.
                            </p>

                            <h2 className="text-2xl font-bold text-[#2d957e] mb-4">Nuestros Valores</h2>
                            <ul className="text-gray-700 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-[#e8da89] mr-2"></div>
                                    <span>Compromiso con la comunidad</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-[#e8da89] mr-2"></div>
                                    <span>Innovación y mejora continua</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-[#e8da89] mr-2"></div>
                                    <span>Transparencia y confianza</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-[#e8da89] mr-2"></div>
                                    <span>Inclusión y diversidad</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#2d957e] mb-4 text-center">¿Quieres ser parte?</h2>
                        <p className="text-gray-700 text-center mb-6">
                            Únete a nuestra comunidad de organizadores y participantes para descubrir
                            y crear los mejores eventos de la región.
                        </p>
                        <div className="flex justify-center">
                            <Link
                                href="/eventos"
                                className="bg-[#e8da89] text-[#2d957e] hover:bg-[#2d957e] hover:text-white py-2 px-6 rounded-md transition-colors font-semibold"
                            >
                                Explorar Eventos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}