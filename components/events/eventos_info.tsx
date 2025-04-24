// components/events/upcoming-events.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

// Tipo para los eventos
interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  attendees: number;
  maxAttendees?: number;
}

// Datos de ejemplo para eventos próximos
const eventsMock: Event[] = [
  {
    id: "evt-001",
    title: "Festival Gastronómico Limón",
    date: "15 Mayo 2025",
    time: "12:00 - 20:00",
    location: "Parque Central",
    category: "Gastronomía",
    image: "/evento-noche.png",
    attendees: 120,
    maxAttendees: 200
  },
  {
    id: "evt-002",
    title: "Conferencia de Emprendimiento",
    date: "22 Mayo 2025",
    time: "09:00 - 18:00",
    location: "Centro de Convenciones",
    category: "Negocios",
    image: "/evento-dia.png",
    attendees: 85,
    maxAttendees: 150
  },
  {
    id: "evt-003",
    title: "Concierto Bajo las Estrellas",
    date: "30 Mayo 2025",
    time: "19:00 - 23:00",
    location: "Anfiteatro Municipal",
    category: "Música",
    image: "/evento-login.png",
    attendees: 210,
    maxAttendees: 300
  }
];

export default function EventosInfo() {
  const [events] = useState<Event[]>(eventsMock);

  // Función para determinar el color de la categoría
  const getCategoryColor = (category: string) => {
    const categories: Record<string, string> = {
      "Gastronomía": "bg-orange-100 text-orange-800",
      "Negocios": "bg-blue-100 text-blue-800",
      "Música": "bg-purple-100 text-purple-800",
      "Deporte": "bg-green-100 text-green-800",
      "Arte": "bg-pink-100 text-pink-800",
      "Tecnología": "bg-indigo-100 text-indigo-800"
    };
    
    return categories[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <Card key={event.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all">
          <div className="aspect-video w-full relative overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <Badge 
              className={`absolute top-3 left-3 ${getCategoryColor(event.category)}`}
            >
              {event.category}
            </Badge>
          </div>
          
          <CardContent className="pt-4 pb-2">
            <h3 className="text-xl font-bold mb-3 line-clamp-2">{event.title}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-2 text-[#2d957e]" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-[#2d957e]" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-[#2d957e]" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-[#2d957e]" />
                <span>{event.attendees} {event.maxAttendees ? `/ ${event.maxAttendees}` : ""} asistentes</span>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="pt-0 pb-4">
            <Button 
              asChild
              variant="default" 
              className="w-full bg-[#2d957e] hover:bg-[#2d957e]/90"
            >
              <Link href={`/eventos/${event.id}`}>
                Ver Detalles
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}