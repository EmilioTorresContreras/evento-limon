// app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-gray-50">
      <div className="w-full max-w-6xl">
        <section
          className="relative h-[60vh] rounded-xl overflow-hidden mb-12 flex items-center justify-center text-center"
          style={{
            backgroundImage: 'url("/evento-login.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/25"></div>
          <div className="absolute inset-0 bg-opacity-60" />
          <div className="relative z-10 text-[#F5F3EB] px-6">
            <h1 className="text-3xl font-bold text-white px-2 py-2 rounded-md inline-block">
            Eventos Limón
            </h1>
            <p className="text-base text-3xl  px-1 py-1 my-3 rounded-md md:text-lg max-w-2xl mx-auto mb-6">
              Tu plataforma para crear y gestionar eventos de manera sencilla
            </p>
            <a
              href="/eventos"
              className="inline-block font-semibold bg-[#e8da89] hover:bg-[#2d957e] text-[#2d957e] hover:text-white py-2 px-6 rounded-lg transition-all text-sm shadow-md"
            >
              Eventos
            </a>
          </div>
        </section>

        {/* Características */}
        <section className="py-8 md:py-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Características</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow text-sm"
              >
                <div className="text-[#2d957e] mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

const features = [
  {
    title: 'Gestión de Eventos',
    description:
      'Crea y organiza tus eventos de manera eficiente con nuestro sistema de gestión intuitivo.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    ),
  },
  {
    title: 'Control de Participantes',
    description:
      'Registra y administra fácilmente la lista de participantes para cada uno de tus eventos.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        ></path>
      </svg>
    ),
  },
  {
    title: 'Información Detallada',
    description:
      'Almacena toda la información relevante sobre tus eventos en un solo lugar, fácil de acceder.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        ></path>
      </svg>
    ),
  },
];
