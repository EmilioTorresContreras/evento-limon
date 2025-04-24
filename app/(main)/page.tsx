import { getInfoFeatures } from "@/lib/info";
import { InfoItem } from "@/types/info";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Users, ClipboardList, MapPin, Clock, Star } from "lucide-react";
import Link from "next/link";

// import UpcomingEvents from "@/components/events/upcoming-events";
import { getInfoTestimonios } from "@/lib/testimonios";
import { Testimonio } from "@/types/testimonio";
import EventosInfo from "@/components/events/eventos_info";

export default async function Home() {
  const features: InfoItem[] = await getInfoFeatures();
  const testimonios: Testimonio[] = await getInfoTestimonios();

  return (
    <main className="flex flex-col items-center bg-gray-50">
      {/* Hero Section - Mejorado con overlay gradiente */}
      <section
        className="relative w-full h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url("/evento-login.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <p className="mb-4 text-gray-200">Tu plataforma de eventos</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Eventos Limón
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8">
            Tu plataforma para crear y gestionar eventos de manera sencilla e intuitiva
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#e8da89] hover:bg-[#2d957e] text-[#2d957e] hover:text-[#e8da89] font-medium"
            >
              <Link href="/eventos">
                Ver Eventos
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#2d957e] hover:bg-[#e8da89] text-[#e8da89] hover:text-[#2d957e] font-medium"
            >
              <Link href="/crear-evento">
                Crear Evento
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-[#e8da89] text-[#2d957e] hover:bg-[#e8da89]/90">Lo que ofrecemos</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Características Principales</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestra plataforma está diseñada para facilitar la creación y gestión de eventos con herramientas intuitivas y potentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-[#e8da89]/20 flex items-center justify-center text-[#2d957e] mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#2d957e] py-16">
        <div className="container text-center mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Empieza a crear tus eventos hoy mismo
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Únete a miles de organizadores que confían en Eventos Limón para gestionar sus eventos
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#e8da89] hover:bg-white text-[#2d957e] font-medium"
          >
            <Link href="/registro">
              Registrarse Gratis
            </Link>
          </Button>
        </div>
      </section>

      {/* Información de eventos */}
      <section className="w-full bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-[#e8da89] text-[#2d957e] hover:bg-[#e8da89]/90">Explora</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Próximos Eventos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre los eventos más destacados que se acercan y no te pierdas la oportunidad de participar
            </p>
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="default"
              className="bg-[#2d957e] hover:bg-[#2d957e]/90 text-white"
            >
              <Link href="/eventos">
                Ver todos los eventos
              </Link>
            </Button>
          </div>

          <EventosInfo />

        </div>
      </section>

      {/* Testimonios */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-[#e8da89] text-[#2d957e] hover:bg-[#e8da89]/90 ">Testimonios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Lo que dicen nuestros usuarios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experiencias de organizadores y participantes que han utilizado nuestra plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonios.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-100">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-gray-700 font-medium">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      

    </main>
  );
}